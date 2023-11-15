import { Mdx } from '@/components/mdx/mdx-components'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { format, parseISO } from 'date-fns'
import { IoMdArrowBack as ArrowBackIcon } from 'react-icons/io'
import { pt } from 'date-fns/locale'

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
    <article className="container py-10">
      <div className="mx-auto max-w-[860px] px-4">
        <div className="mb-8 flex flex-col border-b">
          <Link
            className={buttonVariants({
              variant: 'link',
              className:
                'flex w-fit gap-2 !p-0 text-sm font-normal text-foreground/50 hover:text-foreground/90',
            })}
            // className="flex w-fit items-center gap-2 text-sm font-medium hover:text-foreground/90"
            href="/epm/blog"
          >
            <ArrowBackIcon className="h-4 w-4" />
            Back to blog
          </Link>

          <time
            className="mt-12 block text-sm capitalize text-foreground/60"
            dateTime={post.date}
          >
            {/* {format(parseISO(post.date), 'eeeE, LLLL do, yyyy', { locale: pt })} */}
            {format(parseISO(post.date), 'EEEE, d MMMM yyyy', { locale: pt })}
          </time>

          <h1 className="mb-1 mt-6 text-[clamp(28px,5vw,48px)] font-bold">
            {post.title}
          </h1>
        </div>

        {/* <div className="mx-auto max-w-prose"> */}
        <Mdx code={post.body.code} />
        {/* </div> */}
      </div>
    </article>
  )
}
