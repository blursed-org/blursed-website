'use client'

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { PostCard } from './_components/post-card'

export default function BlogPage() {
  const [search, setSearch] = useState('')

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  const filteredPosts =
    search.length > 0
      ? posts.filter(
          (post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase()),
        )
      : posts

  return (
    <section className="container">
      <div className="absolute inset-0 -z-10 h-2/3 bg-[url('../../public/grid-light.svg')] bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('../../public/grid-dark.svg')]" />

      <div className="p-4">
        <Input
          placeholder="Search an article..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="px-4">
        <div className="mt-2 grid grid-cols-1 gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
