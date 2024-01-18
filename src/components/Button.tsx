import React from 'react'

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithoutRef<TButtonProps>
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
