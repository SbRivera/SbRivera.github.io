import { Certificate } from '../types/portfolio';

/**
 * Centralized certificate data. Source PDFs live in public/certificados/.
 * `title`/`issuer`/`skills` are literal strings (official credential names
 * aren't translated between locales, same convention LinkedIn/resumes use).
 *
 * To add a certificate:
 * 1. Drop the certificate PDF/image in public/certificados/.
 * 2. Add an entry below.
 * 3. Set `verificationUrl` only if the issuer provides a public verification
 *    page — otherwise omit it and the "Verify" button won't render.
 */
export const certificates: Certificate[] = [
  {
    id: 'udemy-hacking-wifi',
    title: 'Hacking de Redes Wi-Fi',
    issuer: 'Udemy',
    issueDate: '2025-07-13',
    category: 'cybersecurity',
    credentialId: 'UC-ed36e51a-3699-4c08-8eb1-3991862956a6',
    skills: ['Ciberseguridad', 'Redes Wi-Fi'],
    image: `${process.env.PUBLIC_URL}/certificados/vistas-previas/udemy-hacking-redes-wifi.jpg`,
    pdfUrl: `${process.env.PUBLIC_URL}/certificados/udemy-hacking-redes-wifi.pdf`,
    verificationUrl: 'https://ude.my/UC-ed36e51a-3699-4c08-8eb1-3991862956a6',
  },
  {
    id: 'cisco-linux-unhatched',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    issueDate: '2025-01-19',
    category: 'cloud-devops',
    credentialId: '4406f477-52d4-4843-8a73-9b892a502bdf',
    skills: ['Linux'],
    image: `${process.env.PUBLIC_URL}/certificados/vistas-previas/cisco-linux-unhatched.jpg`,
    pdfUrl: `${process.env.PUBLIC_URL}/certificados/cisco-linux-unhatched.pdf`,
  },
  {
    id: 'udemy-diseno-web-profesional',
    title: 'Diseño Web Profesional: El Curso Completo, Práctico y desde 0',
    issuer: 'Udemy',
    issueDate: '2024-02-29',
    category: 'software',
    credentialId: 'UC-ba6d87a6-4d9a-4d02-b38c-3a8fdcea1d8b',
    skills: ['Diseño Web'],
    image: `${process.env.PUBLIC_URL}/certificados/vistas-previas/udemy-diseno-web-profesional.jpg`,
    pdfUrl: `${process.env.PUBLIC_URL}/certificados/udemy-diseno-web-profesional.pdf`,
    verificationUrl: 'https://ude.my/UC-ba6d87a6-4d9a-4d02-b38c-3a8fdcea1d8b',
  },
  {
    id: 'aevision-1er-lugar-techstras',
    title: '1er Lugar — Proyecto AE VISION, Techstras Startup Weekend',
    issuer: 'Universidad de las Fuerzas Armadas ESPE',
    issueDate: '2023-11-20',
    category: 'ai',
    credentialId: 'UGVS Nro. 27-2717',
    skills: ['Machine Learning', 'Emprendimiento'],
    image: `${process.env.PUBLIC_URL}/certificados/vistas-previas/aevision-1er-lugar-techstras.jpg`,
    pdfUrl: `${process.env.PUBLIC_URL}/certificados/aevision-1er-lugar-techstras.pdf`,
    featured: true,
  },
];
