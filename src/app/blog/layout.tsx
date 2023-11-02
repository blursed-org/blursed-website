export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-2/3 bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />
      {children}
    </div>
  )
}
