import { useDispatch, useSelector } from 'react-redux';
import PostDetailsCard from '../components/description/PostDetailsCard'
import RelatedBlogList from '../components/list/RelatedBlogList'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBlog } from '../features/blog/blogSlice';
import Loading from '../components/ui/Loading'
import ErrorMsg from '../components/ui/ErrorMsg'

export default function Details() {
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
        content = (<section className="post-page-container">
                    <PostDetailsCard blog={blog}/>
                    <RelatedBlogList id={blog.id} tags={blog.tags}/>
                  </section>)
    }
  return content;
}
