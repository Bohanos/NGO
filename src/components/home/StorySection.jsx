import Button from '../ui/Button'

export default function StorySection() {
  return (
    <section className="bg-gradient-to-br from-ink to-ink-soft px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text column */}
        <div>
          <span className="mb-4 block text-sm font-bold tracking-wide text-amber">
            OUR STORY
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl">
            Healing Beyond the Hospital Walls
          </h2>
          <p className="mb-8 max-w-md text-[15px] leading-relaxed text-white/70">
            What started as a single cancer awareness walk in Bende LGA has
            grown into a grassroots movement — partnering with local
            government, medical associations, and community leaders to make
            sure care reaches people, not the other way around.
          </p>
          <Button to="/about" variant="primary">
            Learn Our Story
          </Button>
        </div>

        {/* Image column */}
        <div className="h-[280px] overflow-hidden rounded-3xl shadow-2xl shadow-black/35 md:h-[340px]">
          {/* IMAGE: wide-format photo — community symposium/outreach event,
              landscape orientation, min 1200x900px recommended */}
          <img
            src="" // TODO: Cloudinary URL — symposium/outreach photo
            alt="Community health symposium"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}