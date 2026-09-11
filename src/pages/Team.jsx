import SectionHeading from '../components/ui/SectionHeading'
import TeamGrid from '../components/home/TeamGrid'
import LeadershipCards from '../components/home/LeadershipCards'

export default function Team() {
  return (
    <>
      <section className="px-6 pb-4 pt-16 text-center md:px-10 md:pt-20">
        <SectionHeading
          eyebrow="OUR TEAM"
          title="The people behind every outreach"
          description="Co-conveners, health authorities, and partners who make this work possible."
        />
      </section>

      
      <TeamGrid />
      <LeadershipCards />
    </>
  )
}