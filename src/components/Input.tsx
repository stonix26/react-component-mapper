import React from 'react'

export type TInput = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, React.PropsWithoutRef<TInput>>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`border border-slate-500 rounded px-2 ${className}`}
        {...props}
      />
    )
  }
)

export default Input
