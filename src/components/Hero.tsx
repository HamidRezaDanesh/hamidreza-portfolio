// src/components/Hero.tsx
import { useTranslation } from 'react-i18next';
import { Download, Mail, ArrowRight, MapPin } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

export default function Hero() {
  const { t } = useTranslation();

  const titles = [
    t('hero.title1'),
    t('hero.title2'),
    t('hero.title3'),
  ];

  const currentTitle = useTypingEffect({
    words: titles,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  const handleDownloadResume = () => {
    // Will be implemented with actual resume file
    console.log('Download resume clicked');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              {t('hero.subtitle')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white mb-2">
                {t('hero.greeting')}
              </span>
              {/* FIX: Changed from bg-clip-text to solid colors with gradient background */}
              <span className="block relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
                  {t('hero.name')}
                </span>
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {currentTitle}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.achievement1')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.achievement2')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">€50K</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.achievement3')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                {t('common.downloadResume')}
              </button>

              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-all duration-200 font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600"
              >
                <Mail className="w-5 h-5" />
                {t('common.contactMe')}
              </button>

              <button
                onClick={handleViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-lg transition-all duration-200 font-medium"
              >
                {t('common.viewProjects')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Profile Picture */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main profile picture */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/profile-pic.png" 
                  alt="Hamidreza Daneshsarand - Mechanical Design Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl font-bold text-white">HD</span>
                    </div>
                    <p className="text-white text-sm opacity-80">
                      Hamidreza Daneshsarand
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-20 -z-10"></div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 animate-float animation-delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}