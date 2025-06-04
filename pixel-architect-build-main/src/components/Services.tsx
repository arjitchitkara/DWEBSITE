// src/components/Services.tsx

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from '@/components/ui/dialog'
import { motion } from 'framer-motion'

// 2️⃣ fallback pictures (every card still needs a bg image in case video fails)
const pics = [
  '/images/arch.jpg',
  '/images/structure.jpg',
  '/images/valuation.jpg',
  '/images/interior.jpg',
  '/images/shimla-1.jpg',
  '/images/shimla-2.jpg',
]

// 3️⃣ services array (unchanged)
const services = [
  {
    id: 1,
    title: 'Architecture & Landscape',
    icon: '🏢',
    bg: '/images/arch.jpg',
    desc: 'Context-sensitive design marrying modern elegance with Himalayan vernacular.',
    details:
      'From massing concepts to planting palettes, we create places that breathe, age gracefully and belong to the mountains.',
    bullets: [
      'Ras Resort, Kufri – hillside master-plan & cottages',
      'Shimla Havens Resort – 44-room boutique extension',
      'Manla Homes Resort – timber façades + healing gardens',
    ],
  },
  {
    id: 2,
    title: 'Structural Engineering',
    icon: '📐',
    desc: 'Zone-IV earthquake-resistant detailing, fully NBC-2016 compliant.',
    details:
      'Our frames survive seismic shocks and Himalayan winters alike, using ETABS / STAAD modelling plus cost-smart detailing.',
    bullets: [
      'Royal Oak 79-flat complex – Tara Hall',
      'Multipurpose mall-parking near Lift, Shimla (₹170 Cr)',
      '100-room hotel – Shanti Nagar (ongoing)',
    ],
  },
  {
    id: 3,
    title: 'Valuation & Advisory',
    icon: '💰',
    desc: 'IT-approved valuations & turnkey feasibility for banks & PPP hubs.',
    details:
      'Defensible reports for lending, arbitration and public-private partnerships across Himachal.',
    bullets: [
      'Fair-market valuations for HDFC, SBI & PNB',
      'PPP parking feasibility – Sanjauli (₹83 Cr)',
      'Liquidation value of 200+ flats – Verma Constructions',
    ],
  },
  {
    id: 4,
    title: 'Interior Design',
    icon: '🪑',
    desc: 'Human-centred interiors that maximise space and reflect your brand.',
    details:
      'We turn shell-and-core structures into inspiring, revenue-driving environments.',
    bullets: [
      'Shimla Havens spa & wellness fit-out',
      'Boutique hotel – Prospect Hill, bespoke joinery',
      'Luxury flats – Vikasnagar, full FF&E package',
    ],
  },
  {
    id: 5,
    title: 'Site Supervision',
    icon: '👷‍♂️',
    desc: 'Full-time supervision enforcing safety, quality and schedule.',
    details:
      'Resident engineers deliver daily QC, HSE briefings and transparent progress reports.',
    bullets: [
      '79-flat Royal Oak build – daily QC',
      'Kanlog township – 150 flats, seismic QC',
      'Ras Resort phase-II cut-and-fill audits',
    ],
  },
  {
    id: 6,
    title: 'Feasibility & Planning',
    icon: '📝',
    desc: 'Viability, scheduling and approvals before you break ground.',
    details:
      'Master programmes, CAPEX curves and risk registers so budgets never run blind.',
    bullets: [
      'PPP bid – Chotta Shimla parking complex',
      'Primavera schedule – Verma 150-flat project',
      'DPR for Shimla–Sanjauli sky-walk corridor',
    ],
  },
]

/* ──────────────────────────────────────────────────────
   single service card
   ────────────────────────────────────────────────────── */
function Card({ svc, idx }: { svc: typeof services[0]; idx: number }) {
  const [hover, setHover] = useState(false)
  const bg = svc.bg ?? pics[idx % pics.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: idx * 0.05 }}
    >
      <Dialog>
        <DialogOverlay className="overlay-pass-through fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <DialogTrigger asChild>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className={`
              group relative overflow-hidden rounded-xl p-8
              border border-white/15 cursor-pointer
              transition-transform duration-300
              ${hover ? 'scale-[1.03] shadow-xl' : ''}
              before:absolute before:inset-0 before:bg-black/60
              before:transition-opacity
              ${hover ? 'before:opacity-40' : 'before:opacity-60'}
            `}
          >
            {/* Ken‐Burns layer for subtle background movement */}
            <div
              className="absolute inset-0 animate-ken-burns"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(3px) opacity(0.25)',
              }}
            />

            <div className="relative z-10 space-y-4 text-site-base">
              <div className="text-4xl">{svc.icon}</div>
              <h3 className="font-semibold text-lg leading-snug">{svc.title}</h3>
              <p className="text-sm text-site-base/80">{svc.desc}</p>

              <span className="inline-flex items-center font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-xl rounded-3xl border border-site-line bg-site-base/95 backdrop-blur-lg shadow-elevated p-0 overflow-hidden">
          {/* hero image */}
          <div
            className="h-48 md:h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />

          <div className="p-8 text-site-text">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-semibold">{svc.title}</DialogTitle>
              <DialogDescription className="text-site-text/70">
                {svc.desc}
              </DialogDescription>
            </DialogHeader>

            <p className="mb-6">{svc.details}</p>

            <ul className="space-y-3">
              {svc.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-1 text-site-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────
   Services section
   ────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
    >
      {/* 1️⃣ FULLSCREEN VIDEO BACKGROUND (from public/images) */}
      <div className="absolute inset-0 -z-10">
        <video
          src="pixel-architect-build-main\src\components\Assets\shimla.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading-lg text-center text-site-text mb-12"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={s.id} svc={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
