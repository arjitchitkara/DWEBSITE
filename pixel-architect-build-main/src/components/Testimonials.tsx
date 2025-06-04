/*  src/components/Testimonials.tsx  */

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Plus,
  Trash2,
} from 'lucide-react';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,                 // ⬅ import overlay explicitly
} from '@/components/ui/dialog';

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

/* ══════════════════════════  seed reviews  ══════════════════════════ */
type Review = {
  id: string;
  creator: string;          // 'seed' | browser-uid
  name: string;
  image: string;
  text: string;
  rating: number;
};

const SEED: Review[] = [
  {
    id: 'seed-1',
    creator: 'seed',
    name: 'Ajay Sood',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
    text:
      'Working with this construction team was an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations. Our commercial property was completed on time and within budget.',
    rating: 5,
  },
  {
    id: 'seed-2',
    creator: 'seed',
    name: 'Gaurav Sood',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    text:
      'The architectural designs were innovative and practical. The team was responsive to our feedback and made adjustments quickly. Our residential development has received numerous compliments because of their work.',
    rating: 5,
  },
  {
    id: 'seed-3',
    creator: 'seed',
    name: 'Mr Khanna',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    text:
      'From concept to completion, the team demonstrated professionalism and expertise. Their engineering solutions for our complex project were ingenious, saving us both time and resources.',
    rating: 4,
  },
  {
    id: 'seed-4',
    creator: 'seed',
    name: 'Mr 65',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150',
    text:
      'The landscape architects transformed our hospital grounds into a healing garden that patients and staff love. Their understanding of how outdoor spaces affect wellbeing was impressive.',
    rating: 5,
  },
];

/* ══════════════════════════  helpers  ══════════════════════════ */
const LS = 'cc_reviews';
const PLACE_ID = 'ChIJtXxA87LNBDkR0zvcoF2b7Uo';            // ← replace with real place-id
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

function load(): Review[] {
  try {
    const stored = JSON.parse(localStorage.getItem(LS) || '[]');
    return [...SEED, ...stored];
  } catch {
    return SEED;
  }
}

function save(arr: Review[]) {
  const mine = arr.filter((r) => r.creator !== 'seed');
  localStorage.setItem(LS, JSON.stringify(mine));
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`h-6 w-6 rounded-full flex items-center justify-center
                      ${
                        n <= value
                          ? 'bg-site-accent text-site-base'
                          : 'bg-site-panel text-site-text/40'
                      } hover:bg-site-accent/80 transition`}
          aria-label={`Rate ${n}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

/* ══════════════════════════  component  ══════════════════════════ */
export default function Testimonials() {
  /* unique id for this browser (for delete rights) */
  const uid = useMemo(() => {
    const k = 'cc_uid';
    let id = localStorage.getItem(k);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(k, id);
    }
    return id;
  }, []);

  const [reviews, setReviews] = useState<Review[]>(load);
  const [current, setCurrent] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => save(reviews), [reviews]);

  const jump = (d: -1 | 1) => {
    if (lock) return;
    setLock(true);
    setCurrent((p) =>
      d === -1 ? (p === 0 ? reviews.length - 1 : p - 1) : (p + 1) % reviews.length,
    );
    setTimeout(() => setLock(false), 350);
  };

  const erase = (id: string) =>
    setReviews((arr) => arr.filter((r) => r.id !== id));

  /* dialog state */
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    name: '',
    image: '',
    text: '',
    rating: 5,
  });

  /* Google sign-in → auto-fill */
  const onGoogle = (token: string) => {
    const { name, picture } = jwtDecode<{ name: string; picture: string }>(token);
    setDraft((d) => ({ ...d, name, image: picture }));
  };

  const valid = draft.name && draft.image && draft.text;

  const submit = () => {
    const newReview: Review = {
      id: crypto.randomUUID(),
      creator: uid,
      ...draft,
    };
    setReviews([...reviews, newReview]);
    setCurrent(reviews.length);
    setDraft({ name: '', image: '', text: '', rating: 5 });
    setOpen(false);
    window.open(GOOGLE_REVIEW_URL, '_blank');
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
            Here’s what our clients say about working with us
          </p>
        </header>

        {/* slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((r) => (
                <div key={r.id} className="min-w-full px-4">
                  <div className="relative bg-site-base p-8 md:p-10 rounded-lg border border-site-line shadow-elevated">
                    {r.creator === uid && (
                      <button
                        onClick={() => erase(r.id)}
                        className="absolute top-4 right-4 text-site-text/40 hover:text-site-accent transition"
                        aria-label="Delete your review"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    )}

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
                      “{r.text}”
                    </blockquote>

                    <div className="flex items-center">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <p className="font-medium text-site-text">{r.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* nav arrows */}
          <div className="flex justify-center gap-4 mt-10">
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
            {reviews.map((_, i) => (
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

        {/* dialog */}
        <div className="mt-14 flex justify-center">
          <Dialog open={open} onOpenChange={setOpen}>
            {/* overlay with pointer-events disabled so clicks reach card */}
            <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm overlay-pass-through" />

            <DialogTrigger asChild>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-site-line
                           hover:border-site-accent hover:text-site-accent transition"
              >
                <Plus className="h-4 w-4" />
                Add&nbsp;Your&nbsp;Review
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-lg rounded-3xl border border-site-line shadow-elevated bg-site-base p-8">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Share your experience
                </DialogTitle>
              </DialogHeader>

              {/* Google sign-in (only if name missing) */}
              {!draft.name && (
                <GoogleOAuthProvider clientId="YOUR_GOOGLE_OAUTH_CLIENT_ID">
                  <GoogleLogin
                    onSuccess={(c) => onGoogle(c.credential!)}
                    onError={() => console.error('Google login failed')}
                    text="continue_with"
                    width="320"
                    shape="pill"
                  />
                </GoogleOAuthProvider>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (valid) submit();
                }}
                className="mt-6 space-y-5"
              >
                {/* name & avatar */}
                {!draft.name && (
                  <>
                    <div>
                      <label className="block mb-1 font-medium">Your name</label>
                      <input
                        required
                        value={draft.name}
                        onChange={(e) =>
                          setDraft({ ...draft, name: e.target.value })
                        }
                        className="w-full rounded-md bg-site-panel p-3 border border-site-line
                                   focus:border-site-accent focus:ring-2 focus:ring-site-accent/50"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Photo URL</label>
                      <input
                        required
                        value={draft.image}
                        onChange={(e) =>
                          setDraft({ ...draft, image: e.target.value })
                        }
                        className="w-full rounded-md bg-site-panel p-3 border border-site-line
                                   focus:border-site-accent focus:ring-2 focus:ring-site-accent/50"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block mb-1 font-medium">Testimonial</label>
                  <textarea
                    rows={3}
                    required
                    value={draft.text}
                    onChange={(e) =>
                      setDraft({ ...draft, text: e.target.value })
                    }
                    className="w-full rounded-md bg-site-panel p-3 border border-site-line resize-none
                               focus:border-site-accent focus:ring-2 focus:ring-site-accent/50"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Rating</label>
                  <StarPicker
                    value={draft.rating}
                    onChange={(n) =>
                      setDraft({ ...draft, rating: n })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={!valid}
                  className="w-full rounded-md px-6 py-3 font-medium
                             disabled:opacity-40 disabled:cursor-not-allowed
                             bg-site-accent text-site-base shiny hover:bg-site-accent/90 transition"
                >
                  Submit & Post on Google
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
