require('dotenv').config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000", // عيّن رابط الواجهة الأمامية
  credentials: true,               // للسماح بملفات تعريف الارتباط
}));
app.use(express.json());
app.use(cookieParser());

// قاعدة بيانات وهمية (مؤقتة) للمستخدمين مع كلمات مرور مشفرة
const users = [
  {
    id: 1,
    username: "omer",
    passwordHash: "", // سيتم تعبئته عند تشغيل السيرفر
    role: "vip",
  },
  {
    id: 2,
    username: "business1",
    passwordHash: "",
    role: "business",
  },
];

// تشفير كلمات المرور عند بدء التشغيل (للمثال فقط)
async function hashPasswords() {
  for (let user of users) {
    if (!user.passwordHash) {
      // كلمات السر الأصلية (للمثال فقط)
      let plainPassword = user.username === "omer" ? "123456" : "abcdef";
      user.passwordHash = await bcrypt.hash(plainPassword, 10);
    }
  }
}

hashPasswords();

// دالة إنشاء توكن وصول
function createAccessToken(user) {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
}

// دالة إنشاء توكن تجديد
function createRefreshToken(user) {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
}

// تسجيل الدخول
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  // إرسال التوكنات في كوكيز HttpOnly
  res.cookie("jid", refreshToken, {
    httpOnly: true,
    secure: false, // غيّره إلى true عند استخدام HTTPS في الإنتاج
    path: "/api/refresh_token",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 أيام
  });

  res.json({ accessToken, role: user.role, username: user.username });
});

// نقطة تحديث التوكن
app.post("/api/refresh_token", (req, res) => {
  const token = req.cookies.jid;
  if (!token) return res.status(401).json({ accessToken: "" });

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = users.find(u => u.id === payload.id);
    if (!user) return res.status(401).json({ accessToken: "" });

    const accessToken = createAccessToken(user);
    res.json({ accessToken, role: user.role, username: user.username });
  } catch (err) {
    return res.status(401).json({ accessToken: "" });
  }
});

// تسجيل الخروج
app.post("/api/logout", (_req, res) => {
  res.clearCookie("jid", { path: "/api/refresh_token" });
  res.json({ message: "Logged out" });
});

// مسار محمي كمثال
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

app.get("/api/profile", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
