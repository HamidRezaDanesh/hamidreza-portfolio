import { useTranslation } from 'react-i18next';

interface SkillBarProps {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
}

export default function SkillBar({ name, proficiency, yearsOfExperience }: SkillBarProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {name}
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {yearsOfExperience} {t('skills.yearsExp')}
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {proficiency}%
          </span>
        </div>
      </div>

      {/* Progress bar - Using inline styles for gradient to avoid Tailwind dynamic class issues */}
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${proficiency}%`,
            background: 'linear-gradient(to right, #3b82f6, #2563eb)' // blue-500 to blue-600
          }}
        ></div>
      </div>
    </div>
  );
}