import classNames from 'classnames'
import React from 'react'

const ProgressBar = ({ pct = 0 }: { pct?: number }) => {
  return (
    <div className="relative w-full bg-gray-400 shadow-lg">
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        Nível de felicidade
      </span>
      <div className="h-8 bg-pgbColor" style={{ width: `${pct}%` }}></div>
    </div>
  )
}

export default ProgressBar
