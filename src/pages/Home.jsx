import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Award, ArrowRight, Code, BookOpen, Music } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-12">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6">
          <div className="text-accent text-sm mb-2 font-mono">$ whoami</div>
          <h1 className="text-3xl md:text-4xl mb-4 leading-tight">{t('home.greeting')}</h1>
          <div className="h-1 w-20 bg-accent mb-6"></div>
        </div>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          {t('home.intro')}
        </p>
      </div>

      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-primary/30 to-primary/10 p-6 rounded-lg border-2 border-accent/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
            <TrendingUp className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">{t('home.stats.years')}</div>
          </div>
          <div className="group bg-gradient-to-br from-primary/30 to-primary/10 p-6 rounded-lg border-2 border-accent/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
            <Sparkles className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">{t('home.stats.projects')}</div>
          </div>
          <div className="group bg-gradient-to-br from-primary/30 to-primary/10 p-6 rounded-lg border-2 border-accent/50 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
            <Award className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">{t('home.stats.satisfaction')}</div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-accent text-sm mb-4 font-mono">$ cat interests.txt</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 bg-background/50 border border-accent/30 rounded hover:border-accent/60 transition-colors duration-300">
            <Code className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <div className="font-bold text-accent mb-1">Developer</div>
              <div className="text-sm text-gray-400">Passionate about clean code and elegant solutions</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-background/50 border border-accent/30 rounded hover:border-accent/60 transition-colors duration-300">
            <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <div className="font-bold text-accent mb-1">Reader</div>
              <div className="text-sm text-gray-400">From medieval tales to modern tech books</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-background/50 border border-accent/30 rounded hover:border-accent/60 transition-colors duration-300">
            <Music className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <div className="font-bold text-accent mb-1">Music Lover</div>
              <div className="text-sm text-gray-400">Classical music fuels my creativity</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-accent text-sm mb-4 font-mono">$ explore --all</div>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/notes" 
            className="group pixel-button flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {t('home.cta.notes')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link 
            to="/services" 
            className="group pixel-button flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {t('home.cta.services')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link 
            to="/about" 
            className="group pixel-button flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {t('home.cta.about')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mt-12 p-4 bg-black/40 border border-accent/30 rounded font-mono text-sm">
          <div className="text-accent mb-2">$ echo "Welcome to my digital realm"</div>
          <div className="text-gray-400">Welcome to my digital realm</div>
          <div className="text-accent mt-2 flex items-center">
            <span>$</span>
            <span className="ml-2 animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

