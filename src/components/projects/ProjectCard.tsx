import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../../types/portfolio';
import StatusBadge from '../shared/StatusBadge';
import Tag from '../shared/Tag';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const { t } = useTranslation();

  return (
    <div className={`card project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card-body">
        <div className="project-card-header">
          <h3 className="project-card-title">{t(project.title)}</h3>
          <StatusBadge status={project.status} />
        </div>

        {project.organization && (
          <p className="project-card-org">
            {project.organization}
            {project.featured && <span className="project-featured-inline">· {t('projects.featuredLabel')}</span>}
          </p>
        )}

        <p className="project-card-desc">{t(project.shortDescription)}</p>

        <div className="project-card-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {project.confidential && (
          <p className="project-confidential-note">{t('projects.confidentialLabel')}</p>
        )}

        <div className="project-card-actions">
          <button className="btn btn-outline btn-sm" onClick={() => onOpen(project)}>
            {t('projects.buttons.viewProject')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
