import { useTranslation } from 'react-i18next';
import { Code, Factory, TrendingUp, Shield } from 'lucide-react';
import SkillBar from '@/components/SkillBar';
import CertificationCard from '@/components/CertificationCard';

export default function SkillsPage() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t('skills.categories.design'),
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: t('skills.skillsList.solidworks'), proficiency: 95, years: 5 },
        { name: t('skills.skillsList.autocad'), proficiency: 90, years: 4 },
        { name: t('skills.skillsList.catia'), proficiency: 85, years: 3 },
        { name: t('skills.skillsList.moldflow'), proficiency: 80, years: 2 },
      ],
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: t('skills.categories.manufacturing'),
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: t('skills.skillsList.cnc'), proficiency: 90, years: 3 },
        { name: t('skills.skillsList.lean'), proficiency: 85, years: 4 },
        { name: t('skills.skillsList.sixsigma'), proficiency: 80, years: 2 },
        { name: t('skills.skillsList.dfma'), proficiency: 85, years: 3 },
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('skills.categories.programming'),
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: t('skills.skillsList.python'), proficiency: 75, years: 2 },
        { name: t('skills.skillsList.dataanalysis'), proficiency: 70, years: 2 },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('skills.categories.quality'),
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: t('skills.skillsList.iso9001'), proficiency: 90, years: 5 },
        { name: t('skills.skillsList.iso14001'), proficiency: 85, years: 3 },
        { name: t('skills.skillsList.gdt'), proficiency: 90, years: 4 },
      ],
    },
  ];

  const certifications = [
    {
      title: t('skills.cert1Title'),
      issuer: t('skills.cert1Issuer'),
      date: t('skills.cert1Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/verify/EXAMPLE',
    },
    {
      title: t('skills.cert2Title'),
      issuer: t('skills.cert2Issuer'),
      date: t('skills.cert2Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EXAMPLE',
    },
    {
      title: t('skills.cert3Title'),
      issuer: t('skills.cert3Issuer'),
      date: t('skills.cert3Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/verify/EXAMPLE',
    },
    {
      title: t('skills.cert4Title'),
      issuer: t('skills.cert4Issuer'),
      date: t('skills.cert4Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EXAMPLE',
    },
    {
      title: t('skills.cert5Title'),
      issuer: t('skills.cert5Issuer'),
      date: t('skills.cert5Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/EXAMPLE',
    },
    {
      title: t('skills.cert6Title'),
      issuer: t('skills.cert6Issuer'),
      date: t('skills.cert6Date'),
    },
    {
      title: t('skills.cert7Title'),
      issuer: t('skills.cert7Issuer'),
      date: t('skills.cert7Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/verify/EXAMPLE',
    },
    {
      title: t('skills.cert8Title'),
      issuer: t('skills.cert8Issuer'),
      date: t('skills.cert8Date'),
      credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/verify/EXAMPLE',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    yearsOfExperience={skill.years}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('skills.certifications')}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}