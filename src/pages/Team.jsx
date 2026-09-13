import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import TeamGrid from '../components/home/TeamGrid'
import LeadershipCards from '../components/home/LeadershipCards'

export default function Team() {
  const { t } = useTranslation()

  return (
    <>
      {/* Top of page — visible on load, no Reveal */}
      <section className="px-6 pb-4 pt-16 text-center md:px-10 md:pt-20">
        <SectionHeading
          eyebrow={t('pages.team.eyebrow')}
          title={t('pages.team.title')}
          description={t('pages.team.description')}
        />
      </section>

      {/* TeamGrid and LeadershipCards already handle their own t() + Reveal internally */}
      <TeamGrid />
      <LeadershipCards />
    </>
  )
}