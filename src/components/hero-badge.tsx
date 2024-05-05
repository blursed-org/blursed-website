import { AiOutlineGithub as GitHub } from "react-icons/ai";
import {
  //   FaRegGrinHearts as EmojiFaceHeart,
  PiHandWaving as HelloHand,
} from "react-icons/pi";
import { BsEmojiSmile as EmojiFaceHeart } from "react-icons/bs";

import {
  MdSecurity as Security,
  MdWifiTethering as Wifi,
} from "react-icons/md";

import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export async function HeroBadge() {
  const randomMessages = [
    {
      message: "Bem-vindo(a) de volta ao nosso website.",
      icon: <HelloHand className="h-[18px] w-[18px] shrink-0" />,
    },

    {
      message: "Experimente os nossos produtos!",
      icon: <EmojiFaceHeart className="h-[18px] w-[18px] shrink-0" />,
    },

    {
      message: "Privacidade e segurança são importantes para nós!",
      icon: <Security className="h-[18px] w-[18px] shrink-0" />,
    },

    {
      message: "Somos orgulhosamente open-source, visite o nosso GitHub!",
      icon: <GitHub className="h-[18px] w-[18px] shrink-0" />,
    },

    {
      message: "Passe pelas nossas redes sociais para ficar mais perto!",
      icon: <Wifi className="h-[18px] w-[18px] shrink-0" />,
    },
  ];

  const randomIndex = Math.floor(Math.random() * randomMessages.length);

  return (
    <Badge variant={"background"} className="flex h-full w-full gap-2">
      {randomMessages[randomIndex].icon}
      <Separator orientation={"vertical"} />
      <p className="line-clamp-1">{randomMessages[randomIndex].message}</p>
    </Badge>
  );
}

export const dynamic = "force-dynamic";
