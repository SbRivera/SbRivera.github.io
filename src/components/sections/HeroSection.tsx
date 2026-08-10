import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate, createTimeline } from 'animejs';
import { socialLinks } from '../../data/socialLinks';
import ExternalLink from '../shared/ExternalLink';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const specialtiesRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = [titleRef, subtitleRef, specialtiesRef, descRef, btnsRef, arrowRef];

    if (prefersReducedMotion()) {
      nodes.forEach((ref) => {
        if (ref.current) ref.current.style.opacity = '1';
      });
      return;
    }

    const tl = createTimeline({ defaults: { ease: 'outCubic' } });

    tl.add(titleRef.current!, { opacity: [0, 1], translateY: [40, 0], duration: 900 })
      .add(subtitleRef.current!, { opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
      .add(specialtiesRef.current!, { opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=400')
      .add(descRef.current!, { opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=400')
      .add(btnsRef.current!, { opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=300')
      .add(arrowRef.current!, { opacity: [0, 1], translateY: [10, 0], duration: 500 }, '-=100');

    // Bounces a few times to cue scrolling, then settles — avoids a
    // permanently looping animation while the hero is on screen.
    animate(arrowRef.current!, {
      translateY: [0, 8],
      alternate: true,
      loop: 3,
      duration: 1200,
      ease: 'inOutSine',
      delay: 1800,
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title font-cinzel" style={{ opacity: 0 }}>
          {t('hero.name')}
        </h1>
        <p ref={subtitleRef} className="hero-subtitle font-playfair" style={{ opacity: 0 }}>
          {t('hero.title')}
        </p>
        <p ref={specialtiesRef} className="hero-specialties" style={{ opacity: 0 }}>
          {t('hero.specialties')}
        </p>
        <p ref={descRef} className="hero-description" style={{ opacity: 0 }}>
          {t('hero.description')}
        </p>
        <div ref={btnsRef} className="hero-actions" style={{ opacity: 0 }}>
          <button className="btn" onClick={() => scrollToSection('projects')}>
            {t('hero.buttons.viewProjects')}
          </button>
          <ExternalLink href={socialLinks.cvDownload.url!} className="btn btn-outline">
            <DownloadIcon />
            {t('buttons.downloadCV')}
          </ExternalLink>
          <ExternalLink href={socialLinks.github.url!} className="btn btn-icon" ariaLabel="GitHub">
            <GitHubIcon />
            GitHub
          </ExternalLink>
          <ExternalLink href={socialLinks.linkedin.url!} className="btn btn-icon" ariaLabel="LinkedIn">
            <LinkedInIcon />
            LinkedIn
          </ExternalLink>
          <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
            {t('contact.title')}
          </button>
        </div>
      </div>

      <div
        ref={arrowRef}
        className="hero-scroll-arrow"
        onClick={() => scrollToSection('about')}
        style={{ opacity: 0 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
