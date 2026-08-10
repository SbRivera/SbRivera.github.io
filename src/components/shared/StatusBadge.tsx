import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectStatus } from '../../types/portfolio';

const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  const { t } = useTranslation();
  return (
    <span className={`status-badge status-badge--${status}`}>
      {t(`projects.status.${status}`)}
    </span>
  );
};

export default StatusBadge;
