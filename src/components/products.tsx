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
    <section className="from-gradient to-gradient-foreground bg-gradient-to-b py-6 pb-[100px]">
      <div className="flex items-center justify-center gap-4">
        <h2 className="from-title to-title-foreground bg-gradient-to-b bg-clip-text text-center text-[32px] font-bold tracking-tighter text-transparent">
          What are our products?
        </h2>
        <p className="text-muted-foreground tracking-tight">
          Try our products combination!
        </p>
      </div>

      <div className="container mt-8 grid grid-cols-2 gap-6">
        {products.map((product) => (
          <>
            <Product key={product.name} {...product} />
          </>
        ))}
      </div>
    </section>
  )
}
