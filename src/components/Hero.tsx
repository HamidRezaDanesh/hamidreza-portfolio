// src/components/Hero.tsx - ⚡ PERFORMANCE OPTIMIZED VERSION
import { useTranslation } from 'react-i18next';
import { Download, Mail, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { memo, useState, useEffect } from 'react';

// 🎯 Memoized components for better performance
const StatCard = memo(({ value, label, gradient }: { value: string; label: string; gradient: string }) => (
  <div className="text-center lg:text-left group cursor-default">
    <div className={`text-4xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-110`}>
      {value}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
      {label}
    </div>
  </div>
));
StatCard.displayName = 'StatCard';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // ⚡ Optimize animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      {/* 🎨 Optimized Background - Single gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      {/* ✨ Simplified Animated shapes - Only 2 blobs with CSS */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl animate-blob-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl animate-blob-slower" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`text-center lg:text-left space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 🎯 Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4" />
              {t('hero.subtitle')}
            </div>

            {/* 📝 Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-gray-900 dark:text-white mb-3">
                {t('hero.greeting')}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
                {t('hero.name')}
              </span>
            </h1>

            {/* 💫 Typing Effect - Optimized height */}
            <div className="h-20 flex items-center justify-center lg:justify-start">
              <span className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300">
                {currentTitle}
                <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
              </span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* 📊 Stats - Memoized */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <StatCard value="5+" label={t('hero.achievement1')} gradient="from-blue-600 to-cyan-600" />
              <StatCard value="30%" label={t('hero.achievement2')} gradient="from-purple-600 to-pink-600" />
              <StatCard value="€50K" label={t('hero.achievement3')} gradient="from-green-600 to-emerald-600" />
            </div>

            {/* 🔘 CTA Buttons - Optimized hover */}
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
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                {t('common.contactMe')}
              </button>
            </div>

            <button
              onClick={handleViewProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium group"
            >
              {t('common.viewProjects')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Right: Profile Picture - Optimized */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* 🖼️ Main profile picture */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 ring-offset-4 ring-offset-transparent">
                <img 
                  src="/images/profile-pic.png" 
                  alt="Hamidreza Daneshsarand - Mechanical Design Engineer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
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

              {/* ✨ Simplified glow - Single layer */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 -z-10 animate-pulse" />

              {/* 💼 Floating badges - Simplified animation */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 animate-float border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-sm font-bold">Available for hire</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-5 animate-float-slow border border-gray-100 dark:border-gray-700">
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
        </div>
      </div>

      {/* ⚡ Optimized CSS Animations */}
      <style>{`
        @keyframes blob-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        .animate-blob-slow { animation: blob-slow 20s ease-in-out infinite; }
        .animate-blob-slower { animation: blob-slower 25s ease-in-out infinite; }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
<div className="glass-card p-8 animate-float">
  <h1 className="gradient-text text-6xl font-black">
    حمیدرضا دانش‌سرند
  </h1>
  <button className="btn-gradient mt-6">
    دانلود رزومه
  </button>
</div>
export default memo(Hero);
