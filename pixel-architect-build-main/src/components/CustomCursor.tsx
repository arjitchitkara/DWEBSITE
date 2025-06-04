
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const handleLinkHoverStart = () => {
      setLinkHovered(true);
    };

    const handleLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    const hoverables = document.querySelectorAll("a, button, .cursor-grow");
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", handleLinkHoverStart);
      hoverable.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseleave", handleMouseLeave);
      
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", handleLinkHoverStart);
        hoverable.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, [isVisible]);

  return (
    <>
      <div 
        className={`cursor-dot ${clicked ? 'scale-50 opacity-50' : ''} ${linkHovered ? 'opacity-0' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`cursor-outline ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
