import { useTranslation } from 'react-i18next';
import { Wrench, Network, Code, Shield, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl mb-2">{t('services.title')}</h1>
        <p className="text-gray-400">{t('services.subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-primary/20 p-6 rounded border-2 border-accent">
          <Wrench className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-lg font-bold text-accent mb-2">{t('services.maintenance.title')}</h3>
          <p className="text-sm text-gray-300 mb-4">{t('services.maintenance.description')}</p>
          <ul className="text-xs space-y-1 text-gray-400">
            {t('services.maintenance.features', { returnObjects: true }).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={12} className="text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary/20 p-6 rounded border-2 border-accent">
          <Network className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-lg font-bold text-accent mb-2">{t('services.network.title')}</h3>
          <p className="text-sm text-gray-300 mb-4">{t('services.network.description')}</p>
          <ul className="text-xs space-y-1 text-gray-400">
            {t('services.network.features', { returnObjects: true }).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={12} className="text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary/20 p-6 rounded border-2 border-accent">
          <Code className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-lg font-bold text-accent mb-2">{t('services.web.title')}</h3>
          <p className="text-sm text-gray-300 mb-4">{t('services.web.description')}</p>
          <ul className="text-xs space-y-1 text-gray-400">
            {t('services.web.features', { returnObjects: true }).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={12} className="text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl mb-4">{t('services.differentials.title')}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded border border-accent">
            <Shield className="w-8 h-8 text-accent" />
            <div>
              <div className="font-bold text-accent">{t('services.differentials.security.title')}</div>
              <div className="text-xs text-gray-400">{t('services.differentials.security.description')}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded border border-accent">
            <Zap className="w-8 h-8 text-accent" />
            <div>
              <div className="font-bold text-accent">{t('services.differentials.agility.title')}</div>
              <div className="text-xs text-gray-400">{t('services.differentials.agility.description')}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded border border-accent">
            <CheckCircle className="w-8 h-8 text-accent" />
            <div>
              <div className="font-bold text-accent">{t('services.differentials.trust.title')}</div>
              <div className="text-xs text-gray-400">{t('services.differentials.trust.description')}</div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/contact" className="pixel-button inline-block">{t('services.cta')}</Link>
    </div>
  );
}