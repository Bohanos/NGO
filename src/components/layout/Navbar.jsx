import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { navItems } from '../../data/navLinks'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/10 bg-cream/90 px-6 py-3.5 backdrop-blur-md md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-primary text-center text-[8px] font-bold leading-tight text-primary">
            LOGO
          </div>
          <div className="leading-tight">
            <span className="block text-[15px] font-bold text-text">Macedonian Call</span>
            <span className="block text-[10px] font-medium tracking-wide text-primary">
              CANCER FOUNDATION
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1.5 py-2 text-sm font-semibold text-text">
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3 stroke-current transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl
                               border border-primary/10 bg-cream p-3 opacity-0 shadow-xl shadow-ink/10
                               transition-all duration-300 group-hover:visible group-hover:translate-y-3.5 group-hover:opacity-100"
                  >
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        style={{ transitionDelay: `${i * 40}ms` }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text
                                   transition-colors hover:bg-primary/10"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-coral text-xs text-white">
                          ◆
                        </span>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="relative py-2 text-sm font-semibold text-text after:absolute after:bottom-1 after:left-0
                             after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-coral
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/donate"
            className="hidden rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-2.5 text-sm
                       font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Donate
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-text transition-transform duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-transform duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mt-4 flex flex-col gap-1 border-t border-primary/10 pt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileDropdownOpen((o) => !o)}
                    className="flex w-full items-center justify-between border-b border-primary/5 py-3.5 text-sm font-semibold text-text"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-3.5 w-3.5 stroke-current transition-transform duration-300 ${
                        mobileDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden pl-3 transition-all duration-300 ${
                      mobileDropdownOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block py-2.5 text-sm text-text/80"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block border-b border-primary/5 py-3.5 text-sm font-semibold text-text"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <Link
            to="/donate"
            className="mt-4 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-center text-sm font-bold text-white"
          >
            Donate
          </Link>
        </ul>
      </div>
    </nav>
  )
}