import { useTranslation } from 'react-i18next'
import ArrowShape from '../ui/ArrowShape'
import Reveal from '../ui/Reveal'

export default function GrassrootsEmphasis() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <ArrowShape
          shape="octagon"
          className="aspect-square w-full overflow-hidden shadow-xl shadow-ink/15 md:order-1"
        >
          {/* IMAGE: rural/village outreach photo, West African community setting,
              square-friendly crop (octagon clips corners), min 1200x1200px */}
          <img
            src="" // TODO: Cloudinary URL — remote village/community outreach photo
            alt={t('grassroots.imageAlt')}
            className="h-full w-full object-cover"
          />
        </ArrowShape>

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