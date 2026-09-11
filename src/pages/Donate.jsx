import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'


const bankDetails = {
  bank: 'Placeholder Bank Name',
  accountName: 'The Macedonian Call Cancer Foundation',
  accountNumber: '0000000000',
}

export default function Donate() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        eyebrow="DONATE"
        title="Every gift funds real care"
        description="Online payment (Paystack/Flutterwave) is coming soon. For now, donations are received via direct bank transfer."
        className="mb-12"
      />

      <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl shadow-primary/20">
        <h3 className="mb-6 text-sm font-bold tracking-wide text-white/70">
          BANK TRANSFER DETAILS
        </h3>
        <dl className="space-y-4 text-[15px]">
          <div>
            <dt className="text-xs text-white/60">Bank Name</dt>
            <dd className="font-semibold">{bankDetails.bank}</dd>
          </div>
          <div>
            <dt className="text-xs text-white/60">Account Name</dt>
            <dd className="font-semibold">{bankDetails.accountName}</dd>
          </div>
          <div>
            <dt className="text-xs text-white/60">Account Number</dt>
            <dd className="flex items-center gap-3 font-mono text-lg font-bold">
              {bankDetails.accountNumber}
              <button
                onClick={handleCopy}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/25"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </dd>
          </div>
        </dl>
      </div>

      <p className="mx-auto mt-8 max-w-md text-center text-[13px] text-text/55">
        Please keep your transfer receipt — a member of our team will reach
        out to confirm and send a thank-you note.
      </p>
    </section>
  )
}