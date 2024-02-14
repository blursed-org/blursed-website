'use client'

import { TypeAnimation } from 'react-type-animation'

export function FollowUs() {
  return (
    <TypeAnimation
      sequence={[
        '-> Conheça o nosso GitHub',
        7500,
        '-> Siga-nos no Instagram',
        7500,
      ]}
      wrapper="span"
      repeat={Infinity}
      className="text-normal self-center font-medium text-muted-foreground"
    />
  )
}
