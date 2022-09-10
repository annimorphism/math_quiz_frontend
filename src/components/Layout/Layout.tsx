import React from 'react'

function Layout(props: any) {
  return (
    <div className='h-screen w-full text-xl'>{props.children}</div>
  )
}

export default Layout