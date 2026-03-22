import { useDispatch, useSelector } from "react-redux"
import { setIsSaved, setSortBy } from "../features/filter/filterSlice"

export default function Sidebar() {
  const dispatch = useDispatch()
  const {is_saved, sort_by} = useSelector(state => state.filters)

  const handleSortBy = (e) => {
    dispatch(setSortBy(e.target.value))
  }

  const handleFilter = (e) => {
    dispatch(setIsSaved(Number(e.target.value)))
  }

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select name="sort_by" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500" onChange={handleSortBy}>
                <option value="">Default</option>
                <option value="created_at" >Newest</option>
                <option value="likes">Most Liked</option>
            </select>
        </div>
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                <div>
                    <input 
                      value="2" 
                      type="radio" 
                      name="is_saved" 
                      id="lws-all"
                      className="radio"
                      checked={is_saved === 2}
                      onChange={handleFilter}
                      />
                    <label htmlFor="lws-all">All</label>
                </div>
                <div>
                    <input 
                      value="1" 
                      type="radio" 
                      name="is_saved" 
                      id="lws-saved" 
                      className="radio"
                      checked={is_saved === 1}
                      onChange={handleFilter}
                    />
                    <label htmlFor="lws-saved">Saved</label>
                </div>
            </div>
        </div>
      </div>
    </aside>
  )
}
