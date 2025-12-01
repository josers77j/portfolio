import Translate from './Translate';
import presentation from '@/data/presentation';

export default function ContactForm() {
  const email = presentation.mail;

  const mailto = `mailto:${email}`;

  return (
    <div className="md:w-2/2 bg-white/10 backdrop-blur-lg p-8 rounded-md shadow-md flex flex-col gap-4">
      <h2 className="text-3xl font-semibold text-neutral-100 mb-2">
        <Translate k="contactTitle" />
      </h2>

      <p className="text-neutral-400"><Translate k="contactCTA" /></p>

      <a
        href={mailto}
        className="inline-flex items-center justify-center w-full mt-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
      >
        <Translate k="emailMe" />
      </a>
    </div>
  );
}
