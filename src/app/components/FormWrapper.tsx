import React from "react"

interface FormWrapperProps {
  className: string
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function FormWrapper({ className, children, onSubmit }: FormWrapperProps) {
  return (
    <div className={"flex items-center justify-center bg-violet-900 " + className}>
      <div className="w-full max-w-md">
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}
