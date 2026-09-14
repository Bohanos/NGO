import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import usePageTitle from '../hooks/usePageTitle'

// Dummy bank account — literal data, not translated (proper noun + digits).
// Swap for Paystack/Flutterwave once that integration is built.
const bankDetails = {
  bank: 'Placeholder Bank Name',
  accountName: 'The Macedonian Call Cancer Foundation',
  accountNumber: '0000000000',
}

export default function Donate() {
  const { t } = useTranslation()
  usePageTitle(t('common.donate'))
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      {/* Top of page — visible on load, no Reveal */}
      <SectionHeading
        eyebrow={t('pages.donate.eyebrow')}
        title={t('pages.donate.title')}
        description={t('pages.donate.description')}
        className="mb-12"
      />

      <Reveal stagger={false}>
        <div className="mx-auto max-w-md rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl shadow-primary/20">
          <h3 className="mb-6 text-sm font-bold tracking-wide text-white/70">
            {t('pages.donate.bankDetailsTitle')}
          </h3>
          <dl className="space-y-4 text-[15px]">
            <div>
              <dt className="text-xs text-white/60">{t('pages.donate.bankName')}</dt>
              <dd className="font-semibold">{bankDetails.bank}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">{t('pages.donate.accountName')}</dt>
              <dd className="font-semibold">{bankDetails.accountName}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">{t('pages.donate.accountNumber')}</dt>
              <dd className="flex items-center gap-3 font-mono text-lg font-bold">
                {bankDetails.accountNumber}
                <button
                  onClick={handleCopy}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/25"
                >
                  {copied ? t('common.copied') : t('common.copy')}
                </button>
              </dd>
            </div>
          </dl>
        </div>

        <p className="mx-auto mt-8 max-w-md text-center text-[13px] text-text/55">
          {t('pages.donate.note')}
        </p>
      </Reveal>
    </section>
  )
}