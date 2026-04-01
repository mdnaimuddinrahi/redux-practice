import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from '../ui/Success'
import Error from '../ui/Error'
import { useState } from "react";
import { useEditVideoMutation } from "../../api/apiSlice";

export default function Form({video}) {
    const [editVideo, {isLoading, isError, isSuccess, error}] = useEditVideoMutation();

    const [title, setTitle] = useState(video.title)
    const [description, setDescription] = useState(video.description)
    const [author, setAuthor] = useState(video.author)
    const [published_at, setPublishedAt] = useState(video.updated_at)
    const [duration_seconds, setDurationSeconds] = useState(video.duration_seconds)
    const [views, setViews] = useState(video.views)
    const [thumbnail, setThumbnail] = useState(video.thumbnail)
    const [link, setLink] = useState(video.link)

    const handleSubmit = (e) => {
        e.preventDefault()
        editVideo({
            id: video.id,
            data: {
                title,
                description,
                author,
                published_at,
                duration_seconds,
                views,
                thumbnail,
                link,
            }
        })
    }

    return (
            <form onSubmit={handleSubmit} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <TextInput 
                                    title="Video Title" 
                                    name="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
    
                            <div className="col-span-6 sm:col-span-3">
                                <TextInput 
                                    title="Author" 
                                    name="author"
                                    onChange={(e) => setAuthor(e.target.value)}
                                    value={author}
                                />
                            </div>
    
                            <div className="col-span-6">
                                <TextArea 
                                    title="Description"
                                    name="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                />
                            </div>
    
                            <div className="col-span-6">
                                <TextInput 
                                    title="YouTube Video link" 
                                    name="link"
                                    onChange={(e) => setLink(e.target.value)}
                                    value={link}
                                />
                            </div>
    
                            <div className="col-span-6">
                                <TextInput 
                                    title="Thumbnail link" 
                                    name="thumbnail"
                                    onChange={(e) => setThumbnail(e.target.value)}
                                    value={thumbnail}
                                />
                            </div>
    
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <TextInput 
                                    title="Upload Date"
                                    type="date"
                                    name="published_at"
                                    onChange={(e) => setPublishedAt(e.target.value)}
                                    value={published_at}
                                />
                            </div>
    
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <TextInput 
                                    title="Video Duration"
                                    type="number"
                                    name="duration_seconds"
                                    onChange={(e) => setDurationSeconds(e.target.value)}
                                    value={duration_seconds}
                                />
                            </div>
    
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <TextInput 
                                    title="Video no of views" 
                                    type="number"
                                    name="views"
                                    onChange={(e) => setViews(e.target.value)}
                                    value={views}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
    
                    {isSuccess && <Success message="Video was updated successfully" /> }
                    {isError && <Error message={error} /> }
                </div>
            </form>
        );
}
