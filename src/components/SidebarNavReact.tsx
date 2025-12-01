import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function SidebarNav() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [navItems, setNavItems] = useState([
    { id: 'presentation', labelKey: 'navPresentation' },
    { id: 'projects', labelKey: 'navProjects' },
    { id: 'stacks', labelKey: 'navStacks' },
    { id: 'contact', labelKey: 'navContact' },
  ]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('article[id], div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block z-50">
      <div className="flex flex-col gap-8 items-center">
        <LanguageSwitcher />

        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`nav-dot flex items-center gap-3 transition-all duration-300 flex-row-reverse ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:bg-blue-400 group-hover:border-blue-400 group-hover:scale-125 ${
                    activeSection === item.id
                      ? 'bg-blue-400 border-blue-400 scale-125 shadow-lg shadow-blue-500/50'
                      : 'bg-neutral-400 border-neutral-400'
                  }`}
                />
                <span
                  className={`nav-label opacity-100 text-sm font-medium whitespace-nowrap transition-all duration-300 absolute right-6 ${
                    activeSection === item.id
                      ? 'text-blue-300 font-semibold'
                      : 'text-neutral-100'
                  }`}
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  {t(item.labelKey)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
