import { components } from "@/components/mdx/mdx-components";

const files = [
  {
    title: "Referêncial de TGPSI",
    src: "/tgpsi_ref.pdf",
  },

  {
    title: "Plano de Estágio",
    src: "/plano_estagio.pdf",
  },

  {
    title: "Relatório de Estágio 2º Ano",
    src: "/relatorio_estagio2.pdf",
  },

  {
    title: "Relatório de Estágio 3º Ano",
    src: "/relatorio_estagio3.pdf",
  },

  {
    title: "Relatório da PAP",
    src: "/relatorio_pap.pdf",
  },
];

export default function PAPPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-2/3 bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />

      <div className="container">
        <div className="mx-auto flex max-w-[860px] flex-col gap-6 divide-y-[1px] px-4 py-6">
          {files.map((file) => (
            <div key={file.title} className="flex flex-col gap-2">
              <components.h1 className="mt-4 text-3xl">
                {file.title}
              </components.h1>
              <iframe
                className="aspect-video w-full rounded-md"
                src={file.src}
              />
              {/* <Separator className="my-6" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
