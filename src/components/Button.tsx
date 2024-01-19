import { FC, RefAttributes, forwardRef } from 'react'

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<TButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
  function ButtonPrimitive({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={`bg-slate-200 px-2 rounded ${className}`}
        {...props}
      />
    )
  }
)

export default Button
