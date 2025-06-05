/*  src/components/Testimonials.tsx  */

import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Star,
} from 'lucide-react';

/* ══════════════════════════  seed reviews  ══════════════════════════ */
type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

const SEED: Review[] = [
  {
    id: 'seed-1',
    name: 'Ajay Sood',
    text:
      'Working with this construction team was an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations. Our commercial property was completed on time and within budget.',
    rating: 5,
  },
  {
    id: 'seed-2',
    name: 'Gaurav Sood',
    text:
      'The architectural designs were innovative and practical. The team was responsive to our feedback and made adjustments quickly. Our residential development has received numerous compliments because of their work.',
    rating: 5,
  },
  {
    id: 'seed-3',
    name: 'Mr Khanna',
    text:
      'From concept to completion, the team demonstrated professionalism and expertise. Their engineering solutions for our complex project were ingenious, saving us both time and resources.',
    rating: 4,
  },
  {
    id: 'seed-4',
    name: 'Mr 65',
    text:
      'The landscape architects transformed our hospital grounds into a healing garden that patients and staff love. Their understanding of how outdoor spaces affect wellbeing was impressive.',
    rating: 5,
  },
];

/* ══════════════════════════  component  ══════════════════════════ */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [lock, setLock] = useState(false);

  const jump = (d: -1 | 1) => {
    if (lock) return;
    setLock(true);
    setCurrent((p) =>
      d === -1 ? (p === 0 ? SEED.length - 1 : p - 1) : (p + 1) % SEED.length,
    );
    setTimeout(() => setLock(false), 350);
  };

  /* ═════════ UI ═════════ */
  return (
    <section id="testimonials" className="section-padding bg-site-panel">
      <div className="container-custom">
        <header className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Client&nbsp;<span className="text-site-accent">Testimonials</span>
          </h2>
          <p className="text-site-text/70 max-w-2xl mx-auto">
            Here's what our clients say about working with us
          </p>
        </header>

        {/* slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {SEED.map((r) => (
                <div key={r.id} className="min-w-full px-4">
                  <div className="relative bg-site-base p-8 md:p-10 rounded-lg border border-site-line shadow-elevated">
                    {/* stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < r.rating
                              ? 'fill-site-accent text-site-accent'
                              : 'text-site-line'
                          }`}
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl italic text-site-text/80 mb-6">
                      "{r.text}"
                    </blockquote>

                    <div className="flex items-center">
                      <p className="font-medium text-site-text">{r.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* nav arrows */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => jump(-1)}
              className="w-12 h-12 rounded-full border border-site-line flex items-center justify-center
                         hover:border-site-accent hover:text-site-accent transition"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => jump(1)}
              className="w-12 h-12 rounded-full border border-site-line flex items-center justify-center
                         hover:border-site-accent hover:text-site-accent transition"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-6">
            {SEED.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i ? 'bg-site-accent w-6' : 'bg-site-line w-2'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
