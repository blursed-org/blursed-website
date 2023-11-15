export default function PAPPage() {
  return (
    <div className="h-2/3 bg-gradient-to-b from-gradient-foreground to-gradient">
      <div className="container">
        <div className="p-4">
          <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-[32px] font-bold tracking-tighter text-transparent">
            Referêncial de TGPSI
          </h2>
          <iframe
            className="mt-2 aspect-video w-full rounded-md"
            src="/tgpsi_ref.pdf"
          />
        </div>
      </div>
    </div>
  )
}
