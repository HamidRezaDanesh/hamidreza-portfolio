import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Download } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contact.email'),
      value: 'hamidreza.mohammadi@example.com',
      href: 'mailto:hamidreza.mohammadi@example.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.phone'),
      value: '+31 6 1234 5678',
      href: 'tel:+31612345678',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.location'),
      value: 'Amsterdam, Netherlands',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hamidreza-mohammadi',
      href: 'https://linkedin.com/in/hamidreza-mohammadi',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/hamidreza-dev',
      href: 'https://github.com/hamidreza-dev',
      gradient: 'from-gray-700 to-gray-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header با Glass Effect */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6 shadow-glow-blue">
            <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
              {t('contact.badge', 'GET IN TOUCH')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('contact.info_title', 'Contact Information')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-hover glass-card group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-glow-blue group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-semibold">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-bold">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="card-hover glass-card p-6 border-2 border-blue-500/20 shadow-glow-blue">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  <Download className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {t('contact.resume_title', 'Download Resume')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('contact.resume_subtitle', 'Get my full CV in PDF format')}
                  </p>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-gradient px-6 py-3 rounded-lg font-bold"
                >
                  {t('contact.download', 'Download')}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: SEND MESSAGE FORM */}
          <div className="card-hover glass-card p-8 animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('contact.form_title', 'Send a Message')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.name', 'Name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-card w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  placeholder={t('contact.name_placeholder', 'Your name')}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.email', 'Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-card w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  placeholder={t('contact.email_placeholder', 'your.email@example.com')}
                />
              </div>

              {/* Subject Field - اضافه شد */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.subject', 'Subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass-card w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  placeholder={t('contact.subject_placeholder', 'What is this about?')}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message', 'Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-card w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none font-medium"
                  placeholder={t('contact.message_placeholder', 'Your message here...')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gradient w-full py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('contact.sending', 'Sending...')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.send', 'Send Message')}
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === 'success' && (
                <div className="glass-card p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-scale-in">
                  <p className="text-green-700 dark:text-green-300 font-bold text-center">
                    {t('contact.success', 'Message sent successfully!')}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="glass-card p-4 bg-red-500/20 border border-red-500/50 rounded-lg animate-scale-in">
                  <p className="text-red-700 dark:text-red-300 font-bold text-center">
                    {t('contact.error', 'Something went wrong. Please try again.')}
                  </p>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}