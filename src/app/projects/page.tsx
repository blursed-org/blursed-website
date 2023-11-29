import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const projects = [
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
  {
    title: 'Building a SaaS product as a software developer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.',
    href: 'https://github.com/tellay/menutree',
  },
]
export default function ProjectsPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 px-4 py-6">
        {projects.map((project) => (
          <Link
            href={project.href}
            target="_blank"
            key={project.title}
            className="relative overflow-hidden rounded-lg border px-4 py-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:scale-[101%] hover:shadow-black/10"
          >
            <strong>{project.title}</strong>
            <Separator className="my-4" />
            <p className="text-sm text-foreground/80">{project.description}</p>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-primary/10"></span>
          </Link>
        ))}
      </div>
    </div>
  )
}
