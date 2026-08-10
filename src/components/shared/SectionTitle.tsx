import React, { RefObject } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  titleRef?: RefObject<HTMLHeadingElement>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, titleRef }) => (
  <div className="section-header">
    <h2 ref={titleRef} className="section-title font-cinzel">
      {title}
    </h2>
    {subtitle && <p className="section-subtitle-text">{subtitle}</p>}
  </div>
);

export default SectionTitle;
