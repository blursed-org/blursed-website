import Link from 'next/link'
import Image from 'next/image'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import { IoMdSearch as SearchIcon } from 'react-icons/io'

import { Button } from '@/components/ui/button'

interface PostCardProps {
  post: Post
}

export async function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.url}`}
      className="rounded-lg border p-4 transition hover:translate-y-0.5"
    >
      <Image
        className="h-[250px] rounded-md object-cover"
        src={post.image}
        width={450}
        height={450}
        alt="Unity Image"
      />

      <time
        className="mt-4 block text-sm text-foreground/60"
        dateTime={post.date}
      >
        {format(parseISO(post.date), 'LLLL do, yyyy')}
      </time>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="mt-2 text-sm">
        In this article we will discover what is Unity and what it is capable
        of.
      </p>

      <Button className="mt-4 w-full" variant={'secondary'}>
        Read More
      </Button>
    </Link>
  )
}
