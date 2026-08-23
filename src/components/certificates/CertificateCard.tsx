import React from 'react';
import { useTranslation } from 'react-i18next';
import { Certificate } from '../../types/portfolio';
import Tag from '../shared/Tag';

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onOpen }) => {
  const { t } = useTranslation();

  return (
    <div className="card certificate-card">
      <div className="project-card-media">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={`Vista previa del certificado ${certificate.title}`}
            loading="lazy"
            className="certificate-card-preview"
          />
        ) : (
          <div className="project-card-media-placeholder" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l2.9 6.3L22 9.3l-5 5 1.2 7.2L12 18l-6.2 3.5L7 14.3l-5-5 7.1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{certificate.title}</h3>
        <p className="project-card-org">{certificate.issuer} · {certificate.issueDate}</p>
        <div className="project-card-tags">
          <Tag variant="accent">{t(`certificates.categories.${certificate.category}`)}</Tag>
        </div>
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="project-card-tags">
            {certificate.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
          </div>
        )}
        <div className="project-card-actions">
          <button className="btn btn-outline btn-sm" onClick={() => onOpen(certificate)}>
            {t('certificates.buttons.view')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
