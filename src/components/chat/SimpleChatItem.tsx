import React from 'react'

interface Props {
    name: string;
    content: string;
}

function SimpleChatItem({name, content} : Props) {
  return (
    <div className='flex-row h-auto w-full '>
        <h1 className='text-lg font-bold pl-1'>{name}</h1>
        <div className='flex flex-col pl-5'>
          <p className='pl-5 pt-2 pb-4'>{content}</p>
        </div>
    </div>
  )
}

export default SimpleChatItem