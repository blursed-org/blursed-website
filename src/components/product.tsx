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
      <div className="from-card to-card-foreground shadow-productCard group-hover:from-card-foreground flex h-full flex-col justify-between rounded-xl border bg-gradient-to-b p-8">
        <div>
          <strong className="flex items-baseline gap-2 text-[22px] font-semibold">
            {name}
            <ExternalLink className="text-muted-foreground h-4 w-4" />
          </strong>
          <p className="text-muted-foreground mt-3 text-base">{description}</p>
        </div>

        <div className="mt-6">
          {features.map((feature) => (
            <p
              key={feature}
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <Check className="text-primary h-4 w-4" />
              {feature}
            </p>
          ))}
        </div>
      </div>
    </Link>
  )
}
