import { useTranslation } from 'react-i18next';
import { Mail, Github, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-accent text-sm mb-2 font-mono">$ cat contact.txt</div>
        <h1 className="text-3xl mb-2">{t('contact.title')}</h1>
        <div className="h-1 w-20 bg-accent mb-4"></div>
        <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
      </div>

      {/* Email Card */}
      <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-r-lg border-l-4 border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
          <Mail className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-lg font-bold text-accent mb-2">{t('contact.email.title')}</h3>
          <p className="text-gray-300 mb-4 font-mono">mathsuzart@outlook.com</p>
          <a 
            href="mailto:mathsuzart@outlook.com" 
            className="pixel-button inline-block"
          >
            {t('contact.email.button')}
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-lg font-bold text-accent mb-4">{t('contact.social.title')}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://github.com/matsuzart" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-accent/10 to-transparent p-4 rounded-r-lg border-l-4 border-accent hover:from-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
          >
            <Github className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
            <div>
              <div className="font-bold text-accent">GitHub</div>
              <div className="text-sm text-gray-400">@matsuzart</div>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/matsuzart/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-r-lg border-l-4 border-primary hover:from-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div>
              <div className="font-bold text-primary">Instagram</div>
              <div className="text-sm text-gray-400">@matsuzart</div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-sm text-gray-400 text-center pt-8 border-t border-accent/30">
          {t('contact.footer')}
        </p>
      </div>
    </div>
  );
}

