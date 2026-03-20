import axios from '../../utils/axios'   

export const getVideos = async ({search, tags, page}) => {
    const response = await axios.get('/videos',
        {
            params: {
                'search': search,
                'tags[]': tags,
                'page': page
            }
        }
    )

    return response.data
}