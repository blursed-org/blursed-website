import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { Mdx } from '@/components/ui/mdx-components'
import Link from 'next/link'

import { IoMdArrowBack as ArrowBackIcon } from 'react-icons/io'
import { format, parseISO } from 'date-fns'

interface PageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) notFound()

  return post
}

export default async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params.slug)

  return (
    <article className="container pt-10">
      <div className="px-4">
        <div className="mb-8 flex flex-col border-b">
          <Link
            className="flex w-fit items-center gap-2 text-sm font-medium hover:text-foreground/90"
            href="/blog"
          >
            <ArrowBackIcon className="h-4 w-4" />
            Back to blog
          </Link>

          <time
            className="mt-16 block text-sm text-foreground/60"
            dateTime={post.date}
          >
            {format(parseISO(post.date), 'eeee, LLLL do, yyyy')}
          </time>

          <h1 className="my-6 text-5xl font-bold ">{post.title}</h1>
        </div>

        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
