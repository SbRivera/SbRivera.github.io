export type ProjectCategory =
  | 'ai-llm'
  | 'ml-cv'
  | 'backend-web'
  | 'mobile'
  | 'data-automation'
  | 'academic';

export type ProjectStatus =
  | 'production'
  | 'implementation'
  | 'completed'
  | 'prototype'
  | 'academic';

/**
 * Narrative fields (title, shortDescription, fullDescription, role,
 * responsibilities, results) hold i18n keys under `projects.items.<slug>.*`,
 * not literal text — components resolve them with t(). Everything else here
 * is language-independent metadata.
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  categories: ProjectCategory[];
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  organization?: string;
  role?: string;
  responsibilities?: string;
  results?: string;
  image?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  caseStudyUrl?: string;
  confidential?: boolean;
}

export type CertificateCategory =
  | 'ai'
  | 'ml'
  | 'software'
  | 'cloud-devops'
  | 'data'
  | 'cybersecurity'
  | 'automation'
  | 'other';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  category: CertificateCategory;
  credentialId?: string;
  skills?: string[];
  image?: string;
  pdfUrl?: string;
  verificationUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  id: string;
  labelKey: string;
  url?: string;
  pending?: boolean;
}
