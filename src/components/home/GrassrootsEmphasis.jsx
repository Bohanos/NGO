import { useTranslation } from 'react-i18next'
import Reveal from '../ui/Reveal'

export default function GrassrootsEmphasis() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="h-[280px] overflow-hidden rounded-3xl shadow-xl shadow-ink/15 md:order-1 md:h-[340px]">
          {/* IMAGE: rural/village outreach photo, West African community setting,
              landscape orientation, min 1200x900px */}
          <img
            src="" // TODO: Cloudinary URL — remote village/community outreach photo
            alt={t('grassroots.imageAlt')}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:order-2">
          <span className="mb-4 block text-sm font-bold tracking-wide text-primary">
            {t('grassroots.eyebrow')}
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-text md:text-4xl">
            {t('grassroots.title')}
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-text/65">
            {t('grassroots.description')}
          </p>
        </div>
      </Reveal>
    </section>
  )
}