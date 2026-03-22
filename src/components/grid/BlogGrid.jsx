import { Link } from "react-router-dom";


export default function BlogGrid({blog}) {
  // "data": {
  //       "id": 1,
  //       "title": "MERN is the new trend for web development!",
  //       "description": "A MERN stack comprises a collection of four frameworks (MongoDB, ExpressJs, ReactJs and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and secure applications. Each framework serves a different purpose in creating successful web applications. It is an excellent choice for companies looking to develop high-quality responsive applications quickly using just one language. Ready to create a new web application? Yes, then refer to the following articles for a step-by-step guide to configure the frameworks on your local machine.",
  //       "image": "https://crowdbotics.ghost.io/content/images/2019/05/MERN.png",
  //       "tags": [
  //           "javascript",
  //           "nodejs",
  //           "react"
  //       ],
  //       "likes": 8,
  //       "is_saved": 0,
  //       "created_at": "2026-03-20",
  //       "updated_at": "2026-03-20"
  //   }
  const tags = blog.tags.map((tag, index) => (
    <span key={index}>#{tag}{index !== blog.tags.length - 1 && ', '}</span>
  ))
  return (
    <div className="lws-card">
      <Link to={`/blogs/${blog.id}`}>
        <img src={blog.image} className="lws-card-image" alt={blog.title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{blog.created_at}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{blog.likes}</p>
        </div>
        <Link to={`/blogs/${blog.id}`} className="lws-postTitle"> {blog.title} </Link>
        <div className="lws-tags">{tags}</div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {blog.is_saved === 1 ? 'Saved' :'Not Save'} </span>
        </div>
       
      </div>
    </div>
  )
}
