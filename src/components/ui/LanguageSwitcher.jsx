import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
]

// `inline`: renders as a static accordion that pushes content below it down
// in normal document flow (used in the mobile menu, so it can never overlap
// or hide beyond the scrollable page edge on short viewports).
// Default (false): floating absolute popover, used in the standalone
// desktop navbar position where there's open space around it.
export default function LanguageSwitcher({ inline = false }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (inline) return
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [inline])

  const current = languages.find((l) => l.code === i18n.language) || languages[0]

  const optionButton = (lang) => (
    <button
      key={lang.code}
      onClick={() => {
        i18n.changeLanguage(lang.code)
        setOpen(false)
      }}
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium
                  transition-colors hover:bg-primary/10
                  ${lang.code === current.code ? 'text-primary' : 'text-text'}`}
    >
      {lang.label}
      {lang.code === current.code && <span className="text-primary">✓</span>}
    </button>
  )

  if (inline) {
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between border-b border-primary/5 py-3.5 text-sm font-semibold text-text"
        >
          {current.label}
          <svg
            viewBox="0 0 24 24"
            className={`h-3.5 w-3.5 stroke-current transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {/* Static accordion — pushes content below it down, never overlaps,
            never exceeds the scrollable page height */}
        <div
          className={`overflow-hidden pl-1 transition-all duration-300 ${
            open ? 'max-h-80' : 'max-h-0'
          }`}
        >
          <div className="py-1">{languages.map(optionButton)}</div>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-2
                   text-xs font-bold text-text transition-colors hover:bg-primary/15"
      >
        {current.code.toUpperCase()}
        <svg
          viewBox="0 0 24 24"
          className={`h-3 w-3 stroke-current transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-40 origin-top-right rounded-2xl
                    border border-primary/15 bg-white shadow-2xl shadow-ink/25 transition-all duration-200
                    dark:border-white/10 dark:bg-[#2A0F3D]
                    ${open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}`}
      >
        <div className="p-2">{languages.map(optionButton)}</div>
      </div>
    </div>
  )
}