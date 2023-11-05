export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-2/3 bg-gradient-to-b from-gradient-foreground to-gradient"></div>
      {children}
    </div>
  )
}
