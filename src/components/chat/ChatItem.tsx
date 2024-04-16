import React from 'react'

interface ChatContent{
  title: string;
  message: string;
}

interface Props {
    name: string;
    content: ChatContent[];
}

function ChatItem({name, content} : Props) {
  return (
    <div className='flex-row h-auto w-full '>
        <h1 className='text-lg font-bold pl-1 '>{name}</h1>
        <div className='flex flex-col pl-5'>
          {content.map((item, index) => (
            <div key={index}>
              <h1 className='font-bold'>{item.title}</h1>
              <p className='pl-5 pt-2 pb-4'>{item.message}</p>
            </div>
          ))}
        </div>
        

    </div>
  )
}

export default ChatItem