import { motion } from 'framer-motion';

const owner = {
  img: '/images/atul-chitkara.png',
  headingA: 'Atul Chitkara',
  headingB: 'Chitkara Constructions',
  blurb: `Since 1994 we've delivered *350+ hill-terrain projects*—from boutique
resorts to smart decks. ISO-9001 certified designers & Income-Tax-approved valuers
committed to contextual sensitivity, structural rigour and lasting sustainability.`,
  stats: [
    { label: 'Projects',     value: '350+' },
    { label: 'Years',        value: '30+'  },
    { label: 'Satisfaction', value: '5★'  }
  ]
};

export default function AtulChitkara() {
  return (
    <section className="section-padding bg-site-base">
      <div className="container-custom flex flex-col lg:flex-row gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src={owner.img}
          alt={owner.headingA}
          className="w-full max-w-sm rounded-xl shadow-elevated object-cover"
        />
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="heading-xl">
            {owner.headingA}
            <br />
            <span className="text-site-accent">{owner.headingB}</span>
          </h2>
          <p className="text-body max-w-2xl">
            {owner.blurb.split('\n').map((line, idx) => (
              <span key={idx}>
                {line.replace(/\*/g, '')}
                <br />
              </span>
            ))}
          </p>
          <div className="flex gap-12 pt-2">
            {owner.stats.map((s) => (
              <div key={s.label}>
                <p className="text-site-accent font-bold text-2xl">{s.value}</p>
                <p className="text-xs tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 