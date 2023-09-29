import { AiOutlineGithub as GitHub } from 'react-icons/ai'
import {
  //   FaRegGrinHearts as EmojiFaceHeart,
  PiHandWaving as HelloHand,
  PiHandshake as Handshake,
} from 'react-icons/pi'
import { BsEmojiSmile as EmojiFaceHeart } from 'react-icons/bs'

import { MdSecurity as Security, MdWifiTethering as Wifi } from 'react-icons/md'

import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export async function HeroBadge() {
  const randomMessages = [
    {
      message: 'Welcome back to our website!',
      icon: <HelloHand className="h-[18px] w-[18px]" />,
    },

    {
      message: 'Check our products!',
      icon: <EmojiFaceHeart className="h-[18px] w-[18px]" />,
    },

    {
      message: 'Try our products combination!',
      icon: <Handshake className="h-[18px] w-[18px]" />,
    },

    {
      message: 'Privacy and security for us are important!',
      icon: <Security className="h-[18px] w-[18px]" />,
    },

    {
      message: 'We are proudly open-source, check our GitHub!',
      icon: <GitHub className="h-[18px] w-[18px]" />,
    },

    {
      message: 'Check our social medias to get closer!',
      icon: <Wifi className="h-[18px] w-[18px]" />,
    },
  ]

  const randomIndex = Math.floor(Math.random() * randomMessages.length)

  return (
    <Badge variant={'outline'} className="mx-auto flex gap-2">
      {randomMessages[randomIndex].icon}
      <Separator orientation={'vertical'} />
      {randomMessages[randomIndex].message}
    </Badge>
  )
}
