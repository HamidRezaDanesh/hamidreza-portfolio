// src/components/ProjectCard.tsx - ENHANCED VERSION
import { useTranslation } from 'react-i18next';
import { CheckCircle, Code, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  const techArray = Array.isArray(technologies) ? technologies : [];
  const resultsArray = Array.isArray(results) ? results : [];

  const getStatusConfig = () => {
    switch (status) {
      case 'Completed':
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          gradient: 'from-green-500 to-emerald-500',
          bg: 'bg-green-100 dark:bg-green-900/30',
          text: 'text-green-700 dark:text-green-400',
          border: 'border-green-200 dark:border-green-800',
        };
      case 'In Progress':
        return {
          icon: <Zap className="w-4 h-4" />,
          gradient: 'from-blue-500 to-cyan-500',
          bg: 'bg-blue-100 dark:bg-blue-900/30',
          text: 'text-blue-700 dark:text-blue-400',
          border: 'border-blue-200 dark:border-blue-800',
        };
      default:
        return {
          icon: <TrendingUp className="w-4 h-4" />,
          gradient: 'from-purple-500 to-pink-500',
          bg: 'bg-purple-100 dark:bg-purple-900/30',
          text: 'text-purple-700 dark:text-purple-400',
          border: 'border-purple-200 dark:border-purple-800',
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🎨 Gradient Header with animated background */}
      <div className={`relative p-6 bg-gradient-to-r ${statusConfig.gradient} overflow-hidden`}>
        {/* Animated pattern overlay */}
        <div className={`absolute inset-0 opacity-10 transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative z-10 flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
            {title}
          </h3>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${statusConfig.bg} ${statusConfig.text} text-xs font-bold rounded-full ${statusConfig.border} shadow-lg`}>
            {statusConfig.icon}
            {status}
          </span>
        </div>
        
        <p className="text-sm text-white/90 font-semibold flex items-center gap-2">
          <Code className="w-4 h-4" />
          {t('projects.duration')}: {duration}
        </p>
      </div>

      {/* 📝 Content */}
      <div className="p-6 space-y-4">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* 🏷️ Technologies with enhanced styling */}
        {techArray.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              {t('projects.technologies')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techArray.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-lg border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Results with enhanced styling */}
        {resultsArray.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              {t('projects.results')}
            </h4>
            <div className="space-y-3">
              {resultsArray.map((result, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 items-start group/result hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-lg transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 group-hover/result:scale-110 transition-transform" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 💫 Bottom accent line */}
      <div className={`h-1 bg-gradient-to-r ${statusConfig.gradient} transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </div>
  );
}