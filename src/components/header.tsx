'use client'

import Link from 'next/link'
import { AiOutlineStar as Star } from 'react-icons/ai'
import { IoLogoAppleAr as Logo } from 'react-icons/io5'

import { cn } from '@/lib/utils'
import React from 'react'
import { ChangeTheme } from './change-theme'
import { MobileNav } from './mobile-nav'
import { Button, buttonVariants } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'

export interface NavLink {
  name: string
  href: string
  isDropdown?: boolean
}

export interface NavComponent {
  title: string
  href: string
  description: string
}

export function Header() {
  const navLinks: NavLink[] = [
    {
      name: 'Organização',
      href: '/organization',
    },

    {
      name: 'Produtos',
      href: '/products',
    },

    {
      name: 'Sobre mim',
      href: '/about',
    },
  ]

  const navComponents = [
    {
      title: 'Matérias',
      href: '/epm/subjects',
      description:
        'Tópicos técnicos que foram abordados enquanto frequentei o curso.',
    },
    {
      title: 'PAP',
      href: '/epm/pap',
      description:
        'Documentos relacionados com a minha prova de aptidão profissional (PAP).',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-14 items-center px-4 md:container">
        <div className="flex items-center">
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'link',
              className: 'hover:bg-transparent md:mr-6',
            })}
          >
            <Logo className="h-5 w-5" />
          </Link>

          <NavigationMenu className="hidden nav:block">
            <NavigationMenuList>
              {navLinks.map((navLink) => (
                <NavigationMenuItem key={navLink.name}>
                  <Link href={navLink.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {navLink.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>PAP</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {navComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end sm:gap-4">
          <div className="hidden items-center gap-2 nav:flex">
            <Link
              className={buttonVariants({
                variant: 'outline',
                className: 'flex gap-2 text-xs',
              })}
              href={'https://github.com/tellay/pap-website'}
              target="_blank"
            >
              <Star className="h-4 w-4" />
              Repostório no GitHub
            </Link>
            <Button>Contato</Button>
          </div>

          <MobileNav links={navLinks} components={navComponents} />
          <ChangeTheme />
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
