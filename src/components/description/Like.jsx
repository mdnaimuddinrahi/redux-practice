import React from 'react'

export default function Like() {
  return (
    <div className="flex gap-1">
        <div className="shrink-0">
            <img
                className="w-5 block"
                src="/assets/like.svg"
                alt="Like"
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
