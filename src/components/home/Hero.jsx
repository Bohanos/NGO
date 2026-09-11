import Button from '../ui/Button'
import ArrowShape from '../ui/ArrowShape'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      {/* soft background glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          background:
            'radial-gradient(circle at 85% 10%, rgb(var(--color-amber) / 0.25), transparent 50%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <div>
          <span className="mb-5 block text-sm font-bold tracking-wide text-primary">
            GRASSROOTS HEALTH &amp; RELIEF · ABIA STATE
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-[1.12] text-text md:text-5xl">
            Restoring Hope,{' '}
            <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
              Rebuilding Lives
            </span>{' '}
            One Family at a Time.
          </h1>
          <p className="mb-8 max-w-md text-[16.5px] leading-relaxed text-text/70">
            We reach families who can&apos;t afford screening, surgery, or basic
            care — bringing medical support and relief straight into the
            community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/donate" variant="primary">
              Support a Family
            </Button>
            <Button to="/what-we-do" variant="ghost">
              See Our Work
            </Button>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative h-[320px] md:h-[420px]">
          {/* decorative chevron shapes */}
          <ArrowShape
            shape="chevron"
            className="absolute right-0 top-0 h-[90px] w-[260px] bg-gradient-to-r from-amber to-coral opacity-90 md:h-[110px] md:w-[340px]"
          />
          <ArrowShape
            shape="chevron"
            className="absolute right-4 top-[95px] h-[90px] w-[230px] bg-gradient-to-r from-primary to-primary-dark opacity-90 md:top-[130px] md:h-[110px] md:w-[300px]"
          />

          {/* main hero photo */}
          <div className="absolute left-0 top-[50px] z-10 h-[220px] w-[220px] overflow-hidden rounded-3xl shadow-2xl shadow-ink/30 md:h-[280px] md:w-[280px]">
            {/* IMAGE: main hero photo — community outreach/walk, landscape or square source, will be cropped to square. Recommended min 800x800px */}
            <img
              src="" // TODO: Cloudinary URL — outreach walk photo
              alt="Community outreach walk"
              className="h-full w-full object-cover"
            />
          </div>

          {/* circular inset photo */}
          <div className="absolute left-[170px] top-[220px] z-20 h-[110px] w-[110px] overflow-hidden rounded-full border-[6px] border-cream shadow-xl shadow-ink/35 md:left-[220px] md:top-[280px] md:h-[150px] md:w-[150px]">
            {/* IMAGE: secondary inset photo — close-up of volunteers/beneficiaries, square crop, min 400x400px */}
            <img
              src="" // TODO: Cloudinary URL — close-up team/beneficiary photo
              alt="Volunteers at outreach event"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}