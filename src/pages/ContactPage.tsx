import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, MapPin, Send, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // ✅ دانلود رزومه با تست فایل
  const handleDownloadResume = () => {
    // تست 1: دانلود مستقیم از public
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hamidreza_Daneshsarand_Resume.pdf';
    link.target = '_blank'; // باز کردن در تب جدید
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // تست 2: اگر فایل نبود، لینک Google Drive/Dropbox بدهید
    // window.open('https://drive.google.com/file/YOUR_FILE_ID/view', '_blank');
  };

  // ✅ ارسال فرم با EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_q455z5k',           // Your Service ID
        'template_a0jwai4', // جایگزین کنید با Template ID خود
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'hamidrezadanesh1996@gmail.com',
        },
        'g1PyWiSPSE0NBIGOn'             // جایگزین کنید با Public Key خود
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contact.email'),
      value: 'hamidrezadanesh1996@gmail.com',
      href: 'mailto:hamidrezadanesh1996@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.phone'),
      value: '+98 9383012872',
      href: 'tel:+989383012872',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: t('contact.linkedin'),
      value: 'hamidreza-daneshsarand',
      href: 'https://linkedin.com/in/hamidreza-daneshsarand',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contact.location'),
      value: t('contact.availabilityStatus'),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white font-medium">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Resume Download */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border-2 border-primary-200 dark:border-primary-800">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.downloadMyResume')}
              </h4>
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                {t('common.downloadResume')}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={status === 'loading'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={status === 'loading'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.formSubject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  disabled={status === 'loading'}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  disabled={status === 'loading'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.formSubmit')}
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                  ✅ Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}