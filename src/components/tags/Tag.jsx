import { useDispatch, useSelector } from "react-redux"
import {tagSelected, tagsRemoved} from '../../features/filter/filterSlice'
import { useEffect } from "react";

export default function Tag({name}) {
  // {
  //   "id": 1,
  //   "name": "javascript"
  // },
  const dispatch = useDispatch();
  const {tags: selectedTags} = useSelector(state => state.filters)
  
  const isSelected = selectedTags.includes(name) ? true : false;
  const style = isSelected ? 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer';
  
  const handleSelect = () => {
    if(isSelected) {
      dispatch(tagsRemoved(name));
    } else {
      dispatch(tagSelected(name));
    }
  }
  
  return (
    <div
      className={style}
      onClick={handleSelect}
    >
      {name}
    </div>
  )
}
