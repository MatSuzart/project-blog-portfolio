import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, X } from 'lucide-react';

export default function LanguageSelector({ isFloating = false }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (isFloating) setIsOpen(false);
  };

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];
  
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Renderização para o modo flutuante (Mobile)
  if (isFloating) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-accent text-background-dark shadow-lg flex items-center justify-center border-2 border-accent-gold rounded-sm"
          aria-label="Selecionar Idioma"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{currentLang.flag}</span>
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 mt-12 w-48 bg-card border-2 border-accent-gold rounded-lg shadow-xl z-50 p-2">
            <div className="flex justify-between items-center mb-2 font-['Press_Start_2P']">
                <span className="font-['Press_Start_2P'] text-xs text-accent-gold">Idioma</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-accent-gold" aria-label="Fechar">
                    <X size={16} />
                </button>
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  w-full text-left flex items-center gap-2 p-2 rounded-md transition-colors
                  ${i18n.language === lang.code
                    ? 'bg-accent text-background-dark font-bold'
                    : 'text-foreground hover:bg-gray-700'
                  }
                `}
              >
                <span className="text-lg">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="language-selector">
      <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
        <Globe size={14} className="text-accent-gold" />
        <span className="font-['Press_Start_2P'] text-accent-gold">Idioma</span>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              flex items-center justify-center 
              text-sm font-bold 
              px-3 py-1 rounded-full border-2 
              transition-all duration-200 ease-in-out
              ${i18n.language === lang.code
                ? 'bg-accent text-background-dark border-accent-gold shadow-md'
                : 'bg-gray-700 text-gray-300 border-gray-700 hover:bg-gray-600 hover:border-accent-gold'
              }
            `}
            aria-label={`Mudar idioma para ${lang.name}`}
          >
            <span className="text-lg mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
