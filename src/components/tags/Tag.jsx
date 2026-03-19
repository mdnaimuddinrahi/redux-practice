
export default function Tag({name}) {
  // {
  //           "id": 1,
  //           "name": "javascript"
  //       },
  return (
    <div
        className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    >
        {name}
    </div>
                
                // <div
                //     className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                // >
                //     redux
                // </div>
  )
}
