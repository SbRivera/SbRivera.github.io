import { SocialLink } from '../types/portfolio';

/**
 * Centralized real links reused across Hero, Contact and SEO tags. Add
 * `pending: true` (no url) for a channel that should exist but doesn't have
 * a link yet — components must check `pending` and skip rendering the button
 * rather than pointing to a placeholder.
 */
export const socialLinks: Record<string, SocialLink> = {
  github: {
    id: 'github',
    labelKey: 'contact.links.github',
    url: 'https://github.com/SbRivera',
  },
  linkedin: {
    id: 'linkedin',
    labelKey: 'contact.links.linkedin',
    url: 'https://linkedin.com/in/sebastian-rivera-novillo',
  },
  whatsapp: {
    id: 'whatsapp',
    labelKey: 'contact.links.whatsapp',
    url: 'https://wa.me/593995085689',
  },
  emailPersonal: {
    id: 'emailPersonal',
    labelKey: 'contact.links.emailPersonal',
    url: 'mailto:sebastianriv2112@gmail.com',
  },
  emailInstitutional: {
    id: 'emailInstitutional',
    labelKey: 'contact.links.emailInstitutional',
    url: 'mailto:sbrivera2@espe.edu.ec',
  },
  cvDownload: {
    id: 'cvDownload',
    labelKey: 'buttons.downloadCV',
    url: 'https://drive.google.com/file/d/1HbK7f_AeUo5d5LQM0AyaDMNW6ppqtu3H/view?usp=sharing',
  },
  repository: {
    id: 'repository',
    labelKey: 'contact.links.repository',
    url: 'https://github.com/SbRivera/Portafolio',
  },
};
