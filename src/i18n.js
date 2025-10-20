// src/i18n.js
// Configuração do i18next para internacionalização (i18n)
// Este arquivo configura o sistema de traduções para 3 idiomas: Inglês, Português (PT-BR) e Espanhol

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Recursos de tradução para cada idioma
const resources = {
  en: {
    translation: {
      // Navegação
      nav: {
        home: 'Home',
        about: 'About Me',
        services: 'Services',
        notes: 'Notes',
        contact: 'Contact',
      },
      // Página Home
      home: {
        greeting: 'Welcome, traveler!',
        intro: 'I am a developer, reader, and lover of classic music and medieval fantasy.',
        stats: {
          years: 'Years of Experience',
          projects: 'Projects Completed',
          satisfaction: 'Client Satisfaction',
        },
        cta: {
          notes: 'Explore Notes',
          services: 'View Services',
          about: 'About Me',
        },
      },
      // Página Sobre Mim
      about: {
        title: 'About Me',
        greeting: 'Hi there, I\'m',
        intro: ' This is my digital realm, where I share my journey through code, books, and music.',
        description: 'I\'m a developer passionate about creating elegant solutions and exploring the intersection of technology and art. My first contact with programming was through Tibia, a medieval MMORPG that sparked my fascination with both fantasy worlds and the code that brings them to life.',
        passion: 'When I\'m not coding, you\'ll find me immersed in classic literature, listening to Bach and Beethoven, or exploring the mystical aesthetics of Gothic and medieval art.',
        quote: 'The journey of a thousand commits begins with a single line of code.',
        developer: 'Developer',
        developerDesc: 'Passionate about clean code and elegant solutions',
        reader: 'Reader',
        readerDesc: 'From medieval tales to modern tech books',
        musicLover: 'Music Lover',
        musicLoverDesc: 'Classical music fuels my creativity',
      },
      // Página Serviços
      services: {
        title: 'IT Services',
        subtitle: 'Professional solutions for your technology needs',
        maintenance: {
          title: 'Computer Maintenance',
          description: 'Preventive and corrective maintenance for desktops and laptops.',
          features: ['Hardware diagnostics', 'Software optimization', 'Virus and malware removal', 'Component upgrades'],
        },
        network: {
          title: 'Network Configuration',
          description: 'Setup and optimization of local and wireless networks.',
          features: ['Router and switch configuration', 'Wi-Fi network optimization', 'Network security', 'VPN setup'],
        },
        web: {
          title: 'Website Development',
          description: 'Creation of modern and responsive websites.',
          features: ['Custom design', 'SEO optimization', 'Responsive layout', 'CMS integration'],
        },
        differentials: {
          title: 'Why Choose Me?',
          security: {
            title: 'Security',
            description: 'Protection and privacy for your data',
          },
          agility: {
            title: 'Agility',
            description: 'Fast and efficient solutions',
          },
          trust: {
            title: 'Trust',
            description: 'Transparency and commitment',
          },
        },
        cta: 'Get in Touch',
      },
      // Página Notas
      notes: {
        title: 'Notes',
        subtitle: 'Thoughts, tips, and curiosities',
        categories: {
          games: 'Games',
          literature: 'Literature',
          music: 'Music',
          travel: 'Travel',
          tips: 'Tips',
        },
        readMore: 'Read More',
      },
      // Página Contato
      contact: {
        title: 'Contact',
        subtitle: 'Get in touch',
        email: {
          title: 'Email',
          button: 'Send Email',
        },
        social: {
          title: 'Social Networks',
        },
        footer: 'I respond to all messages within 24 hours ⚡',
      },
    },
  },
  pt: {
    translation: {
      // Navegação
      nav: {
        home: 'Início',
        about: 'Sobre Mim',
        services: 'Serviços',
        notes: 'Notas',
        contact: 'Contato',
      },
      // Página Home
      home: {
        greeting: 'Bem-vindo, viajante!',
        intro: 'Sou desenvolvedor, leitor e amante de música clássica e fantasia medieval.',
        stats: {
          years: 'Anos de Experiência',
          projects: 'Projetos Concluídos',
          satisfaction: 'Satisfação do Cliente',
        },
        cta: {
          notes: 'Explorar Notas',
          services: 'Ver Serviços',
          about: 'Sobre Mim',
        },
      },
      // Página Sobre Mim
      about: {
        title: 'Sobre Mim',
        greeting: 'Olá, eu sou',
        intro: ' Este é meu reino digital, onde compartilho minha jornada através do código, livros e música.',
        description: 'Sou um desenvolvedor apaixonado por criar soluções elegantes e explorar a interseção entre tecnologia e arte. Meu primeiro contato com programação foi através do Tibia, um MMORPG medieval que despertou minha fascinação tanto por mundos de fantasia quanto pelo código que os traz à vida.',
        passion: 'Quando não estou codando, você me encontrará imerso em literatura clássica, ouvindo Bach e Beethoven, ou explorando a estética mística da arte gótica e medieval.',
        quote: 'A jornada de mil commits começa com uma única linha de código.',
        developer: 'Desenvolvedor',
        developerDesc: 'Apaixonado por código limpo e soluções elegantes',
        reader: 'Leitor',
        readerDesc: 'De contos medievais a livros de tecnologia moderna',
        musicLover: 'Amante de Música',
        musicLoverDesc: 'Música clássica alimenta minha criatividade',
      },
      // Página Serviços
      services: {
        title: 'Serviços de TI',
        subtitle: 'Soluções profissionais para suas necessidades tecnológicas',
        maintenance: {
          title: 'Manutenção de Computadores',
          description: 'Manutenção preventiva e corretiva para desktops e notebooks.',
          features: ['Diagnóstico de hardware', 'Otimização de software', 'Remoção de vírus e malware', 'Upgrade de componentes'],
        },
        network: {
          title: 'Configuração de Rede',
          description: 'Configuração e otimização de redes locais e sem fio.',
          features: ['Configuração de roteadores e switches', 'Otimização de rede Wi-Fi', 'Segurança de rede', 'Configuração de VPN'],
        },
        web: {
          title: 'Desenvolvimento de Sites',
          description: 'Criação de sites modernos e responsivos.',
          features: ['Design personalizado', 'Otimização SEO', 'Layout responsivo', 'Integração com CMS'],
        },
        differentials: {
          title: 'Por Que Me Escolher?',
          security: {
            title: 'Segurança',
            description: 'Proteção e privacidade para seus dados',
          },
          agility: {
            title: 'Agilidade',
            description: 'Soluções rápidas e eficientes',
          },
          trust: {
            title: 'Confiança',
            description: 'Transparência e compromisso',
          },
        },
        cta: 'Entrar em Contato',
      },
      // Página Notas
      notes: {
        title: 'Notas',
        subtitle: 'Pensamentos, dicas e curiosidades',
        categories: {
          games: 'Games',
          literature: 'Literatura',
          music: 'Música',
          travel: 'Viagem',
          tips: 'Dicas',
        },
        readMore: 'Ler Mais',
      },
      // Página Contato
      contact: {
        title: 'Contato',
        subtitle: 'Entre em contato',
        email: {
          title: 'Email',
          button: 'Enviar Email',
        },
        social: {
          title: 'Redes Sociais',
        },
        footer: 'Respondo todas as mensagens em até 24 horas ⚡',
      },
    },
  },
  es: {
    translation: {
      // Navegação
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        services: 'Servicios',
        notes: 'Notas',
        contact: 'Contacto',
      },
      // Página Home
      home: {
        greeting: '¡Bienvenido, viajero!',
        intro: 'Soy desarrollador, lector y amante de la música clásica y la fantasía medieval.',
        stats: {
          years: 'Años de Experiencia',
          projects: 'Proyectos Completados',
          satisfaction: 'Satisfacción del Cliente',
        },
        cta: {
          notes: 'Explorar Notas',
          services: 'Ver Servicios',
          about: 'Sobre Mí',
        },
      },
      // Página Sobre Mim
      about: {
        title: 'Sobre Mí',
        greeting: 'Hola, soy',
        intro: ' Este es mi reino digital, donde comparto mi viaje a través del código, libros y música.',
        description: 'Soy un desarrollador apasionado por crear soluciones elegantes y explorar la intersección entre tecnología y arte. Mi primer contacto con la programación fue a través de Tibia, un MMORPG medieval que despertó mi fascinación tanto por los mundos de fantasía como por el código que los da vida.',
        passion: 'Cuando no estoy programando, me encontrarás inmerso en literatura clásica, escuchando Bach y Beethoven, o explorando la estética mística del arte gótico y medieval.',
        quote: 'El viaje de mil commits comienza con una sola línea de código.',
        developer: 'Desarrollador',
        developerDesc: 'Apasionado por código limpio y soluciones elegantes',
        reader: 'Lector',
        readerDesc: 'De cuentos medievales a libros de tecnología moderna',
        musicLover: 'Amante de la Música',
        musicLoverDesc: 'La música clásica alimenta mi creatividad',
      },
      // Página Serviços
      services: {
        title: 'Servicios de TI',
        subtitle: 'Soluciones profesionales para sus necesidades tecnológicas',
        maintenance: {
          title: 'Mantenimiento de Computadoras',
          description: 'Mantenimiento preventivo y correctivo para computadoras de escritorio y portátiles.',
          features: ['Diagnóstico de hardware', 'Optimización de software', 'Eliminación de virus y malware', 'Actualización de componentes'],
        },
        network: {
          title: 'Configuración de Red',
          description: 'Configuración y optimización de redes locales e inalámbricas.',
          features: ['Configuración de routers y switches', 'Optimización de red Wi-Fi', 'Seguridad de red', 'Configuración de VPN'],
        },
        web: {
          title: 'Desarrollo de Sitios Web',
          description: 'Creación de sitios web modernos y responsivos.',
          features: ['Diseño personalizado', 'Optimización SEO', 'Diseño responsivo', 'Integración con CMS'],
        },
        differentials: {
          title: '¿Por Qué Elegirme?',
          security: {
            title: 'Seguridad',
            description: 'Protección y privacidad para sus datos',
          },
          agility: {
            title: 'Agilidad',
            description: 'Soluciones rápidas y eficientes',
          },
          trust: {
            title: 'Confianza',
            description: 'Transparencia y compromiso',
          },
        },
        cta: 'Ponerse en Contacto',
      },
      // Página Notas
      notes: {
        title: 'Notas',
        subtitle: 'Pensamientos, consejos y curiosidades',
        categories: {
          games: 'Juegos',
          literature: 'Literatura',
          music: 'Música',
          travel: 'Viaje',
          tips: 'Consejos',
        },
        readMore: 'Leer Más',
      },
      // Página Contato
      contact: {
        title: 'Contacto',
        subtitle: 'Póngase en contacto',
        email: {
          title: 'Correo electrónico',
          button: 'Enviar Correo',
        },
        social: {
          title: 'Redes Sociales',
        },
        footer: 'Respondo todos los mensajes en 24 horas ⚡',
      },
    },
  },
};

// Inicializa o i18next
i18n
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources, // Recursos de tradução
    lng: 'pt', // Idioma padrão (Português)
    fallbackLng: 'en', // Idioma de fallback (Inglês)
    interpolation: {
      escapeValue: false, // React já faz o escape por padrão
    },
  });

export default i18n;

