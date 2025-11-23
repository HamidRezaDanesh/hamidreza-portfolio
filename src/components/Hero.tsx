// src/components/Hero.tsx - IMPROVED VERSION
import { useTranslation } from 'react-i18next';
import { Download, Mail, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { AnimatedSection } from '@/animations/components';

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
      {/* 🌈 Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-purple-600/5"></div>
      </div>
      
      {/* ✨ Enhanced Animated background shapes with glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Enhanced Text Content */}
          <AnimatedSection animation="fadeInUp">
            <div className="text-center lg:text-left space-y-8">
              {/* 🎯 Enhanced Badge with glow effect */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/20">
                <Sparkles className="w-4 h-4" />
                {t('hero.subtitle')}
              </div>

              {/* 📝 Enhanced Typography - BIGGER & BOLDER */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-900 dark:text-white mb-3 drop-shadow-sm">
                  {t('hero.greeting')}
                </span>
                <span className="block relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                    {t('hero.name')}
                  </span>
                </span>
              </h1>

              {/* 💫 Enhanced Typing Effect */}
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300">
                  {currentTitle}
                  <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
                </span>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>

              {/* 📊 Enhanced Stats with hover effects */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center lg:text-left group cursor-default">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {t('hero.achievement1')}
                  </div>
                </div>
                <div className="text-center lg:text-left group cursor-default">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    30%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {t('hero.achievement2')}
                  </div>
                </div>
                <div className="text-center lg:text-left group cursor-default">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    €50K
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {t('hero.achievement3')}
                  </div>
                </div>
              </div>

              {/* 🔘 Enhanced CTA Buttons with better hover effects */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
                <button
                  onClick={handleDownloadResume}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-semibold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 text-lg"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  {t('common.downloadResume')}
                </button>

                <button
                  onClick={handleContactClick}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl transition-all duration-300 font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t('common.contactMe')}
                </button>
              </div>

              <button
                onClick={handleViewProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium group"
              >
                {t('common.viewProjects')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </AnimatedSection>

          {/* Right: Enhanced Profile Picture */}
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* 🖼️ Main profile picture with enhanced effects */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-transparent">
                  <img 
                    src="/images/profile-pic.png" 
                    alt="Hamidreza Daneshsarand - Mechanical Design Engineer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 items-center justify-center">
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

                {/* ✨ Enhanced gradient glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 -z-10 animate-pulse"></div>

                {/* 💼 Enhanced floating badges */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 animate-float border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-bold">Available for hire</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 animate-float animation-delay-1000 border border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      50+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}