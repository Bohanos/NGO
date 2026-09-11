import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const stats = [
  { value: '5+', label: 'Community outreaches' },
  { value: '190+', label: 'Households reached' },
  { value: '12', label: 'Partner organisations' },
]

const values = [
  {
    title: 'Community First',
    description: 'We go where people are, instead of waiting for them to find us.',
  },
  {
    title: 'Dignity in Care',
    description: 'Every family we support is treated with respect, not charity as pity.',
  },
  {
    title: 'Follow Through',
    description: "We don't stop at a single visit — support continues until a family is stable.",
  },
]

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-bold tracking-wide text-primary">
              WHO WE ARE
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-text md:text-4xl">
              A grassroots foundation built on showing up
            </h1>
            <p className="text-[15px] leading-relaxed text-text/65">
              The Macedonian Call Cancer Foundation started with a single
              cancer awareness walk in Bende LGA. Since then, it's grown into
              an ongoing partnership with local government, medical
              associations, and community leaders — working to make sure
              screening, treatment, and relief actually reach the people who
              need them.
            </p>
          </div>
          <div className="h-[300px] overflow-hidden rounded-3xl shadow-xl shadow-ink/15 md:h-[360px]">
            {/* IMAGE: wide group/team photo, landscape, min 1200x900px */}
            <img
              src="" // TODO: Cloudinary URL — team/foundation group photo
              alt="Foundation team and volunteers"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-soft/5 px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="block font-mono text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-text/60 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-9 text-white">
            <h3 className="mb-3 text-xl font-bold">Our Mission</h3>
            <p className="text-[14.5px] leading-relaxed text-white/85">
              To bring cancer screening, medical support, and relief directly
              to families who cannot otherwise afford care — starting with
              Bende LGA and growing with every outreach.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-coral to-amber p-9 text-ink">
            <h3 className="mb-3 text-xl font-bold">Our Vision</h3>
            <p className="text-[14.5px] leading-relaxed text-ink/80">
              A community where no one delays treatment, skips screening, or
              faces illness alone because of what they can't afford.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24 md:px-10">
        <SectionHeading eyebrow="WHAT GUIDES US" title="Our Values" className="mb-12" />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl bg-ink-soft/5 p-7">
              <h4 className="mb-2 text-[15.5px] font-bold text-text">
                {value.title}
              </h4>
              <p className="text-[13.5px] leading-relaxed text-text/65">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-coral to-amber px-6 py-16 text-center md:px-10">
        <h2 className="mb-6 text-2xl font-bold text-ink">
          Want to know more about how we work?
        </h2>
        <Button to="/what-we-do" variant="light">
          See What We Do
        </Button>
      </section>
    </>
  )
}