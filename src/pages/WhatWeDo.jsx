import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { services, approachSteps } from '../data/services'

export default function WhatWeDo() {
  const { t } = useTranslation()

  return (
    <>
      {/* Top of page — visible on load, no Reveal */}
      <section className="px-6 py-16 text-center md:px-10 md:py-20">
        <SectionHeading
          eyebrow={t('pages.whatWeDo.eyebrow')}
          title={t('pages.whatWeDo.title')}
          description={t('pages.whatWeDo.description')}
        />
      </section>

      {/* Detailed service blocks, alternating layout */}
      {services.map((service, i) => (
        <section
          id={service.id}
          key={service.id}
          className={`px-6 py-14 md:px-10 ${i % 2 === 1 ? 'bg-ink-soft/5' : ''}`}
        >
          <Reveal
            className={`mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 ${
              i % 2 === 1 ? 'md:[direction:rtl]' : ''
            }`}
          >
            <div className="md:[direction:ltr]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-coral text-2xl text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text">
                {t(`services.${service.id}.title`)}
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-text/65">
                {t(`services.${service.id}.description`)}
              </p>
            </div>

            <div className="h-[240px] overflow-hidden rounded-3xl shadow-lg shadow-ink/10 md:[direction:ltr]">
              {service.image ? (
                // IMAGE: photo representing this focus area, landscape, min 1000x750px
                <img
                  src={service.image}
                  alt={t(`services.${service.id}.title`)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary/5 text-[12px] font-medium text-primary/40">
                  {t('common.imagePending')}
                </div>
              )}
            </div>
          </Reveal>
        </section>
      ))}

      {/* Process recap */}
      <section className="px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow={t('pages.whatWeDo.processEyebrow')}
          title={t('pages.whatWeDo.processTitle')}
          className="mb-12"
        />
        <Reveal className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {approachSteps.map((step) => (
            <div
              key={step.key}
              className="rounded-2xl bg-ink-soft/5 p-5 text-center"
            >
              <span className="mb-2 block font-mono text-xs font-bold text-primary">
                {step.num}
              </span>
              <h4 className="mb-1.5 text-[13.5px] font-bold text-text">
                {t(`approach.steps.${step.key}.title`)}
              </h4>
              <p className="text-[11.5px] leading-relaxed text-text/60">
                {t(`approach.steps.${step.key}.description`)}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary-dark px-6 py-16 text-center text-white md:px-10">
        <Reveal stagger={false}>
          <h2 className="mb-6 text-2xl font-bold">
            {t('pages.whatWeDo.bannerTitle')}
          </h2>
          <Button to="/contact" variant="light">
            {t('pages.whatWeDo.reachOut')}
          </Button>
        </Reveal>
      </section>
    </>
  )
}