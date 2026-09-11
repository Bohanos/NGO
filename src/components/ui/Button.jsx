import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5',
  ghost:
    'border-2 border-primary text-primary hover:bg-primary/10',
  light:
    'bg-cream text-ink shadow-lg hover:-translate-y-0.5',
  gradient:
    'bg-gradient-to-r from-amber to-coral text-ink shadow-lg hover:-translate-y-0.5',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `inline-block rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}