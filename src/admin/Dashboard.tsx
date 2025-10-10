// src/admin/Dashboard.tsx
import { useTranslation } from 'react-i18next';
import { useCRUD } from './hooks/useCRUD';
import { Experience, Skill, Project } from '../types/admin.types';
import StatsCard from './components/StatsCard';
import QuickActions from './components/QuickActions';
import { 
  Briefcase, 
  Award, 
  FolderGit2, 
  GraduationCap,
  TrendingUp,
  Clock,
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function Dashboard() {
  const { t } = useTranslation();
  
  // Get real data from storage
  const { items: experiences } = useCRUD<Experience>('experiences');
  const { items: skills } = useCRUD<Skill>('skills');
  const { items: projects } = useCRUD<Project>('projects');

  const stats = {
    experiences: experiences.length,
    skills: skills.length,
    certifications: 8, // This would come from certifications CRUD
    projects: projects.length,
    totalViews: 1247,
    lastUpdate: 'Today',
    completionRate: 95,
    activeProjects: projects.filter(p => p.status === 'in-progress').length
  };

  const recentActivity = [
    { action: 'Updated', item: 'Experience at ZF AG', time: '2 hours ago' },
    { action: 'Added', item: 'New certification: Google PM', time: '1 day ago' },
    { action: 'Modified', item: 'Skills proficiency levels', time: '3 days ago' },
    { action: 'Uploaded', item: 'Project images for SKF Tools', time: '1 week ago' }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {t('admin.dashboard.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t('admin.dashboard.subtitle')}
          </p>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            {t('admin.dashboard.status')}: {t('admin.dashboard.active')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatsCard
          title={t('admin.dashboard.experiences')}
          value={stats.experiences}
          icon={Briefcase}
          color="blue"
          trend="+0"
        />
        <StatsCard
          title={t('admin.dashboard.skills')}
          value={stats.skills}
          icon={Award}
          color="green"
          trend="+2"
        />
        <StatsCard
          title={t('admin.dashboard.certifications')}
          value={stats.certifications}
          icon={GraduationCap}
          color="purple"
          trend="+3"
        />
        <StatsCard
          title={t('admin.dashboard.projects')}
          value={stats.projects}
          icon={FolderGit2}
          color="orange"
          trend="+1"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('admin.dashboard.recentActivity')}
            </h2>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {activity.action} <span className="text-gray-600 dark:text-gray-400">{activity.item}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            {t('admin.dashboard.viewAll')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('admin.dashboard.portfolioCompletion')}
            </h3>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats.completionRate}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${stats.completionRate}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            {t('admin.dashboard.almostThere')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('admin.dashboard.totalViews')}
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.totalViews.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            +12% {t('admin.dashboard.thisWeek')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('admin.dashboard.activeProjects')}
            </h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.activeProjects}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {t('admin.dashboard.inProgress')}
          </p>
        </div>
      </div>
    </div>
  );
}