import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import ArrowShape from '../ui/ArrowShape'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          background:
            'radial-gradient(circle at 85% 10%, rgb(var(--color-amber) / 0.25), transparent 50%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <span className="mb-5 block text-sm font-bold tracking-wide text-primary">
            {t('hero.eyebrow')}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-[1.12] text-text md:text-5xl">
            {t('hero.titleLine1')}{' '}
            <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>{' '}
            {t('hero.titleLine2')}
          </h1>
          <p className="mb-8 max-w-md text-[16.5px] leading-relaxed text-text/70">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/donate" variant="primary">
              {t('common.supportAFamily')}
            </Button>
            <Button to="/what-we-do" variant="ghost">
              {t('common.seeOurWork')}
            </Button>
          </div>
        </div>

        <div className="relative h-[320px] md:h-[420px]">
          <ArrowShape
            shape="chevron"
            className="absolute right-0 top-0 h-[90px] w-[260px] bg-gradient-to-r from-amber to-coral opacity-90 md:h-[110px] md:w-[340px]"
          />
          <ArrowShape
            shape="chevron"
            className="absolute right-4 top-[95px] h-[90px] w-[230px] bg-gradient-to-r from-primary to-primary-dark opacity-90 md:top-[130px] md:h-[110px] md:w-[300px]"
          />

          <div className="absolute left-0 top-[50px] z-10 h-[220px] w-[220px] overflow-hidden rounded-3xl shadow-2xl shadow-ink/30 md:h-[280px] md:w-[280px]">
            {/* IMAGE: main hero photo — community outreach/walk, landscape or square source, will be cropped to square. Recommended min 800x800px */}
            <img
              src="" // TODO: Cloudinary URL — outreach walk photo
              alt={t('hero.mainPhotoAlt')}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[170px] top-[220px] z-20 h-[110px] w-[110px] overflow-hidden rounded-full border-[6px] border-cream shadow-xl shadow-ink/35 md:left-[220px] md:top-[280px] md:h-[150px] md:w-[150px]">
            {/* IMAGE: secondary inset photo — close-up of volunteers/beneficiaries, square crop, min 400x400px */}
            <img
              src="" // TODO: Cloudinary URL — close-up team/beneficiary photo
              alt={t('hero.insetPhotoAlt')}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}