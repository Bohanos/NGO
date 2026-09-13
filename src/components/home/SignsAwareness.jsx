import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { signsItems } from '../../data/signs'

export default function SignsAwareness() {
  const { t } = useTranslation()

  return (
    <section className="bg-ink-soft/5 px-6 py-20 md:px-10 md:py-24">
      <SectionHeading
        eyebrow={t('signs.eyebrow')}
        title={t('signs.title')}
        description={t('signs.description')}
        className="mb-14"
      />

      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {signsItems.map((item) => (
          <div
            key={item.key}
            className="overflow-hidden rounded-3xl bg-cream shadow-md shadow-ink/5"
          >
            <div className="relative h-[160px] overflow-hidden">
              {/* IMAGE: photo illustrating this awareness step, landscape, min 800x500px */}
              <img
                src="" // TODO: Cloudinary URL — image for this awareness step
                alt={t(`signs.items.${item.key}.title`)}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-xl shadow-lg">
                {item.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-[16px] font-bold text-text">
                {t(`signs.items.${item.key}.title`)}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-text/65">
                {t(`signs.items.${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}