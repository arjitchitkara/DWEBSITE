import { useEffect, useState } from "react";
import clsx from "clsx";

const IMAGES = [
  "/images/architecture-1.jpg",
  "/images/architecture-2.jpg",
  "/images/engineering.jpg",
  "/images/hero-left.jpg",
  "/images/hero-right.jpg",
  "/images/india-232725.jpg",
  "/images/shimla-1.jpg",
  "/images/shimla-2.jpg",
  "/images/shimla-3.jpg",
  "/images/valuation.jpg"
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={clsx(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
    </div>
  );
}
