import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function StorySection() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-br from-ink to-ink-soft px-6 py-20 md:px-10 md:py-24">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <span className="mb-4 block text-sm font-bold tracking-wide text-amber">
            {t('story.eyebrow')}
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl">
            {t('story.title')}
          </h2>
          <p className="mb-8 max-w-md text-[15px] leading-relaxed text-white/70">
            {t('story.description')}
          </p>
          <Button to="/about" variant="primary">
            {t('common.learnOurStory')}
          </Button>
        </div>

        <div className="h-[280px] overflow-hidden rounded-3xl shadow-2xl shadow-black/35 md:h-[340px]">
          {/* IMAGE: wide-format photo — community symposium/outreach event,
              landscape orientation, min 1200x900px recommended */}
          <img
            src="" // TODO: Cloudinary URL — symposium/outreach photo
            alt={t('story.imageAlt')}
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}