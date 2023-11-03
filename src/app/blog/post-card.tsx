'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    isLoading === false && (
      <Link
        href={`/blog/${post.url}`}
        className="h-full rounded-lg border bg-background p-[6px]"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col p-3">
            {/* <Image
              className="h-[200px] rounded-md object-cover"
              src={post.image}
              width={500}
              height={500}
              alt="Unity Image"
            /> */}

            <div className="flex items-center">
              <time className="text-sm text-foreground/60" dateTime={post.date}>
                {format(parseISO(post.date), 'LLLL do, yyyy')}
              </time>
            </div>

            <strong className="mt-2 text-xl font-bold">{post.title}</strong>
            <p className="text-sm">{post.description}</p>

            <Separator className="my-4" />

            <div
              className="over prose prose-sm prose-blue line-clamp-3 text-foreground"
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </div>

          <Button className="mt-2 w-full" variant={'secondary'}>
            Read More
          </Button>
        </div>
      </Link>
    )
  )
}
