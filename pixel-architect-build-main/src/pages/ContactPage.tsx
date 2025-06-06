/* src/pages/Contact.tsx */
/* eslint-disable react/jsx-one-expression-per-line */

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '+919816031144';
const WHATSAPP_LINK   = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export default function Contact() {
  /* ---------- form state ---------- */
  const [formData, setFormData] = useState({
    name:    '',
    email:   '',
    phone:   '',
    subject: '',
    message: '',
  });

  const formRef  = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ---------- submit (unchanged) ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    try {
      setSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      const encoded = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\n${formData.message}`,
      );
      const waUrl  = `${WHATSAPP_LINK}?text=${encoded}`;
      const smsUrl = `sms:${WHATSAPP_NUMBER}?body=${encoded}`;

      const newTab = window.open(waUrl);
      setTimeout(() => { if (newTab && newTab.closed) window.open(smsUrl, '_blank'); }, 1200);

      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert('Sorry, something went wrong – please try again later.');
    } finally {
      setSending(false);
    }
  };

  /* ---------- UI ---------- */
  /* theme-update: entire section now uses site palette */
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Get in <span className="text-site-accent">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us to discuss your project or to learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* --------------------- form --------------------- */}
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg"
            >
              <h3 className="heading-md mb-6 text-gray-900">Send us a message</h3>

              {/* name / email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="name" name="name" required placeholder="Enter your name"
                    className="form-input" onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="Enter your email"
                    className="form-input" onChange={handleChange}
                  />
                </div>
              </div>

              {/* phone / subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone" name="phone" placeholder="Enter your phone number"
                    className="form-input" onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <select
                    id="subject" name="subject" required defaultValue=""
                    className="form-input" onChange={handleChange}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option>Project Inquiry</option>
                    <option>Consultation</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              {/* message */}
              <div className="mb-6">
                <label htmlFor="message" className="form-label">
                  Your Message *
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Tell us about your project…"
                  className="form-input resize-none" onChange={handleChange}
                />
              </div>

              <Button type="submit" disabled={sending}
                className="btn-primary shiny w-full md:w-auto">
                {sending ? 'Sending…' : 'Send Message'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* --------------------- contact card --------------------- */}
          <div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg h-full space-y-8">
              <h3 className="heading-md text-gray-900">Contact Information</h3>

              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                title="Phone" value="+91 9816031144"
                href={`tel:${WHATSAPP_NUMBER}`}
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                title="Email" value="chitkarashimla@gmail.com"
                href="mailto:chitkarashimla@gmail.com"
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                title="Office" value="1, Commercial Building…\nShimla 171001"
              />

              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Button asChild variant="outline"
                  className="w-full flex justify-center">
                  <a href={`tel:${WHATSAPP_NUMBER}`}>
                    Call&nbsp;Us <Phone className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline"
                  className="w-full flex justify-center">
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                      'Hello Chitkara Constructions, I would like to discuss…',
                    )}`} target="_blank" rel="noopener">
                    WhatsApp&nbsp;/&nbsp;SMS <MessageSquare className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helper ---------- */
function ContactRow({
  icon, title, value, href,
}: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-3 bg-site-accent/10 rounded-full text-site-accent">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        {href ? (
          <a href={href}
             className="text-gray-900 hover:text-site-accent break-all whitespace-pre-line">
            {value}
          </a>
        ) : (
          <p className="text-gray-900 whitespace-pre-line">{value}</p>
        )}
      </div>
    </div>
  );
}

/* ---------------- Tailwind helpers (add to index.css) ------------- */
/*
@layer components {
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-2;
  }
  .form-input {
    @apply w-full p-3 bg-gray-50 border border-gray-200 rounded-md
           focus:outline-none focus:border-site-accent text-gray-900;
  }
}
*/
