import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/socialLinks';
import SectionTitle from '../shared/SectionTitle';
import ExternalLink from '../shared/ExternalLink';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const GITHUB_USERNAME = 'SbRivera';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChevronIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubReposSection: React.FC = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [error, setError] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        if (cancelled) return;
        setRepos(Array.isArray(data) ? data.filter((repo) => !repo.fork) : []);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8 * (direction === 'left' ? -1 : 1);
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="github-repos" className="section">
      <SectionTitle title={t('githubRepos.title')} subtitle={t('githubRepos.subtitle') as string} />

      {error && (
        <p className="empty-state-inline">
          {t('githubRepos.error')}{' '}
          <ExternalLink href={socialLinks.github.url!}>{t('githubRepos.viewProfile')}</ExternalLink>
        </p>
      )}

      {!error && repos === null && (
        <p className="empty-state-inline">{t('githubRepos.loading')}</p>
      )}

      {!error && repos !== null && repos.length === 0 && (
        <p className="empty-state-inline">{t('githubRepos.empty')}</p>
      )}

      {!error && repos !== null && repos.length > 0 && (
        <div className="repo-carousel">
          <button
            className="repo-carousel-nav repo-carousel-nav--prev"
            onClick={() => scrollByAmount('left')}
            aria-label={t('githubRepos.prev') as string}
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="repo-carousel-track" ref={trackRef}>
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <h3 className="repo-card-name">{repo.name}</h3>
                <p className="repo-card-desc">{repo.description || t('githubRepos.noDescription')}</p>
                <div className="repo-card-meta">
                  {repo.language && <span className="repo-card-language">{repo.language}</span>}
                  <span className="repo-card-stars">
                    <StarIcon /> {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <button
            className="repo-carousel-nav repo-carousel-nav--next"
            onClick={() => scrollByAmount('right')}
            aria-label={t('githubRepos.next') as string}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}

      <div className="repo-view-all">
        <ExternalLink href={socialLinks.github.url!} className="btn btn-outline btn-sm">
          {t('githubRepos.viewAll')}
        </ExternalLink>
      </div>
    </section>
  );
};

export default GitHubReposSection;
