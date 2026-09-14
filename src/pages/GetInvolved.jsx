import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import usePageTitle from '../hooks/usePageTitle'

const options = [
  {
    id: undefined,
    titleKey: 'pages.getInvolved.volunteerTitle',
    descriptionKey: 'pages.getInvolved.volunteerDescription',
    ctaKey: 'pages.getInvolved.volunteerCta',
    href: '/contact',
  },
  {
    id: 'partners',
    titleKey: 'pages.getInvolved.partnerTitle',
    descriptionKey: 'pages.getInvolved.partnerDescription',
    ctaKey: 'pages.getInvolved.partnerCta',
    href: '/contact',
  },
]

// Placeholder partner slots — replace `logo: null` with a Cloudinary URL
// once each partner's actual logo/name is supplied. `number` feeds the
// common.partnerPlaceholder interpolation ("Partner {{number}}").
const partners = [
  { number: 1, logo: null },
  { number: 2, logo: null },
  { number: 3, logo: null },
  { number: 4, logo: null },
  { number: 5, logo: null },
]

export default function GetInvolved() {
  const { t } = useTranslation()
  usePageTitle(t('nav.getInvolved'))

  return (
    <>
      {/* Top of page — visible on load, no Reveal */}
      <section className="px-6 py-16 text-center md:px-10 md:py-20">
        <SectionHeading
          eyebrow={t('pages.getInvolved.eyebrow')}
          title={t('pages.getInvolved.title')}
        />
      </section>

      <section className="px-6 pb-20 md:px-10">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {options.map((opt) => (
            <div
              key={opt.titleKey}
              id={opt.id}
              className="rounded-3xl bg-ink-soft/5 p-8"
            >
              <h3 className="mb-3 text-xl font-bold text-text">
                {t(opt.titleKey)}
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed text-text/65">
                {t(opt.descriptionKey)}
              </p>
              <Button to={opt.href} variant="primary">
                {t(opt.ctaKey)}
              </Button>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-ink-soft/5 px-6 py-16 text-center md:px-10">
        <span className="mb-8 block text-sm font-bold tracking-wide text-primary">
          {t('pages.getInvolved.partnersEyebrow')}
        </span>
        <Reveal className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.number}
              className="flex h-20 items-center justify-center rounded-xl border-2 border-dashed border-primary/30 px-3"
            >
              {partner.logo ? (
                // IMAGE: partner logo, transparent PNG, min 300px wide
                <img
                  src={partner.logo}
                  alt={t('common.partnerPlaceholder', { number: partner.number })}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <span className="text-[11px] text-primary/50">
                  {t('common.partnerPlaceholder', { number: partner.number })}
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </section>
    </>
  )
}