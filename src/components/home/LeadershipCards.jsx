import SectionHeading from '../ui/SectionHeading'
import { leadership } from '../../data/team'

export default function LeadershipCards() {
  return (
    <section className="px-6 pb-24 pt-4 md:px-10">
      <SectionHeading title="Foundation Leadership" className="mb-11" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {leadership.map((leader) => (
          <div
            key={leader.name}
            className="rounded-3xl bg-ink-soft/5 p-7 text-center shadow-md shadow-ink/5"
          >
            <div className="mx-auto mb-4 flex h-[100px] w-[100px] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-primary/60">
              {leader.photoUrl ? (
                // IMAGE: leadership headshot, square crop, min 500x500px, plain background preferred
                <img
                  src={leader.photoUrl}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <span className="text-2xl text-primary">◐</span>
                  <small className="mt-1 text-[8px] text-primary/70">
                    Photo coming soon
                  </small>
                </>
              )}
            </div>
            <h4 className="mb-1 text-[15.5px] font-bold text-text">
              {leader.name}
            </h4>
            <span className="mb-3 block text-xs font-bold text-primary">
              {leader.role}
            </span>
            <p className="text-[12.5px] leading-relaxed text-text/65">
              {leader.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}