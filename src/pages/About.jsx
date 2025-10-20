import { useTranslation } from 'react-i18next';
import { Github, Instagram, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import avatar from '../assets/avatar.png';

export default function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-accent text-sm mb-2 font-mono">$ cat about.md</div>
        <h1 className="text-3xl mb-2">{t('about.title')}</h1>
        <div className="h-1 w-20 bg-accent mb-4"></div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <img 
                src={avatar} 
                alt="Matheus Suzart Avatar" 
                className="w-48 h-48 rounded-lg border-2 border-accent/50 group-hover:border-accent transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.greeting')} <span className="text-accent font-bold">Matheus Suzart</span>. 
                {t('about.intro')}
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {t('about.passion')}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r italic text-gray-400">
              "{t('about.quote')}"
            </blockquote>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/matsuzart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
              >
                <Github size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/matsuzart/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
              >
                <Instagram size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">Instagram</span>
              </a>

              <a
                href="mailto:mathsuzart@outlook.com"
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent transition-all duration-300 group"
              >
                <Mail size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills/Interests */}
      <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-lg p-4 hover:border-accent transition-all duration-300">
            <div className="text-accent text-2xl mb-2">💻</div>
            <h3 className="text-lg font-bold text-accent mb-2">{t('about.developer')}</h3>
            <p className="text-sm text-gray-400">{t('about.developerDesc')}</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-lg p-4 hover:border-primary transition-all duration-300">
            <div className="text-primary text-2xl mb-2">📚</div>
            <h3 className="text-lg font-bold text-primary mb-2">{t('about.reader')}</h3>
            <p className="text-sm text-gray-400">{t('about.readerDesc')}</p>
          </div>

          <div className="bg-gradient-to-br from-magic-light/10 to-transparent border border-magic-light/30 rounded-lg p-4 hover:border-magic-light transition-all duration-300">
            <div className="text-magic-light text-2xl mb-2">🎵</div>
            <h3 className="text-lg font-bold text-magic-light mb-2">{t('about.musicLover')}</h3>
            <p className="text-sm text-gray-400">{t('about.musicLoverDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

