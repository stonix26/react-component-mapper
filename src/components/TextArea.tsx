import React from 'react'

export type TTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.PropsWithoutRef<TTextAreaProps>
>(({ cols = 30, rows = 10, className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      cols={cols}
      rows={rows}
      className={`border border-slate-500 rounded px-2 ${className}`}
      {...props}
    />
  )
})

export default TextArea
