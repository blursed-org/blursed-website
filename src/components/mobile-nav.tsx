import { HiOutlineMenuAlt4 as Menu } from 'react-icons/hi'

import { NavLink } from './header'
import { Button } from './ui/button'

import { IoLogoAppleAr as Logo } from 'react-icons/io5'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Link from 'next/link'

interface MobileNavProps {
  links: NavLink[]
}

export async function MobileNav({ links }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={'ghost'}
          className="block p-2 hover:bg-transparent md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <SheetHeader>
          <SheetTitle>
            <Logo className="h-5 w-5" />
          </SheetTitle>
          <SheetDescription className="flex flex-col divide-y text-start">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-2 py-4 text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
