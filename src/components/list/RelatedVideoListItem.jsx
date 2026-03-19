import { Link } from 'react-router-dom'

export default function RelatedVideoListItem({video}) {
        // {
        //     "id": 4,
        //     "title": "Debounce Function in JavaScript - JavaScript Job Interview question",
        //     "views": 37,
        //     "published_at": "Jan 06, 2022",
        //     "thumbnail": "https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg",
        //     "duration": "09:27",
        //     "tags": [
        //         "debounce",
        //         "javascript",
        //         "tips"
        //     ],
        //     "match_count": 2
        // },
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={`/videos/${video.id}`}>
                    <img
                        src={video.thumbnail}
                        className="object-cover"
                        alt={video.title}
                    />
                </Link>
                <p
                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    {video.duration}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <Link to={`/videos/${video.id}`}>
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {video.title}
                    </p>
                </Link>
                <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`/videos/${video.id}`}
                >
                    {video.title}
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                    {video.views} views . {video.published_at}
                </p>
            </div>
        </div>
    )
}
