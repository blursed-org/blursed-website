import Link from 'next/link'

import {
  AiOutlineGithub as GitHub,
  AiFillLinkedin as LinkedIn,
} from 'react-icons/ai'

import { Button, ButtonProps } from './ui/button'
import { FollowUs } from './follow-us'

interface SocialMediaLink {
  name: string
  href: string
  variant?: ButtonProps['variant']
  icon: React.ElementType
}

export async function Hero() {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/',
      icon: GitHub,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      variant: 'outline',
      icon: LinkedIn,
    },
  ]

  return (
    <div className="relative grid h-[530px] place-content-center">
      <div className="absolute inset-0 -z-10 h-full bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />
      <h1 className="from-title to-title-foreground bg-gradient-to-b bg-clip-text px-6 py-3 text-center text-[64px] font-extrabold tracking-tighter text-transparent">
        Privacy, Secure & Open-Source.
      </h1>

      <p className="text-muted-foreground px-4 py-3 text-center text-lg font-medium">
        We provide our users with a secure and private experience. <br />
        Our products together can be an excellent combination. Try it now!
      </p>

      <div className="flex flex-col items-center py-3">
        <FollowUs />

        <div className="mt-2 flex items-center space-x-4">
          {socialMediaLinks.map((socialMediaLink) => (
            <Link key={socialMediaLink.name} href={socialMediaLink.href}>
              <Button
                className="flex items-center gap-2"
                variant={socialMediaLink.variant || 'default'}
              >
                <socialMediaLink.icon className="h-5 w-5" />
                {socialMediaLink.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
