import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../shared/SectionTitle';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const listRef = useStaggerAnimation<HTMLDivElement>('.timeline-card', { stagger: 150, duration: 700 });

  const experiences = [
    {
      company: t('experience.companies.company1.name'),
      position: t('experience.companies.company1.position'),
      period: t('experience.companies.company1.period'),
      responsibilities: t('experience.companies.company1.responsibilities', { returnObjects: true }) as string[],
      technologies: ['Python', 'LangChain', 'LLMs', 'Laravel', 'SQL Server'],
    },
    {
      company: t('experience.companies.company2.name'),
      position: t('experience.companies.company2.position'),
      period: t('experience.companies.company2.period'),
      responsibilities: t('experience.companies.company2.responsibilities', { returnObjects: true }) as string[],
      technologies: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      company: t('experience.companies.company3.name'),
      position: t('experience.companies.company3.position'),
      period: t('experience.companies.company3.period'),
      responsibilities: t('experience.companies.company3.responsibilities', { returnObjects: true }) as string[],
      technologies: ['Programming Education', 'Digital Tools', 'Workshop Facilitation', 'Curriculum Design'],
    },
    {
      company: t('experience.companies.company4.name'),
      position: t('experience.companies.company4.position'),
      period: t('experience.companies.company4.period'),
      responsibilities: t('experience.companies.company4.responsibilities', { returnObjects: true }) as string[],
      technologies: ['Mathematics', 'Physics', 'Personalized Tutoring', 'Academic Support'],
    },
  ];

  return (
    <section id="experience" className="section">
      <SectionTitle title={t('experience.title')} titleRef={titleRef} />

      <div ref={listRef} className="timeline-container">
        <div className="timeline-line" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-card"
            style={{ opacity: 0, marginLeft: index % 2 === 0 ? '0' : '55%' }}
          >
            <div className="timeline-dot" />

            <div className="card">
              <div style={{ marginBottom: '1rem' }}>
                <h3 className="font-playfair" style={{
                  color: 'var(--accent-primary)',
                  fontSize: '1.4rem',
                  marginBottom: '0.4rem',
                }}>
                  {exp.position}
                </h3>
                <h4 style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  marginBottom: '0.4rem',
                }}>
                  {exp.company}
                </h4>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                }}>
                  {exp.period}
                </p>
              </div>

              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
