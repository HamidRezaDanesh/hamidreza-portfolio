// src/components/ExperienceCard.tsx - ULTRA MODERN ENHANCED VERSION ✨
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Sparkles, Zap, TrendingUp } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);

  const achievementsList = Array.isArray(achievements) ? achievements : [];
  const technologiesList = Array.isArray(technologies) ? technologies : [];

  return (
    <div className="relative pl-10 border-l-2 border-blue-200 dark:border-blue-800/50 pb-12 last:pb-0 group">
      {/* 🎯 ENHANCED Timeline dot with animated glow */}
      <div 
        className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-500 ${
          isLatest 
            ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ring-4 ring-blue-200 dark:ring-blue-900/50 shadow-xl shadow-blue-500/50 animate-pulse' 
            : 'bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-blue-500/40'
        }`}
      >
        {isLatest && (
          <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-ping opacity-75"></div>
            <Sparkles className="absolute inset-0 m-auto w-3 h-3 text-white animate-spin" style={{ animationDuration: '3s' }} />
          </>
        )}
      </div>

      {/* 🎴 ULTRA MODERN Card with glassmorphism */}
      <div 
        className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_80px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 dark:border-gray-700/50 hover:border-blue-400/50 dark:hover:border-blue-500/50 overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ✨ Animated gradient overlay - MODERN TREND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        {/* 🌊 Flowing animated background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-6 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
                {position}
              </h3>
              {isLatest && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 dark:from-green-500 dark:via-emerald-500 dark:to-teal-500 text-white text-xs font-black rounded-full shadow-lg shadow-green-500/50 animate-pulse">
                  <Zap className="w-4 h-4 animate-bounce" />
                  {t('experience.present')}
                  <TrendingUp className="w-4 h-4" />
                </span>
              )}
            </div>
            
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group/link"
              >
                <span className="text-lg">{company}</span>
                <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
              </a>
            ) : (
              <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                {company}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">{period}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/30 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">{location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
          {description}
        </p>

        {/* 🏷️ ULTRA MODERN Technologies with 3D effect */}
        {technologiesList.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6 relative z-10">
            {technologiesList.map((tech, index) => (
              <span
                key={index}
                className="group/tech px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:scale-110 hover:rotate-2 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 cursor-default relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/tech:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10">{tech}</span>
              </span>
            ))}
          </div>
        )}

        {/* 🔽 ENHANCED Toggle Details Button with icon animation */}
        {achievementsList.length > 0 && (
          <>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="relative flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group/btn mt-4 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl hover:shadow-lg"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-6 h-6 group-hover/btn:-translate-y-2 transition-transform duration-300" />
                  <span className="text-base">{t('experience.hideDetails')}</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-6 h-6 group-hover/btn:translate-y-2 transition-transform duration-300 animate-bounce" />
                  <span className="text-base">{t('experience.viewDetails')} ({achievementsList.length})</span>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </>
              )}
            </button>

            {/* 🎯 ENHANCED Achievements with smooth reveal and stagger animation */}
            {showDetails && (
              <div className="mt-8 pt-8 border-t-2 border-gray-200 dark:border-gray-700 space-y-5 animate-fade-in relative z-10">
                <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  Key Achievements
                </h4>
                {achievementsList.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 group/achievement hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInLeft 0.5s ease-out forwards'
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1 group-hover/achievement:scale-125 group-hover/achievement:rotate-12 transition-all duration-300" />
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 💫 MODERN Corner accent with animated gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-bl-full transition-all duration-700 ${isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}`}>
          <div className="absolute inset-0 rounded-bl-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        </div>

        {/* 🌟 Bottom glow effect */}
        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Add keyframe animation to index.css */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}