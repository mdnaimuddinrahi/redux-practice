import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ui/ErrorMsg";
import Loading from "../ui/Loading";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchBlog } from "../../features/blog/blogSlice";

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
  const {blog, isLoading, isError, error} = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const {blogId} = useParams();

  console.log('blogId :>> ', blogId);

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  }, [dispatch])

   // decide what to render
    let content = '';
    
    if(isLoading) {
        content = <Loading/>;
    }

    if(!isLoading && isError) {
        content = <ErrorMsg text={error}/>
    }

    if(!isError && !isLoading && !blog?.id ) {
        content = <ErrorMsg text={'No video found.'}/>
    }

    if(!isError && !isLoading && blog?.id ) {
      const tags = blog.tags.map((tag, index) => (
          <span key={index}>#{tag}{index !== blog.tags.length - 1 && ', '}</span>
        ))
        content = (<main className="post">
                      <img src={blog.image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
                      <div>
                        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                          {blog.title}
                        </h1>
                        <div className="tags" id="lws-singleTags">{tags}</div>
                        <div className="btn-group">
                          <button className="like-btn" id="lws-singleLinks">
                            <i className="fa-regular fa-thumbs-up"></i> {blog.likes}
                          </button>
                          <button className="active save-btn" id="lws-singleSavedBtn">
                            <i className="fa-regular fa-bookmark"></i> {blog.is_saved === 1 ? 'Not Save' : 'Saved'}
                          </button>
                        </div>
                        <div className="mt-6">
                          <p>{blog.description}</p>
                        </div>
                      </div>
                    </main>)
                    }
  return content;
}
