import React from "react"
import Link from "next/link"

interface ButtonProps {
  title: string
  disabled?: boolean
  className?: string
  onClick?: () => void
  icon?: React.ReactNode
  href?: string
}

const Button = ({
  title,
  disabled,
  className,
  onClick,
  icon,
  href,
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {title}
      {icon && <span className="mr-2">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}>
      {content}
    </button>
  )
}

export default Button
