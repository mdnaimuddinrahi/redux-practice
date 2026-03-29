import { useParams } from "react-router-dom";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import { useGetRelatedVideosQuery, useGetVideoQuery } from "../../api/apiSlice";
import VideoLoader from '../ui/loaders/VideoLoader'
import RelatedVideoLoader from '../ui/loaders/RelatedVideoLoader'
import Error from "../ui/Error";

export default function Video() {
    const {videoId} = useParams()
    const {data: video, isLoading, isError} = useGetVideoQuery(videoId)
    let content;

    if (isLoading) {
        content = (<div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            <VideoLoader/>
                        </div>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <RelatedVideoLoader key={index}/>
                        ))}
                    </div>)
    } else if (isError) {
        content = <Error message="There was an error" />;
    } else if (!video?.data) {
        content = <Error message="No video found" />;
    } else {
        content = (<div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            <Player link={video.data.link} title={video.data.title}/>
                            <Description video={video.data}/>
                        </div>
                        <RelatedVideos id={video.data.id} title={video.data.title}/>
                    </div>)
    }

    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
}
