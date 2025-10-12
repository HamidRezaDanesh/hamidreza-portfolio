import { useTranslation } from 'react-i18next';
import { CheckCircle, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  results: string[];
  status: string;
}

export default function ProjectCard({
  title,
  duration,
  description,
  technologies,
  results,
  status,
}: ProjectCardProps) {
  const { t } = useTranslation();

  // Ensure technologies and results are arrays
  const techArray = Array.isArray(technologies) ? technologies : [];
  const resultsArray = Array.isArray(results) ? results : [];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('projects.duration')}: {duration}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Technologies */}
        {techArray.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {t('projects.technologies')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techArray.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {resultsArray.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              {t('projects.results')}
            </h4>
            <div className="space-y-2">
              {resultsArray.map((result, index) => (
                <div key={index} className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}