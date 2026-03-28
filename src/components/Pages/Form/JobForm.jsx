import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createJobSeek, editInActive, updateJobSeek } from '../../../features/JobList/JobListSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function JobForm() {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [salary, setSalary] = useState('')
  const [deadline, setDeadline] = useState('')
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoading, isError, error} = useSelector((state) => state.jobseeker)
  const editing = useSelector((state) => state.jobseeker.editing)
  const today = new Date().toISOString().split("T")[0];

  const reset = () => {
    setTitle('')
    setType('')
    setSalary('')
    setDeadline('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('object');
    try {
      if (editMode) {
        await dispatch(
          updateJobSeek({
            id: editing.id,
            data: {
              title,
              type,
              salary: Number(salary),
              deadline,
            },
          })
        ).unwrap();

        cancelEditMode();
      } else {
        await dispatch(
          createJobSeek({
            title,
            type,
            salary: Number(salary),
            deadline,
          })
        ).unwrap();
        navigate("/");
      }

      // ✅ Only runs if success
      

    } catch (error) {
      // ❌ Runs if API fails
      console.log('error :>> ', error);
      toast.error("failed", error.message)
    }
  }

  const cancelEditMode = () => {
    setEditMode(false)
    reset()
    dispatch(editInActive())
    navigate("/");
  }

  useEffect(() => {
    const {id, title, type, salary, deadline} = editing || {};
    if (id) {
        setEditMode(true)
        setTitle(title)
        setType(type)
        setSalary(salary)
        setDeadline(deadline)
    } else {
        setEditMode(false)
        reset()
    }
  }, [editing])

  const jobTitles = [
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "DevOps Engineer",
    "QA Engineer",
    "Product Manager",
    "Social Media Manager",
    "Senior Executive",
    "Junior Executive",
    "Android App Developer",
    "IOS App Developer",
    "Frontend Developer",
    "Frontend Engineer",
  ];
  const jobTypes = [
    { value: "full_time", label: "Full Time" },
    { value: "internship", label: "Internship" },
    { value: "remote", label: "Remote" },
  ];

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">
                Job Title
              </label>

              <select
                id="lws-JobTitle"
                value={title} // 👈 this controls selected option
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                required
              >
                <option value="">Select Job</option>

                {jobTitles.map((job, index) => (
                  <option key={index} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>

              <select
                id="lws-JobType"
                value={type} // 👈 controls selected option
                onChange={(e) => setType(e.target.value)}
                name="type"
                required
              >
                <option value="">Select Job Type</option>

                {jobTypes.map((job) => (
                  <option key={job.value} value={job.value}>
                    {job.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input 
                    type="number" 
                    onChange={(e)=> setSalary(e.target.value)} 
                    name="salary" 
                    id="lws-JobSalary" 
                    required 
                    className="!rounded-l-none !border-0"
                    value={salary}
                    placeholder="20,00,000" />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input 
                  type="date" 
                  min={today} 
                  onChange={(e)=> setDeadline(e.target.value)} 
                  name="deadline" 
                  id="lws-JobDeadline"
                  value={deadline} 
                  required />
            </div>

            <div className="text-right">
              <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                {editMode ? 'Update' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
