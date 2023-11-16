import { Separator } from '@/components/ui/separator'
import { components } from '@/components/mdx/mdx-components'

export default function PAPPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-2/3 bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />

      <div className="container">
        <div className="mx-auto max-w-[860px] px-4 py-6">
          <components.h1>Referêncial de TGPSI</components.h1>
          <iframe
            className="mt-4 aspect-video w-full rounded-md"
            src="/tgpsi_ref.pdf"
          />

          <Separator className="my-8" />

          <components.h1>Plano de Estágio</components.h1>
          <iframe
            className="mt-4 aspect-video w-full rounded-md"
            src="/plano_estagio.pdf"
          />
        </div>
      </div>
    </div>
  )
}
