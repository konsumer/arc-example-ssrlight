// thin wrapper around hookrouter's A component, that tracks active
import React from 'react'
import { A, usePath } from 'hookrouter'

export default ({ href, className = '', activeClass = 'active', ...rest }) => {
  const path = usePath()
  const c = className.split(' ')
  if (path === href) {
    c.push(activeClass)
  }
  return <A href={href} className={c.join(' ')} {...rest} />
}
