/*  src/components/TeamMembers.tsx  */
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// ─────────────────────────────────────────────────────────────────────────────
// 1)  TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────
type Step =
  | { id: number; year: string; title: string; body: string; img: string }
  | { id: number; year: string; title: string; body: string; images: string[] };

// ─────────────────────────────────────────────────────────────────────────────
// 2)  DATA (JOURNEY)
// ─────────────────────────────────────────────────────────────────────────────
const journey: Step[] = [
  {
    id: 1,
    year: '1994',
    title: 'Foundation',
    body:
      'Atul Chitkara assembles architects, engineers & valuers to launch the practice.',
    img: '/images/architecture.jpg'
  },
  {
    id: 2,
    year: '2005',
    title: 'First Boutique Resort',
    body:
      'Created a 5-star hillside retreat on Mall Road, fusing Himalayan vernacular with modern luxury.',
    img: '/images/shimlaheavens.jpg'
  },
  {
    id: 3,
    year: '2010',
    title: 'ISO-9001 Certification',
    body:
      'Quality-assurance systems formalized for design & project management.',
    img: '/images/engineering.jpg'
  },
  {
    id: 4,
    year: '2014',
    title: 'Signature Projects',
    body:
      'Our firm delivered three signature projects: a boutique resort expansion, a heritage hotel restoration, and an eco-residence that seamlessly integrates locality with modern engineering.',
    images: [
      '/images/shimla-1.jpg',
      '/images/shimla-2.jpg',
      '/images/architecture-1.jpg',
      '/images/structure.jpg',
      '/images/interior.jpg'
    ]
  },
  {
    id: 5,
    year: '2017',
    title: 'Smart Parking Deck',
    body: 'Delivered Himachal\'s first 800-car, Zone-IV seismic-safe automated deck featuring automated vehicle guidance, stormwater management, and green roof panels.',
    img: '/images/parking-render6.jpg'
  },
  {
    id: 6,
    year: '2024',
    title: 'Industry Leader',
    body: 'Honored by IRC, IEI & IIV for multidisciplinary excellence across the Himalayas, including innovative bridge retrofits, temple restorations, and sustainable resort designs.',
    img: '/images/architecture-2.jpg'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3)  HELPER COMPONENT: StepCard
// ─────────────────────────────────────────────────────────────────────────────
function StepCard({ step }: { step: Step }) {
  const imageSrc = 'img' in step
    ? step.img
    : Array.isArray(step.images) && step.images.length > 0
      ? step.images[0]
      : '';

  return (
    <div className="w-full md:w-96 bg-white rounded-xl shadow-md border border-site-line p-6 mb-16">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={step.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <p className="text-site-accent text-sm font-semibold mb-1">{step.year}</p>
      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
      <p className="text-sm leading-relaxed">{step.body}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4)  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function TeamMembers() {
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <>
      {/* ───  EMBEDDED SLIDESHOW + KEN BURNS CSS  ─────────────────── */}
      <style>
        {`
        @keyframes fadeZoom {
          0%   { opacity: 0; transform: scale(1); }
          10%  { opacity: 1; transform: scale(1); }
          60%  { opacity: 1; transform: scale(1.1); }
          90%  { opacity: 0; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
        .fade-zoom {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.4); /* Make the slideshow darker */
          animation: fadeZoom 24s ease-in-out infinite;
        }
        .fade-zoom:nth-child(1) { animation-delay: 0s; }
        .fade-zoom:nth-child(2) { animation-delay: 6s; }
        .fade-zoom:nth-child(3) { animation-delay: 12s; }
        .fade-zoom:nth-child(4) { animation-delay: 18s; }
      `}
      </style>

      {/* ─── "OUR JOURNEY" SECTION with FADE + ZOOM SLIDESHOW ───── */}
      <section id="journey" className="relative overflow-hidden">
        {/* 1) Slideshow container (absolute position, no fixed height) */}
        <div className="absolute inset-0 z-0">
          <img src="/images/view2.jpg" className="fade-zoom" alt="Slide 1" />
          <img src="/images/view8.jpg" className="fade-zoom" alt="Slide 2" />
          <img src="/images/view7.jpg" className="fade-zoom" alt="Slide 3" />
          <img src="/images/parking-render6.jpg" className="fade-zoom" alt="Slide 4" />
          {/* Additional semi-transparent overlay to deepen darkness */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* 2) Timeline content (relative, above slideshow) */}
        <div className="container-custom relative z-10 pt-16 pb-32">
          <h2 className="heading-lg text-center mb-12 text-white drop-shadow-lg">
            Our&nbsp;<span className="text-site-accent">Journey</span>
          </h2>

          <div className="relative mx-auto max-w-4xl">
            {/* Center spine line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-site-accent/80" />

            {journey.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`mb-20 flex ${
                  i % 2 ? 'flex-row-reverse' : 'flex-row'
                } items-start gap-8`}
              >
                {/* Dot on the spine (gold circle with white border) */}
                <span
                  className={clsx(
                    'w-5 h-5 rounded-full bg-site-accent border-2 border-white mt-2 shrink-0',
                    i % 2
                      ? 'order-1 translate-x-1.5'
                      : '-translate-x-1.5'
                  )}
                />

                <StepCard step={s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
