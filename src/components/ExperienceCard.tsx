import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isLatest?: boolean;
}

export default function ExperienceCard({
  company,
  companyUrl,
  position,
  period,
  location,
  description,
  achievements,
  technologies,
  isLatest = false,
}: ExperienceCardProps) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  // Ensure achievements and technologies are arrays
  const achievementsList = Array.isArray(achievements) ? achievements : [];
  const technologiesList = Array.isArray(technologies) ? technologies : [];

  return (
    <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full ${
        isLatest 
          ? 'bg-blue-600 ring-4 ring-blue-200 dark:ring-blue-800' 
          : 'bg-blue-400 dark:bg-blue-600'
      }`}></div>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {position}
              </h3>
              {isLatest && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  {t('experience.present')}
                </span>
              )}
            </div>
            
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline group"
              >
                {company}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {company}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {period}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Technologies */}
        {technologiesList.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologiesList.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Toggle Details Button */}
        {achievementsList.length > 0 && (
          <>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  {t('experience.hideDetails')}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  {t('experience.viewDetails')}
                </>
              )}
            </button>

            {/* Achievements (collapsible) */}
            {showDetails && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 animate-fade-in">
                {achievementsList.map((achievement, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}