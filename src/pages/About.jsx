import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { aboutStats, aboutValues } from '../data/about'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      {/* Intro — top of page, visible on load, no Reveal (matches Hero.jsx) */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-bold tracking-wide text-primary">
              {t('pages.about.eyebrow')}
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-text md:text-4xl">
              {t('pages.about.title')}
            </h1>
            <p className="text-[15px] leading-relaxed text-text/65">
              {t('pages.about.intro')}
            </p>
          </div>
          <div className="h-[300px] overflow-hidden rounded-3xl shadow-xl shadow-ink/15 md:h-[360px]">
            {/* IMAGE: wide group/team photo, landscape, min 1200x900px */}
            <img
              src="" // TODO: Cloudinary URL — team/foundation group photo
              alt={t('pages.about.introImageAlt')}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-soft/5 px-6 py-14 md:px-10">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
          {aboutStats.map((stat) => (
            <div key={stat.key}>
              <span className="block font-mono text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-text/60 md:text-sm">
                {t(`pages.about.stats.${stat.key}`)}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 py-20 md:px-10">
        <Reveal className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-9 text-white">
            <h3 className="mb-3 text-xl font-bold">{t('pages.about.missionTitle')}</h3>
            <p className="text-[14.5px] leading-relaxed text-white/85">
              {t('pages.about.mission')}
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-coral to-amber p-9 text-ink">
            <h3 className="mb-3 text-xl font-bold">{t('pages.about.visionTitle')}</h3>
            <p className="text-[14.5px] leading-relaxed text-ink/80">
              {t('pages.about.vision')}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="px-6 pb-24 md:px-10">
        <SectionHeading
          eyebrow={t('pages.about.valuesEyebrow')}
          title={t('pages.about.valuesTitle')}
          className="mb-12"
        />
        <Reveal className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {aboutValues.map((value) => (
            <div key={value.key} className="rounded-2xl bg-ink-soft/5 p-7">
              <h4 className="mb-2 text-[15.5px] font-bold text-text">
                {t(`pages.about.values.${value.key}.title`)}
              </h4>
              <p className="text-[13.5px] leading-relaxed text-text/65">
                {t(`pages.about.values.${value.key}.description`)}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-gradient-to-r from-coral to-amber px-6 py-16 text-center md:px-10">
        <Reveal stagger={false}>
          <h2 className="mb-6 text-2xl font-bold text-ink">
            {t('pages.about.bannerTitle')}
          </h2>
          <Button to="/what-we-do" variant="light">
            {t('common.seeWhatWeDo')}
          </Button>
        </Reveal>
      </section>
    </>
  )
}