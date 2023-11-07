import Link from 'next/link'
import { IoLogoAppleAr as Logo } from 'react-icons/io5'
import { BiChevronDown as ChevronDown } from 'react-icons/bi'
import { AiOutlineStar as Star } from 'react-icons/ai'

import { Button } from './ui/button'
import { ChangeTheme } from './change-theme'
import { MobileNav } from './mobile-nav'

export interface NavLink {
  name: string
  href: string
  isDropdown?: boolean
}

export async function Header() {
  const navLinks: NavLink[] = [
    {
      name: 'Organization',
      href: '/organization',
    },

    {
      name: 'Products',
      href: '/products',
      isDropdown: true,
    },

    {
      name: 'About me',
      href: '/about',
    },

    {
      name: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center px-4 md:container">
        <div className="flex items-center">
          <Button variant={'ghost'} className="p-2 hover:bg-transparent">
            <Link href={'/'}>
              <Logo className="h-5 w-5 md:mr-6" />
            </Link>
          </Button>

          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
                {link.isDropdown && <ChevronDown className="h-5 w-5" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end sm:gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <Button variant={'outline'} className="flex gap-2 text-xs">
              <Star className="h-4 w-4" />
              Star us on GitHub
            </Button>
            <Button>Contact</Button>
          </div>

          <MobileNav links={navLinks} />
          <ChangeTheme />
        </div>
      </div>
    </header>
  )
}
