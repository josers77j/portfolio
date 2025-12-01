import { useTranslation } from 'react-i18next';
import Translate from './Translate';

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="md:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold text-neutral-100 mb-6">
        <Translate k="contactTitle" />
      </h2>

      <form action="/submit-contact" method="POST" className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-neutral-300 mb-2">
            <Translate k="name" />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('namePlaceholder')}
            className="w-full p-3 rounded-md bg-neutral-800/30 border border-neutral-500 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-neutral-300 mb-2">
            <Translate k="email" />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            className="w-full p-3 rounded-md bg-neutral-800/30 border border-neutral-500 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-neutral-300 mb-2">
            <Translate k="message" />
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t('messagePlaceholder')}
            className="w-full p-3 rounded-md bg-neutral-800/30 border border-neutral-500 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 bg-blue-600 text-neutral-100 font-semibold rounded-md transition-transform duration-300 hover:scale-105 hover:bg-blue-500"
        >
          <Translate k="sendMessage" />
        </button>
      </form>
    </div>
  );
}
