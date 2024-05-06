import { Product } from "./product";

export async function Products() {
  const products = [
    {
      name: "Menutree",
      href: "https://menutree.blursed.xyz",
      description:
        "O seu restaurante em um link. Menos papéis, apenas a um QRCode de distância. Junte-se a nós, use menos papéis e compartilhe os seus menus. Vamos ajudar o Planeta para nos ajudarmos.",
      features: ["Privacidade e Segurança", "Ajude o Planeta", "Open-Source"],
    },

    {
      name: "Rosie AI",
      href: "https://discord.com/oauth2/authorize?client_id=1132759106994847766&permissions=8&scope=bot",
      description:
        "Um chatbot amigável que está sempre pronta para conversar e ajudar de forma eficiente.",
      features: [
        "Segurança",
        "Customizável",
        "GPT-3.5-Turbo Powered",
        "Open-Source",
      ],
    },
  ];

  return (
    <section className="border-b bg-gradient-to-b from-gradient to-gradient-foreground px-4 py-6 pb-20 md:px-12 lg:px-4 2xl:px-0">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
          Quais são os nossos produtos?
        </h2>
        <p className="tracking-tight text-muted-foreground">
          Pronto para descobrir mais?
        </p>
      </div>

      <div className="container mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <Product key={product.href} {...product} />
        ))}
      </div>
    </section>
  );
}
