import { Product } from './product'

export async function Products() {
  const products = [
    {
      name: 'PapClone',
      href: '/pap-clone',
      description:
        'It is a simple, private, secure and real-time chat. Made with by love by us and our community.',
      features: ['Private and Secure', 'Real-time', 'Open-Source'],
    },

    {
      name: 'Cashing',
      href: '/cashing',
      description:
        'It is your open-source financial control app, empowering you with essential budgeting, expense tracking, and financial management tools to secure your financial future.',
      features: ['Private and Secure', 'Open-Source'],
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
