import React from 'react'

interface IInputProps {
  placeholder: string
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ placeholder, value, name, onChange }: IInputProps) {
  placeholder = placeholder || 'placeholder'
  value = value || ''
  name = name || 'name'
  onChange = onChange || (() => { })
  return (
    <>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className='rounded-xl border-gray-400 border-2 h-12 text-lg '
        placeholder={placeholder}
        type="text" />
    </>
  )
}

export default Input