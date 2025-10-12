import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';
import { getStringArray } from '@/utils/i18n';

export default function ExperiencePage() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.company1'),
      companyUrl: t('experience.company1Url'),
      position: t('experience.position1'),
      period: t('experience.period1'),
      location: t('experience.location1'),
      description: t('experience.description1'),
      achievements: getStringArray(t('experience.achievements1', { returnObjects: true })),
      technologies: getStringArray(t('experience.technologies1', { returnObjects: true })),
      isLatest: true,
    },
    {
      company: t('experience.company2'),
      companyUrl: t('experience.company2Url'),
      position: t('experience.position2'),
      period: t('experience.period2'),
      location: t('experience.location2'),
      description: t('experience.description2'),
      achievements: getStringArray(t('experience.achievements2', { returnObjects: true })),
      technologies: getStringArray(t('experience.technologies2', { returnObjects: true })),
    },
    {
      company: t('experience.company3'),
      position: t('experience.position3'),
      period: t('experience.period3'),
      location: t('experience.location3'),
      description: t('experience.description3'),
      achievements: getStringArray(t('experience.achievements3', { returnObjects: true })),
      technologies: getStringArray(t('experience.technologies3', { returnObjects: true })),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-xl">
            <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">50+</div>
            <div className="text-gray-700 dark:text-gray-300">Components Designed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">€80K+</div>
            <div className="text-gray-700 dark:text-gray-300">Annual Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}