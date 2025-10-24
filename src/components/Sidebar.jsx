// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import LanguageSelector from './LanguageSelector'; // Importar novo componente
//import logo from '../assets/wizard_hat_logo_inverted_magic';
import logo from '../assets/logo_home.png';

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/about', icon: User, label: t('nav.about') },
    { path: '/services', icon: Briefcase, label: t('nav.services') },
    { path: '/notes', icon: BookOpen, label: t('nav.notes') },
    { path: '/contact', icon: Mail, label: t('nav.contact') },
  ];



  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300" />
      </div>

      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleSidebar} //mobile
            >
              <div className="flex items-center gap-3">
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <LanguageSelector />
      </div>
    </div>
  );
}
