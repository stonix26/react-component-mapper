import React from 'react'

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithoutRef<TButton>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`bg-slate-200 px-2 rounded ${className}`}
      {...props}
    />
  )
})

export default Button
