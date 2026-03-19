import { useEffect } from 'react'
import Player from '../components/description/Player'
import VideoDescription from '../components/description/VideoDescription'
import RelatedVideoList from '../components/list/RelatedVideoList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideo } from '../features/video/videoSlice'
import { useParams } from 'react-router-dom'
import Loading from '../components/ui/Loading'
import ErrorMsg from '../components/ui/ErrorMsg'

export default function Video() {
  const {video, isLoading, isError, error} = useSelector((state) => state.video)

  const dispatch = useDispatch();
  const {videoId} = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId))
  }, [dispatch, videoId])

   // decide what to render
      let content = '';
      
      if(isLoading) {
          content = <Loading/>;
      }
  
      if(!isLoading && isError) {
          content = <ErrorMsg text={error}/>
      }
  
      if(!isError && !isLoading && !video?.id ) {
          content = <ErrorMsg text={'No videos found.'}/>
      }
  
      if(!isError && !isLoading && video?.id) {
          // content = videos.map((video) => <VideoGridItem key={video.id} video={video}/>)
          content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
              <div className="col-span-full w-full space-y-8 lg:col-span-2">
                  <Player url={video.video_url} title={video.title}/>
                  <VideoDescription video={video}/>
              </div>
              <RelatedVideoList id={video.id} tags={video.tags}/>
            </div> 
          )
      }
  
  return (
    <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
    </section>
  )
}
