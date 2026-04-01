import { Link, useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";
import { useDeleteVideoMutation } from "../../api/apiSlice";
import { useEffect } from "react";
import Error from "../ui/Error";

export default function Description({video}) {
    const [deleteVideo, {data, isLoading, isError, isSuccess, error}] = useDeleteVideoMutation()
    const navigate = useNavigate()
    const handleDelete = () => {
        if(video.id) deleteVideo(video.id)
    }

    useEffect(() => {
        if(isSuccess) navigate('/')
    }, [isSuccess, navigate])
    
    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                {video.title}
            </h1>
            <div className="pb-4 flex items-center space-between border-b gap-4">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {video.updated_at}
                </h2>

                <div className="flex gap-6 w-full justify-end">
                    <div>
                        <Link to={`/videos/edit/${video.id}`}>
                            <div className="flex gap-1">
                                <div className="shrink-0">
                                    <img
                                        className="w-5 block"
                                        src={editImage}
                                        alt="Edit"
                                    />
                                    
                                    <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                                        Edit
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <div className="shrink-0" onClick={handleDelete}>
                            <img
                                className="w-5 block"
                                src={deleteImage}
                                alt="Delete"
                            />
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                            Delete
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                {video.description}
            </div>
            {!isLoading && !isError && <Error message={error}/>}
        </div>
    );
}
