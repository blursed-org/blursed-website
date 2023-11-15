import {
  SiTypescript as TypeScript,
  SiNextdotjs as Nextjs,
  SiBun as Bun,
  SiPrisma as Prisma,
} from 'react-icons/si'
import { GrMysql as MySQL } from 'react-icons/gr'
import { FaReact as React } from 'react-icons/fa'
import { CgArrowsScrollV as ArrowDown } from 'react-icons/cg'

import { Tech } from './tech'

export async function TechStack() {
  const TechStackList = [
    {
      tech: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      icon: <TypeScript className="h-9 w-9" />,
    },
    {
      tech: 'React',
      href: 'https://reactjs.org/',
      icon: <React className="h-9 w-9" />,
    },
    {
      tech: 'Next.js',
      href: 'https://nextjs.org/',
      icon: <Nextjs className="h-9 w-9" />,
    },
    {
      tech: 'Bun',
      href: 'https://bun.sh/',
      icon: <Bun className="h-9 w-9" />,
    },
    {
      tech: 'Prisma',
      href: 'https://www.prisma.io/',
      icon: <Prisma className="h-9 w-9" />,
    },
    {
      tech: 'MySQL',
      href: 'https://www.mysql.com/',
      icon: <MySQL className="h-9 w-9" />,
    },
  ]

  return (
    <section className="relative flex flex-col items-center px-4 py-20">
      <ArrowDown className="absolute top-0 h-7 w-7 text-muted-foreground/80" />
      <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
        Explore as tecnologias que usamos!
      </h2>
      <h3 className="tracking-tight text-muted-foreground">
        Experimente as tecnologias que nos acreditamos
      </h3>

      <div className="container mt-16 grid w-full grid-cols-3 place-items-center gap-y-8 sm:flex sm:max-w-screen-lg sm:justify-center sm:gap-14">
        {TechStackList.map((tech) => (
          <Tech key={tech.tech} {...tech} />
        ))}
      </div>
    </section>
  )
}
