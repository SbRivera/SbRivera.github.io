import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { technologyGroups } from '../../data/technologies';
import SectionTitle from '../shared/SectionTitle';
import Tag from '../shared/Tag';

const TechnologySection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const gridRef = useStaggerAnimation<HTMLDivElement>('.tech-group-card', { stagger: 100, duration: 600 });

  return (
    <section id="technologies" className="section">
      <SectionTitle title={t('technologies.title')} titleRef={titleRef} />

      <div ref={gridRef} className="grid grid-2">
        {technologyGroups.map((group) => (
          <div key={group.id} className="card tech-group-card" style={{ opacity: 0 }}>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.1rem',
              color: 'var(--accent-primary)',
              fontFamily: 'var(--font-heading)',
            }}>
              {t(group.labelKey)}
            </h3>
            <div className="tech-tag-list">
              {group.items.map((itemKey) => (
                <Tag key={itemKey}>{t(itemKey)}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
