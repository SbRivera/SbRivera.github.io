import React from 'react';

const Tag: React.FC<{ children: React.ReactNode; variant?: 'default' | 'accent' }> = ({
  children,
  variant = 'default',
}) => <span className={`tag tag--${variant}`}>{children}</span>;

export default Tag;
