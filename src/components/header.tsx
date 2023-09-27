import Link from 'next/link'
import { IoLogoAppleAr as Logo } from 'react-icons/io5'
import { BiChevronDown as ChevronDown } from 'react-icons/bi'
import { AiOutlineStar as Star } from 'react-icons/ai'
import { Button } from './ui/button'
import { ChangeTheme } from './change-theme'

export async function Header() {
  const navLinks = [
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
      href: '/aboutme',
      isDropdown: true,
    },

    {
      name: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex items-center">
          <Link href={'/'}>
            <Logo className="mr-6 h-5 w-5" />
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
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

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button variant={'outline'} className="flex gap-2 text-xs">
            <Star className="h-4 w-4" />
            Star us on GitHub
          </Button>
          <Button>Contact</Button>
          <ChangeTheme className="-ml-4" />
        </div>
      </div>
    </header>
  )
}
