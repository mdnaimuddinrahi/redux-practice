import React from 'react'

export default function UnLike() {
  return (
    <div className="flex gap-1">
        <div className="shrink-0">
            <img
                className="w-5 block"
                src="./assets/unlike.svg"
                alt="Unlike"
            />
        </div>
        <div
            className="text-sm leading-[1.7142857] text-slate-600"
        >
            100K
        </div>
    </div>
  )
}
