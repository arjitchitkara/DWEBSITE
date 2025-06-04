import { Link } from 'react-router-dom';
import Logo from './Logo';

const services = [
  'Architectural Design',
  'Engineering Consultation',
  'Construction Management',
  'Property Valuation',
  'Interior Design',
  'Site Supervision',
];

/* helper converts “Architectural Design” → “architectural-design” */
const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* Google-Maps link for the office */
  const mapsUrl =
    'https://www.google.com/maps?q=1,+Commercial+Building,+Near+DC+Office+Rd,+The+Mall,+Shimla+171001';

  return (
    <footer className="bg-site-panel border-t border-site-line pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* ─────────── column 1 ─────────── */}
          <div>
            <Logo variant="footer" />
            <p className="text-site-text/70 mt-6 max-w-xs">
              Premium construction company with architects, engineers, draughtsmen,
              valuers, and landscape architects providing top-quality construction services.
            </p>
          </div>

          {/* ─────────── column 2 ─────────── */}
          <div>
            <h3 className="text-site-text font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'].map((name) => (
                <li key={name}>
                  <Link
                    to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                    className="relative inline-block text-site-text/70 hover:text-site-accent transition-colors
                               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-site-accent
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─────────── column 3 ─────────── */}
          <div>
            <h3 className="text-site-text font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((svc) => (
                <li key={svc}>
                  <Link
                    to={`/services#${toSlug(svc)}`}
                    className="relative inline-block text-site-text/70 hover:text-site-accent transition-colors
                               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-site-accent
                               after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─────────── column 4 ─────────── */}
          <div>
            <h3 className="text-site-text font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-site-text/70">
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="relative inline-block break-all whitespace-pre-line hover:text-site-accent
                             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-site-accent
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  Chitkara&nbsp;Constructions<br />
                  Near&nbsp;DC&nbsp;office<br />
                  1,&nbsp;Commercial&nbsp;Building,<br />
                  The&nbsp;Mall,&nbsp;Shimla&nbsp;171001
                </a>
              </li>
              <li>Phone: +91&nbsp;9816031144</li>
              <li>Email: chitkarashimla@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-site-line pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-site-text/70 text-sm mb-4 md:mb-0">
            © {currentYear} Chitkara Constructions. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/* social icons… */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
