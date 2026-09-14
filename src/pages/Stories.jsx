import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { stories } from '../data/stories'
import usePageTitle from '../hooks/usePageTitle'

export default function Stories() {
  const { t } = useTranslation()
  usePageTitle(t('nav.stories'))

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      {/* Top of page — visible on load, no Reveal */}
      <SectionHeading
        eyebrow={t('pages.stories.eyebrow')}
        title={t('pages.stories.title')}
        className="mb-14"
      />

      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.slug}
            className="overflow-hidden rounded-2xl bg-ink-soft/5 shadow-sm shadow-ink/5"
          >
            <div className="h-[150px] overflow-hidden bg-primary/5">
              {story.image ? (
                <img
                  src={story.image}
                  alt={t(`stories.items.${story.slug}.title`)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] text-primary/40">
                  {t('common.imagePending')}
                </div>
              )}
            </div>
            <div className="p-5">
              <span className="text-[11px] font-bold tracking-wide text-primary">
                {t(`stories.items.${story.slug}.tag`)}
              </span>
              <h4 className="mt-2 text-[14.5px] font-bold leading-snug text-text">
                {t(`stories.items.${story.slug}.title`)}
              </h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-text/60">
                {t(`stories.items.${story.slug}.excerpt`)}
              </p>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  )
}