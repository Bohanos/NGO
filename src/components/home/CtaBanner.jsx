import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-coral to-amber px-6 py-16 text-center md:px-10 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold text-ink md:text-[28px]">
          Help Us Reach the Next Family
        </h2>
        <p className="mb-7 text-[15px] text-ink/75">
          Every donation funds a screening, a surgery, or a household that
          needed help today.
        </p>
        <Button to="/donate" variant="light">
          Donate Now
        </Button>
      </div>
    </section>
  )
}