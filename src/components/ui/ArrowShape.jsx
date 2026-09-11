// Reusable clip-path wrapper.
const clipPaths = {
  chevron: 'polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%, 18% 50%)',
  'chevron-start': 'polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%)', 
  octagon:
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
}

export default function ArrowShape({
  shape = 'chevron',
  children,
  className = '',
  style = {},
}) {
  return (
    <div
      className={className}
      style={{ clipPath: clipPaths[shape], ...style }}
    >
      {children}
    </div>
  )
}