import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { team } from '../../data/team'

const avatarGradients = [
  'from-primary to-coral',
  'from-coral to-amber',
  'from-amber to-teal',
  'from-teal to-primary',
]

function getInitials(name) {
  const parts = name.replace(/\./g, '').split(' ').filter((p) => /^[A-Z]/.test(p))
  return parts.slice(0, 2).map((p) => p[0]).join('')
}

export default function TeamGrid() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-20 md:px-10 md:py-24">
      <SectionHeading
        eyebrow={t('team.eyebrow')}
        title={t('team.title')}
        description={t('team.description')}
        className="mb-14"
      />

      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
        {team.map((member, i) => (
          <div key={member.slug} className="text-center">
            <div className="mx-auto mb-3.5 h-[88px] w-[88px] overflow-hidden rounded-full shadow-lg shadow-ink/15">
              {member.photoUrl ? (
                // IMAGE: team headshot, square crop, min 400x400px
                <img
                  src={member.photoUrl}
                  alt={t('common.portraitOf', { name: member.name })}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br
                              ${avatarGradients[i % avatarGradients.length]}
                              font-mono text-lg font-bold text-white`}
                >
                  {getInitials(member.name)}
                </div>
              )}
            </div>
            <h4 className="mb-0.5 text-[13.5px] font-bold text-text">
              {member.name}
            </h4>
            <span className="text-[11.5px] font-semibold text-primary">
              {t(`team.members.${member.slug}.role`)}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}