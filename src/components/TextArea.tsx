import React from 'react'

export type TTextArea = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.PropsWithoutRef<TTextArea>
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
