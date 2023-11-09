'use client'
import { HiOutlineMenuAlt4 as Menu } from 'react-icons/hi'

import { NavComponent, NavLink } from './header'
import { Button, buttonVariants } from './ui/button'

import { IoLogoAppleAr as Logo } from 'react-icons/io5'

import Link from 'next/link'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

interface MobileNavProps {
  links: NavLink[]
  components: NavComponent[]
}

export function MobileNav({ links, components }: MobileNavProps) {
  const [open, setIsOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant={'ghost'}
          className="block p-2 hover:bg-transparent nav:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Link
              className={buttonVariants({
                variant: 'link',
                className: '-mx-2 -mt-2 w-fit !p-2',
              })}
              href={'/'}
            >
              <Logo className="h-5 w-5" />
            </Link>
          </SheetTitle>
          <SheetDescription className="flex flex-col divide-y text-start">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(!open)}
                className="flex items-center space-x-2 py-4 text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </Link>
            ))}

            <Accordion type="single" collapsible>
              <AccordionItem value="components">
                <AccordionTrigger>PAP</AccordionTrigger>
                <AccordionContent
                  className="flex flex-col gap-2"
                  onClick={() => setIsOpen(!open)}
                >
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      className="py-4"
                      href={component.href}
                    >
                      {component.title}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
