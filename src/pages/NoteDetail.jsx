import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';

export default function NoteDetail() {
  const { slug } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    fetchNote();
  }, [slug, location]);

  // Função para buscar uma nota específica da API
  const fetchNote = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/notes');
      
      if (!response.ok) {
        throw new Error('Failed to fetch note');
      }
      
      const data = await response.json();
      const foundNote = data.find(n => n.slug === slug);
      
      if (!foundNote) {
        setError('Note not found');
      } else {
        setNote(foundNote);
      }
    } catch (err) {
      console.error('Error fetching note:', err);
      setError(err.message);
      // Fallback para dados locais em caso de erro
      try {
        const { notes: localNotes } = await import('../data/notes');
        const foundNote = localNotes.find(n => n.slug === slug);
        if (foundNote) {
          setNote(foundNote);
          setError(null);
        }
      } catch {
        setError('Note not found');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-accent text-lg font-mono mb-2">$ loading note...</div>
          <div className="animate-pulse text-gray-400">Please wait</div>
        </div>
      </div>
    );
  }
  
  if (error || !note) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">404</div>
        <div className="text-xl text-gray-400 mb-6">Note not found in the archives</div>
        <Link to="/notes" className="pixel-button">
          Return to Notes
        </Link>
      </div>
    );
  }
  
  // Calcular tempo de leitura estimado (assumindo 200 palavras por minuto)
  const wordCount = note.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  
  return (
    <div className="space-y-8">
      {/* Back Button */}
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <Link 
          to="/notes" 
          className="inline-flex items-center gap-2 text-accent hover:text-magic-light transition-colors duration-300 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-mono text-sm">Back to Notes</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="border-b border-accent/30 pb-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              <span className="font-mono">{note.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-accent" />
              <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                {note.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl mb-4 leading-tight">
            {note.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-gray-400 italic leading-relaxed">
            {note.excerpt}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-accent mt-8 mb-4 pb-2 border-b border-accent/30">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-accent mt-6 mb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-accent mt-4 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="text-accent font-bold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 bg-accent/5 rounded-r italic">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="my-8 border-t-2 border-accent/30" />
              ),
              img: ({...props }) => (
                <img {...props} className="max-w-full h-auto rounded-lg shadow-lg my-4" />
              ),
              a: ({ href, children }) => {
                const isYouTube = href && (href.includes('youtube.com/watch?v=') || href.includes('youtu.be/'));
                
                if (isYouTube) {
                  const videoId = href.includes('youtube.com/watch?v=') ? href.split('v=')[1] : href.split('/').pop();
                  return (
                    <div className="relative w-full h-0 pb-[56.25%] my-4">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video player"
                      ></iframe>
                    </div>
                  );
                }
                
                return (
                  <a 
                    href={href} 
                    className="text-accent underline hover:text-magic-light transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
              code: ({ inline, className, children }) => {
                const match = /language-(\w+)/.exec(className || '');
                if (!inline && match) {
                  return (
                    <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  );
                }
                return (
                  <code className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              },
            }}
          >
            {note.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Footer */}
      <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="border-t border-accent/30 pt-6 mt-12">
          <div className="flex items-center justify-between">
            <Link 
              to="/notes" 
              className="pixel-button"
            >
              ← All Notes
            </Link>
            <div className="text-sm text-gray-400 font-mono">
              End of transmission
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}