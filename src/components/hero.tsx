import Link from 'next/link'

import {
  AiOutlineGithub as GitHub,
  AiFillLinkedin as LinkedIn,
} from 'react-icons/ai'

import { FollowUs } from './follow-us'
import { ButtonProps, buttonVariants } from './ui/button'

import { HeroBadge } from './hero-badge'

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
      href: 'https://github.com/tellay/pap-website',
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
    <div className="relative grid place-content-center py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />

      <div className="mx-auto px-4">
        <HeroBadge />
      </div>

      <h1 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text px-6 py-3 text-center text-[48px] font-extrabold tracking-tighter text-transparent sm:text-[52px] md:text-[64px]">
        Privacidade, Segurança & Open-Source.
      </h1>

      <p className="px-4 py-3 text-center text-base font-medium text-muted-foreground sm:text-lg">
        Nós provemos segurança e privacidade aos nossos utilizadores. <br />
        Conheça mais sobre os nossos produtos. Experimente agora! Our products
      </p>

      <div className="flex flex-col py-4 sm:py-3">
        <FollowUs />

        <div className="mt-2 flex flex-col items-center space-y-4 px-8 sm:mx-auto sm:w-1/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
          {socialMediaLinks.map((socialMediaLink) => (
            <Link
              key={socialMediaLink.name}
              className={buttonVariants({
                variant: socialMediaLink.variant || 'default',
                className: 'flex w-full items-center gap-2',
              })}
              href={socialMediaLink.href}
              target="_blank"
            >
              <socialMediaLink.icon className="h-5 w-5" />
              {socialMediaLink.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
