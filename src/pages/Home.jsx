import Hero from '../components/home/Hero'
import SignsAwareness from '../components/home/SignsAwareness'
import ApproachChain from '../components/home/ApproachChain'
import FocusCards from '../components/home/FocusCards'
import StorySection from '../components/home/StorySection'
import GrassrootsEmphasis from '../components/home/GrassrootsEmphasis'
import TeamGrid from '../components/home/TeamGrid'
import LeadershipCards from '../components/home/LeadershipCards'
import CtaBanner from '../components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <SignsAwareness />
      <ApproachChain />
      <FocusCards />
      <StorySection />
      <GrassrootsEmphasis />
      <TeamGrid />
      <LeadershipCards />
      <CtaBanner />
    </>
  )
}