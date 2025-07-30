import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Register = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    accountType: 'user',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا تضيف الكود الخاص بإرسال بيانات التسجيل للسيرفر لاحقاً
    alert(`تم التسجيل بنجاح: ${JSON.stringify(form)}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white relative">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold mb-6">{t('register')}</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-blur-md"
      >
        <label className="block mb-4">
          <span>{t('name')}</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded p-2 text-black"
            placeholder={t('name')}
          />
        </label>

        <label className="block mb-4">
          <span>{t('email')}</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded p-2 text-black"
            placeholder={t('email')}
          />
        </label>

        <label className="block mb-4">
          <span>{t('password')}</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded p-2 text-black"
            placeholder={t('password')}
          />
        </label>

        <label className="block mb-6">
          <span>{t('accountType')}</span>
          <select
            name="accountType"
            value={form.accountType}
            onChange={handleChange}
            className="mt-1 w-full rounded p-2 text-black"
          >
            <option value="user">{t('user')}</option>
            <option value="business">{t('business')}</option>
            <option value="vip">{t('vip')}</option>
            <option value="developer">{t('developer')}</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-white text-indigo-700 font-semibold py-3 rounded hover:bg-gray-100 transition"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default Register;
