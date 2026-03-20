import BlogGrid from "../components/grid/BlogGrid";
import Sidebar from "../sidebar/Sidebar"

export default function Home() {
  return (
    <section className="wrapper">
      <Sidebar/>
      <main className="post-container" id="lws-postContainer">
        <BlogGrid/>
        <BlogGrid/>
      </main>
    </section>
  )
}
