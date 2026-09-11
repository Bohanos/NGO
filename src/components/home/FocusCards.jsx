import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function FocusCards() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="WHAT WE DO"
        title="Providing essential care, restoring dignity"
        align="left"
        className="mb-12"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl bg-ink-soft/5 p-7 shadow-md shadow-ink/5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-coral text-2xl text-white">
              {service.icon}
            </div>
            <h3 className="mb-2.5 text-[17px] font-bold text-text">
              {service.title}
            </h3>
            <p className="mb-4 text-[13.5px] leading-relaxed text-text/65">
              {service.description}
            </p>
            
            <a
              href={service.href}
              className="text-[13px] font-bold text-primary transition-opacity hover:opacity-70"
            >
              Read More → 
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}