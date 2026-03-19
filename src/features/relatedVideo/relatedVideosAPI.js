import axios from '../../utils/axios'   

export const getRelatedVideos = async ({id, tags}) => {
  const response = await axios.get(
    '/related-videos',
    {
      params: {
        'id': id,
        'tags[]': tags,
      },
    }
  );
console.log('response.data :>> ', response.data.data);
  return response.data.data;
};