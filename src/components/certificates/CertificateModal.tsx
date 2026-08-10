import React from 'react';
import { useTranslation } from 'react-i18next';
import { Certificate } from '../../types/portfolio';
import Modal from '../shared/Modal';
import Tag from '../shared/Tag';
import ExternalLink from '../shared/ExternalLink';

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const { t } = useTranslation();
  const titleId = `certificate-modal-title-${certificate.id}`;

  return (
    <Modal titleId={titleId} onClose={onClose}>
      <div className="modal-header">
        <h3 id={titleId} className="font-cinzel">{certificate.title}</h3>
      </div>

      {certificate.image && (
        <img src={certificate.image} alt={certificate.title} className="certificate-modal-image" />
      )}

      <p className="project-modal-meta">
        {certificate.issuer} · {certificate.issueDate}
        {certificate.expirationDate ? ` – ${certificate.expirationDate}` : ''}
      </p>

      {certificate.credentialId && (
        <p className="project-modal-meta">
          {t('certificates.modal.credentialId')}: {certificate.credentialId}
        </p>
      )}

      {certificate.skills && certificate.skills.length > 0 && (
        <>
          <h4>{t('certificates.modal.skills')}</h4>
          <div className="project-card-tags">
            {certificate.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
          </div>
        </>
      )}

      <div className="project-modal-actions">
        {certificate.pdfUrl && (
          <ExternalLink href={certificate.pdfUrl} className="btn btn-outline btn-sm">
            {t('certificates.buttons.viewCertificate')}
          </ExternalLink>
        )}
        {certificate.verificationUrl && (
          <ExternalLink href={certificate.verificationUrl} className="btn btn-outline btn-sm">
            {t('certificates.buttons.verify')}
          </ExternalLink>
        )}
      </div>
    </Modal>
  );
};

export default CertificateModal;
