import { AiOutlineGithub as GitHub } from 'react-icons/ai'
import {
  MdOutlineMoneyOffCsred as NoMoney,
  MdSecurity as Security,
} from 'react-icons/md'
import { Feature } from './feature'

export interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

export async function WhoWeAre() {
  const orgFeatures: Feature[] = [
    {
      title: 'Open-Source',
      description:
        'Todos os nossos produtos são open-source, passe pelo nosso repositório no GitHub e contribua!',
      icon: <GitHub className="h-8 w-8 shrink-0" />,
    },

    {
      title: 'Privacidade e Segurança',
      description:
        'Nós provemos uma experiência segurança e privada. Se notar algo errado, diga-nos. Nos vamos corrigir!',
      icon: <Security className="h-8 w-8 shrink-0" />,
    },

    {
      title: 'Sem Pagamentos',
      description:
        'Somos totalmente de graça, não temos anúncios nem subscrições.',
      icon: <NoMoney className="h-8 w-8 shrink-0" />,
    },
  ]

  return (
    <div className="bg-radialGradient px-4 py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
            Quem somos e o que fazemos?
          </h2>

          <p className="mt-8 max-w-2xl text-center text-base font-normal text-muted-foreground">
            Blursed é uma organização sem fins lucrativos. Acreditamos no poder
            da internet e dos projetos open-source. Achamos que a web deve ser
            grátis, privada e um local seguro para nós todos!
          </p>

          <div className="mt-8 flex w-full flex-col">
            {orgFeatures.map((feature) => (
              <Feature key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
