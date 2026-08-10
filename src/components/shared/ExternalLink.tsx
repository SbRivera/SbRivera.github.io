import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  internal?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className, ariaLabel, internal }) => (
  <a
    href={href}
    className={className}
    aria-label={ariaLabel}
    {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {children}
  </a>
);

export default ExternalLink;
