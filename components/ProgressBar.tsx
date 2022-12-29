import classNames from 'classnames'
import React from 'react'

const ProgressBar = ({ pct = 0 }: { pct?: number }) => {
  return (
    <div className="relative w-full rounded-2xl bg-gray-400 shadow-lg">
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        Nível de felicidade
      </span>
      <div
        className={classNames('h-8 rounded-full bg-pgbColor', {
          'bg-transparent': pct <= 1,
        })}
        style={{ width: `${pct}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
