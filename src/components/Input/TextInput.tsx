import React from 'react'

type TextInputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: React.HTMLInputTypeAttribute;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className='flex flex-col'>
      <label>{props.label}</label>
      <input
        className='border border-gray-400 rounded-md p-2 mt-1'
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextInput