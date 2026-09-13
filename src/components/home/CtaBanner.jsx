import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CtaBanner() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-r from-coral to-amber px-6 py-16 text-center md:px-10 md:py-20">
      <Reveal stagger={false} className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold text-ink md:text-[28px]">
          {t('cta.title')}
        </h2>
        <p className="mb-7 text-[15px] text-ink/75">
          {t('cta.description')}
        </p>
        <Button to="/donate" variant="light">
          {t('cta.button')}
        </Button>
      </Reveal>
    </section>
  )
}