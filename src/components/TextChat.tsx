import React from 'react';
import ChatItem from './chat/ChatItem';
import SimpleChatItem from './chat/SimpleChatItem';

const TextChat = () => {
    const name = 'My Name : ';
    const content = [
        {
            title: 'Ma première question de formulaire ? ',
            message: 'Ma première réponse'
        },
        {
            title: 'Ma deuxième question de formulaire ?',
            message: 'Ma deuxième réponse'
        }
    ];

    return (
        <div className='divide-y divide-gray-700 scrollbar-hide'>
            <ChatItem name={name} content={content} />
            <ChatItem name={name} content={content} />
            <SimpleChatItem name="Ma Doude" content='Heyoo !' />
        </div>
    );
};

export default TextChat;