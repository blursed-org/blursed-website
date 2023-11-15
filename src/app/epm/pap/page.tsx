import { Separator } from '@/components/ui/separator'

export default function PAPPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-2/3 bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />

      <div className="container">
        <div className="mx-auto max-w-[860px] px-4 py-6">
          <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-[24px] font-bold leading-none tracking-tighter text-transparent">
            Referêncial de TGPSI
          </h2>
          <iframe
            className="mt-4 aspect-video w-full rounded-md"
            src="/tgpsi_ref.pdf"
          />

          <Separator className="my-8" />

          <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-[24px] font-bold leading-none tracking-tighter text-transparent">
            Plano de Estágio
          </h2>
          <iframe
            className="mt-4 aspect-video w-full rounded-md"
            src="/plano_estagio.pdf"
          />
        </div>
      </div>
    </div>
  )
}
