import { useLayoutEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Logo from './Logo';

const links = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about', id: 'about' },
  { name: 'Services', path: '/services', id: 'services' },
  { name: 'Projects', path: '/projects', id: 'projects' },
  { name: 'Contact',  path: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const { pathname }            = useLocation();

  /* shrink + blur when you scroll 40 px */
  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, path: string, id?: string) => {
    // If we're on the home page and it's a section link, scroll to it
    if (pathname === '/' && id) {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    }
  };

  return (
    <header
      className={clsx(
        'fixed inset-x-0 z-50 transition-all duration-300',
        scrolled
          /* theme-update */
          ? 'py-2 backdrop-blur-md bg-site-base/70 shadow-elevated border-b border-site-line/40'
          : 'py-3'
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* ─────────────────── logo ─────────────────── */}
        <Logo to="/" className="h-16 md:h-20 mix-blend-difference" />

        {/* ─────────────── desktop links ─────────────── */}
        <ul className="hidden md:flex space-x-10 /* theme-update */ text-site-text">
          {links.map(l => (
            <li key={l.name}>
              {l.name === 'Contact' ? (
                <a
                  href={l.path}
                  onClick={(e) => handleSectionClick(e, l.path, 'contact')}
                  className={clsx(
                    'hover:text-site-accent transition-colors cursor-pointer',
                    pathname === l.path && 'text-site-accent font-semibold'
                  )}
                >
                  {l.name}
                </a>
              ) : (
                <Link
                  to={l.path}
                  onClick={(e) => handleSectionClick(e, l.path, l.id)}
                  className={clsx(
                    'hover:text-site-accent transition-colors',
                    pathname === l.path && 'text-site-accent font-semibold'
                  )}
                >
                  {l.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* ─────────────── hamburger ─────────────── */}
        <button
          onClick={() => setOpen(!open)}
          /* theme-update */
          className="md:hidden text-site-text p-2"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* ─────────────── mobile menu ─────────────── */}
      {open && (
        /* theme-update */
        <div className="md:hidden bg-site-base/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {links.map(l => (
              <li key={l.name}>
                {l.name === 'Contact' ? (
                  <a
                    href={l.path}
                    onClick={(e) => handleSectionClick(e, l.path, 'contact')}
                    /* theme-update */
                    className="text-site-text text-lg hover:text-site-accent cursor-pointer"
                  >
                    {l.name}
                  </a>
                ) : (
                  <Link
                    to={l.path}
                    onClick={(e) => handleSectionClick(e, l.path, l.id)}
                    /* theme-update */
                    className="text-site-text text-lg hover:text-site-accent"
                  >
                    {l.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
