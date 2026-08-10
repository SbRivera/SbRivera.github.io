import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../types/portfolio';
import Modal from '../shared/Modal';
import StatusBadge from '../shared/StatusBadge';
import Tag from '../shared/Tag';
import ExternalLink from '../shared/ExternalLink';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();
  const titleId = `project-modal-title-${project.id}`;

  const responsibilities = project.responsibilities
    ? (t(project.responsibilities, { returnObjects: true }) as string[])
    : null;
  const results = project.results
    ? (t(project.results, { returnObjects: true }) as string[])
    : null;

  const links: { key: string; url?: string; labelKey: string }[] = [
    { key: 'repo', url: project.repositoryUrl, labelKey: 'projects.buttons.viewCode' },
    { key: 'demo', url: project.demoUrl, labelKey: 'projects.buttons.demo' },
    { key: 'docs', url: project.documentationUrl, labelKey: 'projects.buttons.documentation' },
    { key: 'case', url: project.caseStudyUrl, labelKey: 'projects.buttons.caseStudy' },
  ].filter((link) => link.url);

  return (
    <Modal titleId={titleId} onClose={onClose}>
      <div className="modal-header">
        <h3 id={titleId} className="font-cinzel">{t(project.title)}</h3>
        <StatusBadge status={project.status} />
      </div>

      {(project.organization || project.role || project.year) && (
        <p className="project-modal-meta">
          {[project.organization, project.role && t(project.role), project.year].filter(Boolean).join(' · ')}
        </p>
      )}

      <p className="project-modal-desc">
        {t(project.fullDescription ?? project.shortDescription)}
      </p>

      {responsibilities && responsibilities.length > 0 && (
        <>
          <h4>{t('projects.modal.responsibilities')}</h4>
          <ul>
            {responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}

      {results && results.length > 0 && (
        <>
          <h4>{t('projects.modal.results')}</h4>
          <ul>
            {results.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}

      <h4>{t('projects.modal.technologies')}</h4>
      <div className="project-card-tags">
        {project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}
      </div>

      {project.confidential && (
        <p className="project-confidential-note">{t('projects.confidentialLabel')}</p>
      )}

      {links.length > 0 && (
        <div className="project-modal-actions">
          {links.map((link) => (
            <ExternalLink key={link.key} href={link.url!} className="btn btn-outline btn-sm">
              {t(link.labelKey)}
            </ExternalLink>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
