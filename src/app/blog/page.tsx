import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

import { IoMdSearch as SearchIcon } from 'react-icons/io'

export default function BlogPage() {
  return (
    <section className="container">
      <div className="flex gap-2 px-4 py-4">
        <Input placeholder="Search an article..." />
        <Button className="flex items-center gap-1" variant={'outline'}>
          <SearchIcon className="h-5 w-5" />
          Search
        </Button>
      </div>

      <div className="px-4">
        <div className="mt-2 grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <Link
              href={`/blog/${idx}`}
              key={idx}
              className="rounded-lg border p-4 transition hover:translate-y-0.5"
            >
              <Image
                className="h-[250px] rounded-md object-cover"
                src="https://yt3.googleusercontent.com/4YAaX7CsQ-paadHsNvC6wdv2nE_7VTKpoNJOTwFhHL4rQqLC8WFe6mNxL-z-e6sfHZbHG-ucPA=s900-c-k-c0x00ffffff-no-rj"
                width={450}
                height={450}
                alt="Unity Image"
              />
              <time className="mt-4 block text-sm font-medium">
                October 26th, 2023
              </time>
              <h3 className="text-xl font-bold">What is Unity?</h3>
              <p className="mt-2 text-sm">
                In this article we will discover what is Unity and what it is
                capable of.
              </p>

              <Button className="mt-2 w-full" variant={'secondary'}>
                Read More
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
