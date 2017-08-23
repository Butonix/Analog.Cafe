// tools
import React from "react"
import { NavLink } from "react-router-dom"

// helpers
import { parseHref } from "./helpers"

// return
export default props => {
  // all links within analog.cafe domain should become relative
  let address = parseHref(props.to)

  // external links
  if (address.includes("http"))
    return (
      <a
        href={address}
        target="_blank"
        rel="nofollow noopener noreferrer"
        {...props}
      >
        {props.children}
      </a>
    )
  else if (address.includes("#"))
    // anchor tags
    return (
      <a href={address} {...props}>
        {props.children}
      </a>
    )
  else
    // internal links
    return (
      <NavLink exact to={address} {...props}>
        {props.children}
      </NavLink>
    )
}
