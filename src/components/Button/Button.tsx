import React from 'react'

interface IButtonProps {
  text: string
  onClick?: () => void
}

function Button({ text, onClick }: IButtonProps) {
  text = text || 'Button'
  onClick = onClick || (() => { })
  return (
    <>
      <button onClick={onClick} className='bg-blue-600 text-white rounded-xl px-6 py-2'>{text}</button>
    </>
  )
}

export default Button