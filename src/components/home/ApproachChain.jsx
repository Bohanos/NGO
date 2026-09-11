import SectionHeading from '../ui/SectionHeading'
import ArrowShape from '../ui/ArrowShape'
import { approachSteps } from '../../data/services'

const gradients = [
  'from-primary-dark to-primary',
  'from-coral to-primary',
  'from-amber to-coral',
  'from-teal to-amber',
]

export default function ApproachChain() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="OUR APPROACH"
        title="How help reaches every doorstep"
        className="mb-14"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:flex md:justify-center md:gap-0">
        {approachSteps.map((step, i) => (
          <div
            key={step.num}
            className="md:contents"
          >
            <ArrowShape
              shape={i === 0 ? 'chevron-start' : 'chevron'}
              className={`hidden h-[190px] w-[255px] flex-col items-center justify-center bg-gradient-to-r
                          ${gradients[i % gradients.length]} px-9 py-6 text-center text-white
                          md:flex ${i === 0 ? 'md:ml-0 md:pl-7' : 'md:-ml-9'}`}
              style={{ zIndex: approachSteps.length - i }}
            >
              <StepContent step={step} />
            </ArrowShape>

            {/* Mobile card — plain rounded rectangle, no clip-path */}
            <div
              className={`flex h-[150px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br
                          ${gradients[i % gradients.length]} px-5 py-6 text-center text-white md:hidden`}
            >
              <StepContent step={step} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StepContent({ step }) {
  return (
    <>
      <span className="mb-1.5 font-mono text-xs font-bold opacity-85">
        {step.num}
      </span>
      <h4 className="mb-2 text-[15px] font-bold">{step.title}</h4>
      <p className="text-xs leading-relaxed opacity-90">{step.description}</p>
    </>
  )
}