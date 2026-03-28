import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchJobList, filterByType } from '../features/JobList/JobListSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Sidebar() {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const {filters} = useSelector((state) => state.jobseeker)

    useEffect(() => {
        const type = searchParams.get("type");

        if (type) {
            dispatch(filterByType(type));

            dispatch(fetchJobList({
                ...filters,
                type: type, // 👈 use latest value manually
            }));
        }
    }, [searchParams, dispatch]);

    return (
        <div className="sidebar">
        <nav>
            <ul className="space-y-4">
                <li>
                    <Link to="/" className="main-menu menu-active" id="lws-alljobs-menu">
                        <i className="fa-solid fa-briefcase"></i>
                        <span> All Available Jobs</span>
                    </Link>
                    <ul className="space-y-6 lg:space-y-2 ">
                        <li>
                            <Link 
                                className="sub-menu" 
                                to={{
                                    pathname: "/",
                                    search: "?type=internship",
                                }} 
                                id="lws-internship-menu">
                                <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                Internship
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="sub-menu"
                                to={{
                                    pathname: "/",
                                    search: "?type=full_time",
                                }}  
                                id="lws-fulltime-menu">
                                <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                Full Time
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className="sub-menu" 
                                to={{
                                    pathname: "/",
                                    search: "?type=remote",
                                }}
                                id="lws-remote-menu">
                                <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                Remote
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/add-job" className="main-menu" id="lws-addJob-menu">
                        <i className="fa-solid fa-file-circle-plus"></i>
                        <span>Add NewJob</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}
