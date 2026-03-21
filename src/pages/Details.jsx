import PostDetailsCard from '../components/description/PostDetailsCard'
import RelatedBlogList from '../components/list/RelatedBlogList'
export default function Details() {
  
  return (
    <section className="post-page-container">
      <PostDetailsCard/>
      <RelatedBlogList/>
    </section>
  )
}
