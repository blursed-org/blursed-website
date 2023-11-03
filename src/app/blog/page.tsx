'use client'

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PostCard } from './post-card'
import { useState } from 'react'

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
    <section className="container relative">
      <div className="flex gap-2 px-4 py-4">
        <Input
          placeholder="Search an article..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="flex items-center gap-1" variant={'outline'}>
          <SearchIcon className="h-4 w-4" />
          Search
        </Button>
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
