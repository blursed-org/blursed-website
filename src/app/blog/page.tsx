import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PostCard } from './post-card'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <section className="container">
      <div className="flex gap-2 px-4 py-4">
        <Input placeholder="Search an article..." />
        <Button className="flex items-center gap-1" variant={'outline'}>
          <SearchIcon className="h-4 w-4" />
          Search
        </Button>
      </div>

      <div className="px-4">
        <div className="mt-2 grid grid-cols-1 gap-4 pb-20 md:grid-cols-2 lg:grid-cols-[369px_369px_369px]">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
