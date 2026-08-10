import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCategory } from '../../types/portfolio';

const CATEGORIES: ProjectCategory[] = ['ai-llm', 'ml-cv', 'backend-web', 'mobile', 'data-automation', 'academic'];

interface ProjectFiltersProps {
  active: ProjectCategory | 'all';
  onChange: (category: ProjectCategory | 'all') => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ active, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="filter-bar" role="group" aria-label={t('projects.filters.groupLabel') as string}>
      <button
        className={`filter-btn ${active === 'all' ? 'active' : ''}`}
        aria-pressed={active === 'all'}
        onClick={() => onChange('all')}
      >
        {t('projects.filters.all')}
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={`filter-btn ${active === category ? 'active' : ''}`}
          aria-pressed={active === category}
          onClick={() => onChange(category)}
        >
          {t(`projects.categories.${category}`)}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
