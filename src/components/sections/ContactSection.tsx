import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { socialLinks } from '../../data/socialLinks';
import SectionTitle from '../shared/SectionTitle';
import ExternalLink from '../shared/ExternalLink';

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const UniversityMailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17c0 3 4.5 5 10 5s10-2 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const leftRef = useScrollAnimation<HTMLDivElement>({ translateX: [-30, 0], translateY: [0, 0], duration: 800 });
  const rightRef = useScrollAnimation<HTMLDivElement>({ translateX: [30, 0], translateY: [0, 0], duration: 800, delay: 150 });

  const links = [
    { ...socialLinks.linkedin, icon: <LinkedInIcon />, color: '#0077b5' },
    { ...socialLinks.github, icon: <GitHubIcon />, color: '#333' },
    { ...socialLinks.whatsapp, icon: <WhatsAppIcon />, color: '#25d366' },
    { ...socialLinks.emailPersonal, icon: <MailIcon />, color: '#ea4335' },
    { ...socialLinks.emailInstitutional, icon: <UniversityMailIcon />, color: '#34a853' },
  ];

  return (
    <section id="contact" className="section">
      <SectionTitle title={t('contact.title')} titleRef={titleRef} />

      <p className="contact-intro">{t('contact.description')}</p>

      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div className="card">
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '1.75rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
            }}>
              {t('contact.connectTitle')}
            </h3>

            <div className="contact-links-grid">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  style={{ '--link-color': link.color } as React.CSSProperties}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span style={{ fontWeight: 500 }}>{t(link.labelKey)}</span>
                </a>
              ))}
            </div>

            <ExternalLink href={socialLinks.cvDownload.url!} className="btn btn-outline contact-cv-btn">
              <DownloadIcon />
              {t('buttons.downloadCV')}
            </ExternalLink>
          </div>
        </div>

        <div ref={rightRef} style={{ opacity: 0 }}>
          <div className="card">
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '1rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
              textAlign: 'center',
            }}>
              {t('contact.proposalTitle')}
            </h3>

            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}>
              {t('contact.proposalText')}
            </p>

            <a
              href={`${socialLinks.emailPersonal.url}?subject=Oportunidad%20Profesional&body=Hola%20Sebasti%C3%A1n,%0D%0A`}
              className="btn"
              style={{
                width: '100%',
                fontSize: '1.05rem',
                padding: '0.9rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                marginBottom: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <MailIcon />
              {t('contact.buttons.email')}
            </a>

            <a
              href={`${socialLinks.whatsapp.url}?text=Hola%20Sebasti%C3%A1n,%20me%20gustar%C3%ADa%20contactarte.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                fontSize: '1.05rem',
                padding: '0.9rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
              }}
            >
              <WhatsAppIcon />
              {t('contact.buttons.whatsapp')}
            </a>

            <div className="contact-info-box">
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Email:</strong> sebastianriv2112@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="references-note">{t('contact.referencesNote')}</p>
    </section>
  );
};

export default ContactSection;
