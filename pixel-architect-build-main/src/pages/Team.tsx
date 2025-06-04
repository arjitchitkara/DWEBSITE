import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar        from '@/components/Navbar';
import Footer        from '@/components/Footer';
import TeamMembers   from '@/components/TeamMembers';

export default function TeamPage() {
  /* SEO -------------------------------------------------- */
  useEffect(() => {
    document.title = 'Our Team – Chitkara Constructions';
  }, []);

  /* ------------------------------------------------------ */
  return (
    <div className="min-h-screen bg-site-base text-site-text">
      <CustomCursor />
      <Navbar />

      {/* main content */}
      <TeamMembers />

      <Footer />
    </div>
  );
}
