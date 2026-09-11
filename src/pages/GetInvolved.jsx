import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const options = [
  {
    title: 'Volunteer',
    description: 'Join outreach days — screening support, logistics, or community mobilization.',
    cta: 'Sign Up to Volunteer',
    href: '/contact',
  },
  {
    title: 'Partner With Us',
    id: 'partners',
    description: 'Medical bodies, local government, and organisations working alongside us.',
    cta: 'Discuss a Partnership',
    href: '/contact',
  },
]

// Placeholder partner slots — replace `logo: null` with a Cloudinary URL
// once each partner's actual logo is supplied.
const partners = [
  { name: 'Partner One', logo: null },
  { name: 'Partner Two', logo: null },
  { name: 'Partner Three', logo: null },
  { name: 'Partner Four', logo: null },
  { name: 'Partner Five', logo: null },
]

export default function GetInvolved() {
  return (
    <>
      <section className="px-6 py-16 text-center md:px-10 md:py-20">
        <SectionHeading
          eyebrow="GET INVOLVED"
          title="There's a place for you in this work"
        />
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {options.map((opt) => (
            <div
              key={opt.title}
              id={opt.id}
              className="rounded-3xl bg-ink-soft/5 p-8"
            >
              <h3 className="mb-3 text-xl font-bold text-text">{opt.title}</h3>
              <p className="mb-6 text-[14px] leading-relaxed text-text/65">
                {opt.description}
              </p>
              <Button to={opt.href} variant="primary">
                {opt.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-soft/5 px-6 py-16 text-center md:px-10">
        <span className="mb-8 block text-sm font-bold tracking-wide text-primary">
          OUR PARTNERS
        </span>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 items-center justify-center rounded-xl border-2 border-dashed border-primary/30 px-3"
            >
              {partner.logo ? (
                // IMAGE: partner logo, transparent PNG, min 300px wide
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <span className="text-[11px] text-primary/50">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}