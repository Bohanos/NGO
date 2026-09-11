import Hero from '../components/home/Hero'
import ApproachChain from '../components/home/ApproachChain'
import FocusCards from '../components/home/FocusCards'
import StorySection from '../components/home/StorySection'
import TeamGrid from '../components/home/TeamGrid'
import LeadershipCards from '../components/home/LeadershipCards'
import CtaBanner from '../components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ApproachChain />
      <FocusCards />
      <StorySection />
      <TeamGrid />
      <LeadershipCards />
      <CtaBanner />
    </>
  )
}