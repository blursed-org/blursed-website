'use client'

import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import { Button } from '@/components/ui/button'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={post.slug}
      className="h-full rounded-lg border bg-background p-[6px] shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:scale-[101%] hover:shadow-black/10"
    >
      <div className="flex h-[208px] flex-col justify-between">
        <div className="flex flex-col p-3">
          {/* <Image
              className="h-[200px] rounded-md object-cover"
              src={post.image}
              width={500}
              height={500}
              alt="Unity Image"
            /> */}

          <div className="mt-0 flex items-center">
            <time
              className="text-sm capitalize text-foreground/60"
              dateTime={post.date}
            >
              {format(parseISO(post.date), 'd MMMM yyyy', { locale: pt })}
            </time>
          </div>

          <strong className="mt-2 text-xl font-bold">{post.title}</strong>
          <p className="text-sm">{post.description}</p>

          {/* <Separator className="my-4" /> */}

          {/* <div className="line-clamp-4">
              <Mdx code={post.body.code} />
            </div> */}
        </div>

        <Button
          className="mt-2 w-full opacity-80 transition hover:opacity-100"
          variant={'secondary'}
        >
          Ler Mais
        </Button>
      </div>
    </Link>
  )
}
