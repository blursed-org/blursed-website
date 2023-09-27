import Link from 'next/link'

import { FiExternalLink as ExternalLink } from 'react-icons/fi'
import { BsCheckLg as Check } from 'react-icons/bs'

interface productProps {
  logo?: React.ElementType
  name: string
  href: string
  description: string
  features: string[]
}

export async function Product({
  logo,
  name,
  href,
  description,
  features,
}: productProps) {
  return (
    <Link href={`/${href}`} className="group">
      <div className="flex h-full flex-col justify-between rounded-xl border bg-gradient-to-b from-card to-card-foreground p-8 shadow-productCard group-hover:from-card-foreground">
        <div>
          <strong className="flex items-baseline gap-2 text-[22px] font-semibold">
            {name}
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </strong>
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        </div>

        <div className="mt-6">
          {features.map((feature) => (
            <p
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </p>
          ))}
        </div>
      </div>
    </Link>
  )
}
