import { useTranslation } from 'react-i18next';

interface NavigationProps {
  isMobile?: boolean;
  onNavigate?: () => void;
}

export default function Navigation({ isMobile = false, onNavigate }: NavigationProps) {
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', label: t('nav.home'), href: '#home' },
    { key: 'about', label: t('nav.about'), href: '#about' },
    { key: 'experience', label: t('nav.experience'), href: '#experience' },
    { key: 'skills', label: t('nav.skills'), href: '#skills' },
    { key: 'projects', label: t('nav.projects'), href: '#projects' },
    { key: 'contact', label: t('nav.contact'), href: '#contact' },
  ];

  const baseClasses = isMobile
    ? 'block px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg'
    : 'px-4 py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate?.();
    }
  };

  return (
    <nav className={isMobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-1'}>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={baseClasses}
        >
          {item.label}
          {!isMobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
          )}
        </a>
      ))}
    </nav>
  );
}