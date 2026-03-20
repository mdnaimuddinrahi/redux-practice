export default function PostDetailsCard() {
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
  return (
    <main className="post">
      <img src="/images/mern.webp" alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          MERN stack for Web Development
        </h1>
        <div className="tags" id="lws-singleTags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <div className="btn-group">
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> 100
          </button>
          <button className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>
            A MERN stack comprises a collection of four frameworks (MongoDB,
            ExpressJs, ReactJs and NodeJs) used to develop full-stack
            javascript solutions for rapid, scalable, and secure applications.
            Each framework serves a different purpose in creating successful
            web applications. It is an excellent choice for companies looking
            to develop high-quality responsive applications quickly using just
            one language.
          </p>
        </div>
      </div>
    </main>
  )
}
