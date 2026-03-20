import { useDispatch, useSelector } from 'react-redux'
import Tag from './Tag'
import { useEffect } from 'react';
import {fetchTags} from '../../features/tags/tagsSlice'
import Loading from '../ui/Loading';
import ErrorMsg from '../ui/ErrorMsg';

export default function Tags() {
    const dispatch = useDispatch();
    const {tags, isError, isLoading, error} = useSelector((state) => state.tags)

    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    // decide what to render
        let content;
        
        if(isLoading) {
            content = <Loading/>;
        }
    
        if(!isLoading && isError) {
            content = <ErrorMsg text={error}/>
        }
    
        if(!isError && !isLoading && tags?.length === 0) {
            content = ''
        }
    
        if(!isError && !isLoading && tags?.length > 0) {
            content = tags.map((tag) => <Tag key={tag.id} name={tag.name}/>)
        }

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {content}
            </div>
        </section>
  )
}
