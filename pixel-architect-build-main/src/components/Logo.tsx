// src/components/Logo.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export interface LogoProps {
  variant?: 'navbar' | 'footer'
  className?: string
}

const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  // navbar: 64px tall, 256px wide
  // footer: 32px tall, 128px wide
  const sizes =
    variant === 'navbar'
      ? 'h-16 w-64'
      : 'h-8 w-32'

  return (
    <Link to="/">
      <img
        src="/images/logo.png"
        alt="Chitkara Constructions Logo"
        className={`${sizes} object-contain ${className}`}
      />
    </Link>
  )
}

export default Logo
