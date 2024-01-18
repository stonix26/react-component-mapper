import React from 'react'

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<
  HTMLInputElement,
  React.PropsWithoutRef<TInputProps>
>(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`border border-slate-500 rounded px-2 ${className}`}
      {...props}
    />
  )
})

export default Input
