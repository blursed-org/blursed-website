import {
  SiTypescript as TypeScript,
  SiNextdotjs as Nextjs,
  SiFastify as Fastify,
  SiPrisma as Prisma,
} from 'react-icons/si'
import { GrMysql as MySQL } from 'react-icons/gr'
import { FaReact as React } from 'react-icons/fa'

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
      tech: 'Fastify',
      href: 'https://www.fastify.io/',
      icon: <Fastify className="h-9 w-9" />,
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
    <section className="flex flex-col items-center px-4 py-20">
      <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
        Explore the technologies we use!
      </h2>
      <h3 className="tracking-tight text-muted-foreground">
        Try the technologies we trust
      </h3>

      <div className="container mt-16 grid w-full grid-cols-3 place-items-center gap-y-8 sm:max-w-screen-lg sm:grid-cols-6">
        {TechStackList.map((tech) => (
          <Tech key={tech.tech} {...tech} />
        ))}
      </div>
    </section>
  )
}
