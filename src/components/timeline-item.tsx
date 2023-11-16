import { components } from '@/components/mdx/mdx-components'

interface TimeLineItemProps {
  date: string
  title: string
  description: string
}

export async function TimeLineItem({
  date,
  title,
  description,
}: TimeLineItemProps) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-border text-foreground/20" />
      <time className="mb-1 text-sm font-normal leading-none">{date}</time>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <components.p className="!mt-1 text-base font-normal text-foreground/80">
        {description}
      </components.p>
    </li>
  )
}
