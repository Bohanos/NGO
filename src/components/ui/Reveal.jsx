import { useEffect, useRef, useState, Children } from 'react'

/**
 * Wraps children in a scroll-triggered fade/rise animation.
 * - Re-triggers every time the element enters the viewport (scrolling down
 *   OR back up past it again) — it does not fire once and stop.
 * - stagger=true (default): each direct child animates in one after another.
 * - stagger=false: all children fade in together as a single block
 *   (use this for sections that shouldn't feel like a staggered list).
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  stagger = true,
  amount = 0.15,
  staggerDelay = 90,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: amount }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [amount])

  const items = stagger ? Children.toArray(children) : [children]

  return (
    <Tag ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className="transition-all duration-700 ease-out"
          style={{
            transitionDelay: stagger ? `${i * staggerDelay}ms` : '0ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
          }}
        >
          {child}
        </div>
      ))}
    </Tag>
  )
}
