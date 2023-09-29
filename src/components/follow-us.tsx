'use client'

import { TypeAnimation } from 'react-type-animation'

export function FollowUs() {
  return (
    <TypeAnimation
      sequence={[
        '-> Follow us on GitHub',
        7500,
        '-> Follow us on LinkedIn',
        7500,
        '-> Follow us on X',
        7500,
        '-> Follow us on Instagram',
        7500,
        '-> Follow us on Facebook',
        750,
      ]}
      wrapper="span"
      repeat={Infinity}
      className="text-normal  font-medium text-muted-foreground"
    />
  )
}
