import { useDispatch, useSelector } from "react-redux";
import BlogGrid from "../components/grid/BlogGrid";
import Sidebar from "../sidebar/Sidebar"
import { useEffect } from "react";
import Loading from '../components/ui/Loading'
import ErrorMsg from '../components/ui/ErrorMsg'
import { fetchBlogs } from "../features/blogs/blogsSlice"


export default function Home() {
  const dispatch = useDispatch();
  const {blogs, isLoading, isError, error} = useSelector((state) => state.blogs)

  console.log('blogs :>> ', blogs);
  useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

     // decide what to render
    let content = '';

    if(isLoading) {
        content = <Loading/>;
    }

    if(!isLoading && isError) {
        content = <ErrorMsg text={error}/>
    }

    if(!isError && !isLoading && blogs?.length === 0) {
        content = <ErrorMsg text={'No blogs found.'}/>
    }

    if(!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((blog) => <BlogGrid key={blog.id} blog={blog}/>)
    }

  return (
    <section className="wrapper">
      <Sidebar/>
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
    </section>
  )
}
