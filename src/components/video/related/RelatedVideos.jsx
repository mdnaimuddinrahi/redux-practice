import { useGetRelatedVideosQuery } from "../../../api/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({id, title}) {

    console.log('id, title :>> ', id, title);
    const {data: relatedVideos, isLoading, isError} = useGetRelatedVideosQuery({id, title},{ skip: !id || !title })
    let content;

    if (isLoading) {
        content = Array.from({ length: 10 }).map((_, index) => (
             <RelatedVideoLoader key={index}/>
        ));
    } else if (isError) {
        console.log('unwanted error')
        content = <Error message="There was an error" />;
    } else if (relatedVideos?.data?.length === 0) {
        console.log('relatedVideos no data found :>> ', relatedVideos.data);
        content = <Error message="No Related video found" />;
    } else {
        content = relatedVideos?.data?.map((video, index) => (
            <RelatedVideo key={index} video={video}/>
        ));
    }
    return (<div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                {content}
            </div>);
}
