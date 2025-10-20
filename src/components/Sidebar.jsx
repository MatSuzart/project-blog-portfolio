// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, User, Briefcase, BookOpen, Mail, Globe } from 'lucide-react';
//import logo from '../assets/wizard_hat_logo_inverted_magic.png';
import logo from '../assets/logo_home.png';

export default function Sidebar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/about', icon: User, label: t('nav.about') },
    { path: '/services', icon: Briefcase, label: t('nav.services') },
    { path: '/notes', icon: BookOpen, label: t('nav.notes') },
    { path: '/contact', icon: Mail, label: t('nav.contact') },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="sidebar">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300" />
      </div>

      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`nav-link ${isActive ? 'active' : ''}`}>
              <div className="flex items-center gap-3">
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
          <Globe size={14} />
          <span>Language</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => changeLanguage('en')} className={`text-xs px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-accent text-background' : 'bg-gray-700 text-gray-300'}`}>EN</button>
          <button onClick={() => changeLanguage('pt')} className={`text-xs px-2 py-1 rounded ${i18n.language === 'pt' ? 'bg-accent text-background' : 'bg-gray-700 text-gray-300'}`}>PT</button>
          <button onClick={() => changeLanguage('es')} className={`text-xs px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-accent text-background' : 'bg-gray-700 text-gray-300'}`}>ES</button>
        </div>
      </div>
    </div>
  );
}

