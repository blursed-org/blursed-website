import { FaInstagram as Instagram } from "react-icons/fa";
import { AiOutlineGithub as GitHub } from "react-icons/ai";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { components } from "@/components/mdx/mdx-components";
import { Separator } from "@/components/ui/separator";
import { TimeLineItem } from "@/components/timeline-item";

export default async function About() {
  const socialMedias = [
    {
      name: "Instagram",
      href: "https://instagram.com/joao.robotmc",
      icon: Instagram,
    },
    {
      name: "GitHub",
      href: "https://github.com/tellay",
      icon: GitHub,
    },
  ];

  const timeLine = [
    {
      date: "2019",
      title: "Bots de Discord",
      description:
        "Em 2019 fico mais curioso sobre o mundo da programação. Atráves de algumas pesquisas descubro a linguagem de programação Javascript, na qual fico super interessado. Decido então aprofundar-me na linguagem e nos Bots de Discord.",
    },

    {
      date: "2020",
      title: "React & Styled Components",
      description:
        "Em 2020 interesso-me pelo desenvolvimento web e descubro o React devido ao meu conhecimento já em Javascript. Por esta altura era também bastante popular o uso de uma biblioteca chamada styled-components para estilizar o website (CSS-in-JS).",
    },
    {
      date: "2021",
      title: "Escola Profissional do Montijo",
      description:
        "Devido ao meu gosto pela tecnologia decido então estudar na Escola Profissional do Montijo. Onde atualmente encontro-me ainda a estudar no curso TGPSI e a concretizar a minha PAP (Prova de Aptidão Profissional).",
    },
    {
      date: "2022",
      title: "Next.js & Tailwind CSS",
      description:
        "Em 2022 contínuo a aprofundar os meus conhecimentos em desenvolvimento web. Utilizo agora maioritariamente a framework Next.js (React) juntamente com Tailwind CSS para estilizar o website atráves de classes utilitárias.",
    },
  ];

  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" /> */}

      <div className="container">
        <div className="px-4 py-10">
          <components.h1>João Gonçalves</components.h1>
          <components.p>
            Olá, sou um apenas um entusiasta da programação, que deseja saber
            mais e mais. Quando não estou a programar, gosto de ouvir e tocar
            música. A minha coisa favorita é ficar em casa a procrastinar.
            <br />
            <br />A maneira mais rápida e fácil de entrar em contato comigo é
            via Discord <strong>@tellay_</strong>
          </components.p>

          <div className="mt-4 flex items-center gap-4 overflow-x-scroll overflowXs:overflow-x-hidden">
            {socialMedias.map((socialMedia) => (
              <Link
                className={buttonVariants({
                  variant: "secondary",
                  className: "flex items-center gap-2 no-underline",
                })}
                key={socialMedia.name}
                href={socialMedia.href}
                target="_blank"
              >
                <socialMedia.icon className="h-5 w-5" />
                {socialMedia.name}
              </Link>
            ))}
          </div>

          <Separator className="my-6" />

          <section className="px-2">
            <components.h3 className="leading-none">
              A minha linha do tempo
            </components.h3>
            <ol className="relative mt-6 border-s">
              {timeLine.map((timeLineItem) => (
                <TimeLineItem
                  key={timeLineItem.title}
                  date={timeLineItem.date}
                  title={timeLineItem.title}
                  description={timeLineItem.description}
                />
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
