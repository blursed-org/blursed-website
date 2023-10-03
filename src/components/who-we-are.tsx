import { AiOutlineGithub as GitHub } from 'react-icons/ai'
import {
  MdOutlineMoneyOffCsred as NoMoney,
  MdSecurity as Security,
} from 'react-icons/md'
import { Feature } from './feature'

export interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

export async function WhoWeAre() {
  const orgFeatures: Feature[] = [
    {
      title: 'Open Source',
      description:
        'All of our products are open source, check our GitHub repository and contribute!',
      icon: <GitHub className="h-8 w-8 shrink-0" />,
    },

    {
      title: 'Privacy and Security',
      description:
        'We provide our users with a secure and private experience. If you notice something wrong, let us know. We will fix it!',
      icon: <Security className="h-8 w-8 shrink-0" />,
    },

    {
      title: 'No Payments',
      description:
        'We are totally free, we do not have any ads or subscriptions.',
      icon: <NoMoney className="h-8 w-8 shrink-0" />,
    },
  ]

  return (
    <div className="bg-radialGradient px-4 py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
            Who we are and what we do?
          </h2>

          <p className="mt-8 max-w-2xl text-center text-base font-normal text-muted-foreground">
            OpenTech is an non profit organization. We believe in power of the
            web and of open source. Web must be an free, private and secure
            place for us!
          </p>

          <div className="mt-8 flex flex-col">
            {orgFeatures.map((feature) => (
              <Feature key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
