import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { footerColumns } from '../../data/navLinks'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
      {/* mountain-top edge — fixed color on purpose, so it always reads
          clearly against the CTA banner above it regardless of theme */}
      <svg
        viewBox="0 0 1200 70"
        preserveAspectRatio="none"
        className="-mb-1 block h-[56px] w-full md:h-[70px]"
      >
        <polygon
          points="0,70 0,30 100,55 220,10 340,50 460,20 600,58 740,15 860,48 980,8 1100,45 1200,25 1200,70"
          className="fill-[#3B0764]"
        />
      </svg>

      <footer className="bg-ink px-6 pb-10 pt-2 text-white/80 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div>
            {/* Brand — proper noun, intentionally not run through t() */}
            <span className="block text-[15px] font-bold text-white">Macedonian Call</span>
            <span className="block text-[10px] font-medium tracking-wide text-amber">
              CANCER FOUNDATION
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {t('footer.tagline')}
            </p>
            <Link
              to="/donate"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-amber to-coral px-6 py-3 text-sm font-bold text-ink"
            >
              {t('footer.becomeADonor')}
            </Link>
          </div>

          {footerColumns.map((col) => (
            <div key={col.headingKey}>
              <h5 className="mb-4 text-xs font-semibold tracking-wide text-white">
                {t(col.headingKey)}
              </h5>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.key}>
                    <Link to={link.href} className="transition-colors hover:text-amber">
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="mb-4 text-xs font-semibold tracking-wide text-white">
              {t('footer.connect')}
            </h5>
            <ul className="mb-4 space-y-2.5 text-sm">
              {/* Email intentionally not translated — it's an identifier, not a sentence */}
              <li>hello@mcccf.org</li>
              <li>{t('footer.location')}</li>
            </ul>
            <div className="flex gap-2.5">
              {['f', 'X', 'in', '◎'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20
                             text-xs transition-all hover:-translate-y-0.5 hover:bg-amber hover:text-ink"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-2 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {t('footer.copyright')}</span>
          <span>{t('footer.privacy')} · {t('footer.accessibility')}</span>
        </div>
      </footer>
    </>
  )
}