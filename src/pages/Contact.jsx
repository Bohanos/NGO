import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to Formspree, EmailJS, or Web3Forms endpoint —
    // no backend exists yet, this just prevents a page reload for now.
    console.log('Contact form submitted:', form)
  }

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        eyebrow="CONTACT"
        title="Get in touch"
        description="Questions, partnership requests, or a family that needs support — reach out below."
        className="mb-12"
      />

      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-text/70">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-text/70">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-text/70">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-primary/20 bg-transparent px-4 py-3 text-sm text-text outline-none focus:border-primary"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full text-center">
            Send Message
          </Button>
        </form>

        <div className="rounded-3xl bg-ink-soft/5 p-8">
          <h4 className="mb-4 text-sm font-bold text-text">Direct Contact</h4>
          <ul className="space-y-3 text-[14px] text-text/70">
            <li>hello@mcccf.org</li>
            <li>Bende LGA, Abia State</li>
          </ul>
        </div>
      </div>
    </section>
  )
}