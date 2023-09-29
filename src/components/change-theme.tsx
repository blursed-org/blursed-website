'use client'

import { useTheme } from 'next-themes'

import { RiMoonClearLine as MoonStars } from 'react-icons/ri'
import { LuSun as Sun } from 'react-icons/lu'

import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export function ChangeTheme({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={'ghost'}
      className={cn('p-3 hover:bg-transparent', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <MoonStars className="h-5 w-5" />
      )}
    </Button>
  )
}
