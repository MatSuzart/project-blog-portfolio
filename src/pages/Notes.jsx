import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Notes() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    fetchNotes();
  }, []);

  // Função para buscar notas da API
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/notes');
      
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      
      const data = await response.json();
      setNotes(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching notes:', err);
      setError(err.message);
      // Fallback para dados locais em caso de erro
      const { notes: localNotes } = await import('../data/notes');
      setNotes(localNotes);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-accent text-lg font-mono mb-2">$ loading notes...</div>
          <div className="animate-pulse text-gray-400">Please wait</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-accent text-sm mb-2 font-mono">$ ls -la notes/</div>
        <h1 className="text-3xl mb-2">{t('notes.title')}</h1>
        <div className="h-1 w-20 bg-accent mb-4"></div>
        <p className="text-gray-400 text-lg">{t('notes.subtitle')}</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm font-mono">
          <span className="text-red-500">⚠</span> API connection failed. Showing cached data.
        </div>
      )}

      {/* Notes Grid */}
      <div className="grid grid-cols-1 gap-6">
        {notes.map((note, index) => (
          <Link 
            key={note.id} 
            to={`/notes/${note.slug}`}
            className={`group block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
          >
            <article className="bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent p-6 rounded-r-lg hover:shadow-lg hover:shadow-accent/10 hover:from-accent/10 transition-all duration-300 hover:-translate-y-1">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" />
                  <span className="font-mono text-xs">{note.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-accent" />
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    {t(`notes.categories.${note.category}`)}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-accent mb-3 group-hover:text-accent/80 transition-colors duration-300">
                {note.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {note.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-2 text-accent text-sm font-mono group-hover:gap-3 transition-all duration-300">
                <span>{t('notes.readMore')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mt-8 p-4 bg-black/40 border border-accent/30 rounded-lg text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-accent font-mono">{notes.length}</span> notes found in the archives
          </p>
        </div>
      </div>
    </div>
  );
}

