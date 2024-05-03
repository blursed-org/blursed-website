import { Header } from "@/components/header";

export default async function EPMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <Header />
      {/* <div className="absolute inset-0 -z-10 h-2/3 bg-gradient-to-b from-gradient-foreground to-gradient"></div> */}
      {children}
    </div>
  );
}
