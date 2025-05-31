import React from "react"
import Link from "next/link"

const Button = ({title, className, onClick, icon, href}) => {
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
    <button onClick={onClick} className={className}>
      {content}
    </button>
  )
}

export default Button
