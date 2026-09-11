export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="mb-3 block text-sm font-bold tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-3xl font-bold leading-tight text-text md:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-text/65">
          {description}
        </p>
      )}
    </div>
  )
}