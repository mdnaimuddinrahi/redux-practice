import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoGridItem({video}) {
    // {
    //         "id": 1,
    //         "title": "যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন",
    //         "description": "আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ কিছু কনসেপ্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে পড়েন। তাদের জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।",
    //         "author": "Learn with Sumit",
    //         "avatar": "https://avatars.githubusercontent.com/u/73503432?v=4",
    //         "published_at": "2022-05-10",
    //         "duration": "10:12",
    //         "views": 2100,
    //         "video_url": "https://www.youtube-nocookie.com/embed/6O4s7v28nlw",
    //         "thumbnail": "https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg",
    //         "tags": [
    //             "javascript",
    //             "react",
    //             "tips"
    //         ],
    //         "likes": 77,
    //         "unlikes": 44
    //     },
    return (
        <div
            className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
        >
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/${video.id}`}>
                        <img
                            src={video.thumbnail}
                            className="w-full h-auto"
                            alt={video.title}
                        />
                    </Link>

                    <p
                        className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                    >
                        {video.duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <Link to={`/videos/${video.id}`} className="shrink-0">
                        <img
                            src={video.avatar}
                            className="rounded-full h-6 w-6"
                            alt={video.author}
                        />
                    </Link>

                    <div clas="flex flex-col">
                        <a href="video.html">
                            <p
                                className="text-slate-900 text-sm font-semibold"
                            >
                                {video.title}
                            </p>
                        </a>
                        <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                            href="#"
                        >
                            {video.author}
                        </a>
                        <p className="text-gray-400 text-xs mt-1">
                            {video.views} views . {video.published_at}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
