import { useTranslation } from 'react-i18next';

export default function LanguageSkills() {
  const { t } = useTranslation();

  const languages = [
    {
      name: t('about.languageSkills.english'),
      level: t('about.languageSkills.englishLevel'),
      proficiency: 90,
      flag: '🇬🇧',
    },
    {
      name: t('about.languageSkills.swedish'),
      level: t('about.languageSkills.swedishLevel'),
      proficiency: 40,
      flag: '🇸🇪',
    },
    {
      name: t('about.languageSkills.persian'),
      level: t('about.languageSkills.persianLevel'),
      proficiency: 100,
      flag: '🇮🇷',
    },
  ];

  return (
    <div className="space-y-6">
      {languages.map((lang, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{lang.flag}</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {lang.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {lang.level}
                </p>
              </div>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {lang.proficiency}%
            </span>
          </div>

          {/* Progress bar - Using inline styles for gradient */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${lang.proficiency}%`,
                background: 'linear-gradient(to right, #3b82f6, #2563eb)' // blue-500 to blue-600
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}