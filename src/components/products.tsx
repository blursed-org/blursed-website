import { Product } from './product'

export async function Products() {
  const products = [
    {
      name: 'MenuTree',
      href: '/menutree',
      description:
        "Your restaurant in one Link. Less papers, just a QRCode away. Join us, use less papers and share your meals. Let's help the Planet to help us.",
      features: ['Privacy and Security', 'Help the Planet', 'Open-Source'],
    },

    {
      name: 'Rosie AI',
      href: '/rosieai',
      description:
        "Your best friend. Talk to me when your are alone and I will be together with you always. Don't worry to text me any time. I am here for you.",
      features: [
        'Security',
        'Customizable',
        'GPT-3.5-Turbo Powered',
        'Open-Source',
      ],
    },
  ]

  return (
    <section className="border-b bg-gradient-to-b from-gradient to-gradient-foreground px-4 py-6 pb-20 md:px-12 lg:px-4 2xl:px-0">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <h2 className="bg-gradient-to-b from-title to-title-foreground bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
          What are our products?
        </h2>
        <p className="tracking-tight text-muted-foreground">
          Try our products combination!
        </p>
      </div>

      <div className="container mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {products.map((product) => (
          <Product key={product.href} {...product} />
        ))}
      </div>
    </section>
  )
}
