import React from 'react'
import "./button.scss"

const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export default Button