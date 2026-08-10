import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { certificates } from '../../data/certificates';
import { Certificate, CertificateCategory } from '../../types/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../shared/SectionTitle';
import CertificateFilters from '../certificates/CertificateFilters';
import CertificateCard from '../certificates/CertificateCard';
import CertificateModal from '../certificates/CertificateModal';

const sortedCertificates = [...certificates].sort(
  (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
);

const CertificatesSection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const [activeCategory, setActiveCategory] = useState<CertificateCategory | 'all'>('all');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? sortedCertificates
        : sortedCertificates.filter((c) => c.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="certificates" className="section">
      <SectionTitle title={t('certificates.title')} subtitle={t('certificates.subtitle') as string} titleRef={titleRef} />

      {certificates.length === 0 ? (
        <div className="empty-state">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l2.9 6.3L22 9.3l-5 5 1.2 7.2L12 18l-6.2 3.5L7 14.3l-5-5 7.1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>{t('certificates.emptyState')}</p>
        </div>
      ) : (
        <>
          <CertificateFilters active={activeCategory} onChange={setActiveCategory} />
          <div className="grid grid-3 project-grid">
            {filtered.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} onOpen={setSelectedCertificate} />
            ))}
          </div>
        </>
      )}

      {selectedCertificate && (
        <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      )}
    </section>
  );
};

export default CertificatesSection;
