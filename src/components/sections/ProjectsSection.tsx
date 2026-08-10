import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types/portfolio';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../shared/SectionTitle';
import ProjectFilters from '../projects/ProjectFilters';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';

const sortedProjects = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ duration: 700 });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? sortedProjects
        : sortedProjects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory]
  );

  return (
    <section id="projects" className="section">
      <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle') as string} titleRef={titleRef} />

      <ProjectFilters active={activeCategory} onChange={setActiveCategory} />

      <div className="grid grid-3 project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
