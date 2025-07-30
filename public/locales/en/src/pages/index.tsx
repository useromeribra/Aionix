import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6">
      <LanguageSwitcher />
      <h1 className="text-5xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-xl mb-8 max-w-xl text-center">{t('description')}</p>
      <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
        {t('landingCTA')}
      </button>
    </div>
  );
}
