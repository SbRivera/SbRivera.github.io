import { Project } from '../types/portfolio';

/**
 * Centralized project data. Narrative text lives in locales under
 * `projects.items.<slug>.*` — see src/locales/{es,en}.json. Only add a
 * repositoryUrl / demoUrl / documentationUrl / caseStudyUrl when the link
 * actually exists; ProjectCard hides the corresponding button otherwise.
 *
 * To add a new project: append an entry here with a unique slug, add the
 * matching `projects.items.<slug>` block to both locale files, and drop an
 * optional image at public/projects/<slug>.<ext>.
 */
export const projects: Project[] = [
  {
    id: 'agente-virtual-incidencias',
    slug: 'agente-virtual-incidencias',
    title: 'projects.items.agenteVirtualIncidencias.title',
    shortDescription: 'projects.items.agenteVirtualIncidencias.shortDescription',
    fullDescription: 'projects.items.agenteVirtualIncidencias.fullDescription',
    categories: ['ai-llm', 'data-automation'],
    technologies: ['Python', 'LangChain', 'LLMs', 'APIs'],
    status: 'implementation',
    featured: true,
    organization: 'Coopartamos',
    role: 'projects.items.agenteVirtualIncidencias.role',
    responsibilities: 'projects.items.agenteVirtualIncidencias.responsibilities',
  },
  {
    id: 'aevision',
    slug: 'aevision',
    title: 'projects.items.aevision.title',
    shortDescription: 'projects.items.aevision.shortDescription',
    fullDescription: 'projects.items.aevision.fullDescription',
    categories: ['ml-cv', 'data-automation'],
    technologies: ['Machine Learning', 'Procesamiento de audio'],
    status: 'production',
    featured: true,
    role: 'projects.items.aevision.role',
    responsibilities: 'projects.items.aevision.responsibilities',
  },
  {
    id: 'sistema-identificacion-personas',
    slug: 'sistema-identificacion-personas',
    title: 'projects.items.sistemaIdentificacion.title',
    shortDescription: 'projects.items.sistemaIdentificacion.shortDescription',
    fullDescription: 'projects.items.sistemaIdentificacion.fullDescription',
    categories: ['ml-cv', 'academic'],
    technologies: ['Python', 'TensorFlow', 'NumPy'],
    status: 'academic',
    featured: false,
    organization: 'Universidad de las Fuerzas Armadas ESPE',
  },
  {
    id: 'ecuagraphic-app',
    slug: 'ecuagraphic-app',
    title: 'projects.items.ecuagraphicApp.title',
    shortDescription: 'projects.items.ecuagraphicApp.shortDescription',
    fullDescription: 'projects.items.ecuagraphicApp.fullDescription',
    categories: ['mobile'],
    technologies: ['Flutter', 'Firebase'],
    status: 'production',
    featured: true,
    year: '2024',
    organization: 'Ecuagraphic',
  },
  {
    id: 'mesa-ayuda-coopartamos',
    slug: 'mesa-ayuda-coopartamos',
    title: 'projects.items.mesaAyudaCoopartamos.title',
    shortDescription: 'projects.items.mesaAyudaCoopartamos.shortDescription',
    fullDescription: 'projects.items.mesaAyudaCoopartamos.fullDescription',
    categories: ['backend-web', 'data-automation'],
    technologies: ['Laravel', 'SQL Server'],
    status: 'production',
    featured: true,
    organization: 'Coopartamos',
    responsibilities: 'projects.items.mesaAyudaCoopartamos.responsibilities',
    results: 'projects.items.mesaAyudaCoopartamos.results',
  },
  {
    id: 'aventura-galapagos',
    slug: 'aventura-galapagos',
    title: 'projects.items.aventuraGalapagos.title',
    shortDescription: 'projects.items.aventuraGalapagos.shortDescription',
    categories: ['mobile'],
    technologies: ['Flutter', 'Dart'],
    status: 'completed',
    featured: false,
    image: `${process.env.PUBLIC_URL}/1.png`,
    demoUrl: `${process.env.PUBLIC_URL}/#/app`,
  },
];
