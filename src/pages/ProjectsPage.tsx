import { useTranslation } from 'react-i18next';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  results: string[];
  status: string;
}

export default function ProjectsPage() {
  const { t } = useTranslation();

  // Helper function to safely get array from translation
  const getTranslationArray = (key: string): string[] => {
    const value = t(key, { returnObjects: true });
    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === 'string');
    }
    if (typeof value === 'string') {
      return [value];
    }
    return [];
  };

  const projects: Project[] = [
    {
      title: t('projects.project1Title'),
      duration: t('projects.project1Duration'),
      description: t('projects.project1Description'),
      technologies: getTranslationArray('projects.project1Technologies'),
      results: getTranslationArray('projects.project1Results'),
      status: t('projects.statusInProgress'),
    },
    {
      title: t('projects.project2Title'),
      duration: t('projects.project2Duration'),
      description: t('projects.project2Description'),
      technologies: getTranslationArray('projects.project2Technologies'),
      results: getTranslationArray('projects.project2Results'),
      status: t('projects.statusCompleted'),
    },
    {
      title: t('projects.project3Title'),
      duration: t('projects.project3Duration'),
      description: t('projects.project3Description'),
      technologies: getTranslationArray('projects.project3Technologies'),
      results: getTranslationArray('projects.project3Results'),
      status: t('projects.statusCompleted'),
    },
    {
      title: t('projects.project4Title'),
      duration: t('projects.project4Duration'),
      description: t('projects.project4Description'),
      technologies: getTranslationArray('projects.project4Technologies'),
      results: getTranslationArray('projects.project4Results'),
      status: t('projects.statusInProgress'),
    },
    {
      title: t('projects.project5Title'),
      duration: t('projects.project5Duration'),
      description: t('projects.project5Description'),
      technologies: getTranslationArray('projects.project5Technologies'),
      results: getTranslationArray('projects.project5Results'),
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