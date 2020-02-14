// thin wrapper around hookrouter's A component, that tracks active
import React from 'react'
import { A, usePath } from 'hookrouter'

export default ({ href, className = '', activeClass = 'active', ...rest }) => {
  const path = usePath()
  let c = className
  if (path === href) {
    c += ` ${activeClass}`
  }
  return <A href={href} className={c} {...rest} />
}
