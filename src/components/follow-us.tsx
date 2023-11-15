'use client'

import { TypeAnimation } from 'react-type-animation'

export function FollowUs() {
  return (
    <TypeAnimation
      sequence={[
        '-> Siga-nos no GitHub',
        7500,
        '-> Siga-nos no LinkedIn',
        7500,
        '-> Siga-nos no X',
        7500,
        '-> Siga-nos no Instagram',
        7500,
        '-> Siga-nos no Facebook',
        750,
      ]}
      wrapper="span"
      repeat={Infinity}
      className="text-normal self-center font-medium text-muted-foreground"
    />
  )
}
