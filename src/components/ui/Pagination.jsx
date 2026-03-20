import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading';
import ErrorMsg from './ErrorMsg';
import { fetchVideos } from '../../features/videos/videoSlice';

export default function Pagination() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {pagination, isLoading, isError, error} = useSelector(state => state.videos)
    const {tags, search} = useSelector(state => state.filters)
    useEffect(() => {
        dispatch(fetchVideos({ search, tags, page }));
    }, [dispatch, search, tags, page]);
    const handlePageChange = (page) => {
        setPage(page);
    };

    let content = '';

    if(isLoading) {
        content = <Loading/>;
    }

    if(!isLoading && isError) {
        content = <ErrorMsg text={error}/>
    }

    if(!isError && !isLoading && pagination.lastPage <= 1) {
        content = ''
    }

    if (!isError && !isLoading && pagination.lastPage > 1) {
        
        content = Array(pagination.lastPage).fill().map((_, index) => {
            const pageNumber = index + 1;
            const isCurrentPage = pagination.currentPage === pageNumber
            const currentPageClass = isCurrentPage ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600' 

            return (
                <button
                    key={pageNumber}
                    className={`${currentPageClass} px-4 py-1 rounded-full`}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={isCurrentPage}
                >
                    {pageNumber}
                </button>
            );
        });
    }

    return (
        <section className="pt-12">
                <div
                    className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
                >
                    {content}
                </div>
            </section>
    )
}
