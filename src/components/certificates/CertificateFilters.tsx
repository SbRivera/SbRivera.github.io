import React from 'react';
import { useTranslation } from 'react-i18next';
import { CertificateCategory } from '../../types/portfolio';

// 'ml' and 'cybersecurity' remain valid Certificate.category values for data
// tagging, but per spec the filter bar only exposes these six buckets.
const FILTER_CATEGORIES: CertificateCategory[] = ['ai', 'software', 'cloud-devops', 'data', 'automation', 'other'];

interface CertificateFiltersProps {
  active: CertificateCategory | 'all';
  onChange: (category: CertificateCategory | 'all') => void;
}

const CertificateFilters: React.FC<CertificateFiltersProps> = ({ active, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="filter-bar" role="group" aria-label={t('certificates.filters.groupLabel') as string}>
      <button
        className={`filter-btn ${active === 'all' ? 'active' : ''}`}
        aria-pressed={active === 'all'}
        onClick={() => onChange('all')}
      >
        {t('certificates.filters.all')}
      </button>
      {FILTER_CATEGORIES.map((category) => (
        <button
          key={category}
          className={`filter-btn ${active === category ? 'active' : ''}`}
          aria-pressed={active === category}
          onClick={() => onChange(category)}
        >
          {t(`certificates.categories.${category}`)}
        </button>
      ))}
    </div>
  );
};

export default CertificateFilters;
