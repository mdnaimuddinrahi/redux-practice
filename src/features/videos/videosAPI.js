import axios from '../../utils/axios'   

export const getVideos = async ({search, tags}) => {
    const response = await axios.get('/videos',
        {
            params: {
                'search': search,
                'tags[]': tags,
            }
        }
    )

    return response.data.data
}