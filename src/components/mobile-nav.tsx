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
              onClick={() => setIsOpen(!open)}
            >
              <Logo className="h-5 w-5" />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col divide-y text-start text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(!open)}
              className="flex items-center space-x-2 py-4  text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.name}
            </Link>
          ))}

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>PAP</AccordionTrigger>
              <AccordionContent onClick={() => setIsOpen(!open)}>
                <div className="flex flex-col gap-2">
                  {components.map((component) => (
                    <Link
                      className="py-4"
                      key={component.title}
                      href={component.href}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  )
}
