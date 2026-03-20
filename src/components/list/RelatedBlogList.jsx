import React from 'react'
import RelatedBlogListItem from './RelatedBlogListItem'

export default function RelatedBlogList() {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        <RelatedBlogListItem/>
        <RelatedBlogListItem/>
      </div>
    </aside>
  )
}
