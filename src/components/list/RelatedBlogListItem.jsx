import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedBlogListItem({blog}) {

  const tags = blog.tags.map((tag, index) => (
      <span key={index}>#{tag}{index !== blog.tags.length - 1 && ', '}</span>
    ))
  return (
    <div className="card">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
       <Link to={`/blogs/${blog.id}`} className="text-lg post-title lws-RelatedPostTitle">
            {blog.title}
        </Link>
        <div className="mb-0 tags">{tags}</div>
        <p>{blog.created_at}</p>
      </div>
    </div>
  )
}
