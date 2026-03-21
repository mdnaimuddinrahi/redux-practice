import React, { useEffect } from 'react'
import RelatedBlogListItem from './RelatedBlogListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice'
import Loading from '../ui/Loading'
import ErrorMsg from '../ui/ErrorMsg'


export default function RelatedBlogList({id, tags}) {
  const {relatedBlogs, isLoading, isError, error} = useSelector((state) => state.relatedBlogs)
  console.log('relatedBlogs :>> ', relatedBlogs);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRelatedBlogs({id, tags}))
  }, [dispatch])

  // decide what to render
  let content = '';
  
  if(isLoading) {
      content = <Loading/>;
  }

  if(!isLoading && isError) {
      content = <ErrorMsg text={error}/>
  }

  if(!isError && !isLoading && relatedBlogs?.length === 0) {
      content = <ErrorMsg text={'No blogs found.'}/>
  }

  if(!isError && !isLoading && relatedBlogs?.length > 0) {
      content = relatedBlogs.map((blog) => <RelatedBlogListItem key={blog.id} blog={blog}/>)
  }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {content}
      </div>
    </aside>
  )
}
