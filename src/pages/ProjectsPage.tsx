import { useTranslation } from 'react-i18next';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.project1Title'),
      duration: t('projects.project1Duration'),
      description: t('projects.project1Description'),
      technologies: t('projects.project1Technologies', { returnObjects: true }) as string[],
      results: t('projects.project1Results', { returnObjects: true }) as string[],
      status: t('projects.statusInProgress'),
    },
    {
      title: t('projects.project2Title'),
      duration: t('projects.project2Duration'),
      description: t('projects.project2Description'),
      technologies: t('projects.project2Technologies', { returnObjects: true }) as string[],
      results: t('projects.project2Results', { returnObjects: true }) as string[],
      status: t('projects.statusCompleted'),
    },
    {
      title: t('projects.project3Title'),
      duration: t('projects.project3Duration'),
      description: t('projects.project3Description'),
      technologies: t('projects.project3Technologies', { returnObjects: true }) as string[],
      results: t('projects.project3Results', { returnObjects: true }) as string[],
      status: t('projects.statusCompleted'),
    },
    {
      title: t('projects.project4Title'),
      duration: t('projects.project4Duration'),
      description: t('projects.project4Description'),
      technologies: t('projects.project4Technologies', { returnObjects: true }) as string[],
      results: t('projects.project4Results', { returnObjects: true }) as string[],
      status: t('projects.statusInProgress'),
    },
    {
      title: t('projects.project5Title'),
      duration: t('projects.project5Duration'),
      description: t('projects.project5Description'),
      technologies: t('projects.project5Technologies', { returnObjects: true }) as string[],
      results: t('projects.project5Results', { returnObjects: true }) as string[],
      status: t('projects.statusCompleted'),
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <FolderGit2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/hamidrezadanesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
          >
            <FolderGit2 className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}