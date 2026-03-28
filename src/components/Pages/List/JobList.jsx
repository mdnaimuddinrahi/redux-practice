import { useDispatch, useSelector } from 'react-redux'
import JobListItem from './JobListItem'
import { useEffect, useState } from 'react'
import { fetchJobList, filterBySearch, filterBySort } from '../../../features/JobList/JobListSlice'

export default function JobList() {
    const dispatch = useDispatch()
    const {jobList, filters, isLoading, isError, error} = useSelector((state) => state.jobseeker)
    useEffect(() => {
        dispatch(fetchJobList(filters))
    }, [dispatch, filters.search, filters.sort_by_salary])
    let content = '';

    if(isLoading) {
        content = <h1 className='lws-section-title'>Loading...</h1>;
    }

    if(!isLoading && isError) {
        content = <h1 className='lws-section-title'>{error}</h1>
    }

    if (!isError && !isLoading && jobList?.length === 0) {
        content = <h1 className='lws-section-title'>No Jobs found</h1>
    }

    if (!isError && !isLoading && jobList?.length > 0) {
        content = jobList.map((job) => <JobListItem key={job.id} job={job}/>)
    }

    return (
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <div className="search-field group flex-1">
                            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                            <input 
                                type="text" 
                                placeholder="Search Job" 
                                name='search' 
                                className="search-input" 
                                id="lws-searchJob"
                                onKeyDown={(e) => dispatch(filterBySearch(e.target.value))}
                            />
                        </div>
                        <select 
                            id="lws-sort" 
                            name="sort" 
                            onChange={(e) => dispatch(filterBySort(e.target.value))}
                            autoComplete="sort" 
                            className="flex-1">
                            <option value="">Default</option>
                            <option value="low">Salary (Low to High)</option>
                            <option value="high">Salary (High to Low)</option>
                        </select>
                    </div>
                </div>
                <div className="jobs-list">
                    {content}
                </div>
            </main>
        </div>
    )
}
