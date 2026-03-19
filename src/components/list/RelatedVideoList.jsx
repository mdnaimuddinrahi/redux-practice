import React, { useEffect } from 'react'
import RelatedVideoListItem from './RelatedVideoListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/relatedVideo/relatedVideosSlice'
import ErrorMsg from '../ui/ErrorMsg'
import Loading from '../ui/Loading'

export default function RelatedVideoList({id, tags}) {
  const {relatedVideos, isLoading, isError, error} = useSelector((state) => state.relatedVideos)
  // console.log('relatedVideos :>> ', relatedVideos);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchRelatedVideos({id, tags}))
    }, [dispatch])

      // decide what to render
      let content = '';
      
      if(isLoading) {
          content = <Loading/>;
      }
  
      if(!isLoading && isError) {
          content = <ErrorMsg text={error}/>
      }
  
      if(!isError && !isLoading && relatedVideos?.length === 0) {
          content = <ErrorMsg text={'No videos found.'}/>
      }
  
      if(!isError && !isLoading && relatedVideos?.length > 0) {
          content = relatedVideos.map((video) => <RelatedVideoListItem key={video.id} video={video}/>)
      }
  
  return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
           {content}
        </div>
  )
}
