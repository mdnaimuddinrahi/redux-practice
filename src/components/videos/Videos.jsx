import { useGetVideosQuery } from "../../api/apiSlice";
import Video from "../videos/Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
    const { data: videos, isLoading, isError } = useGetVideosQuery();

    let content;

    if (isLoading) {
        content = Array.from({ length: 10 }).map((_, index) => (
            <VideoLoader key={index} />
        ));
    } else if (isError) {
        content = <Error message="There was an error" />;
    } else if (videos?.data?.length === 0) {
        content = <Error message="No videos found" />;
    } else {
        content = videos?.data?.map((video) => (
            <Video key={video.id} video={video} />
        ));
    }

    return (
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
        </div>
    );
}