import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Userbar = () => {
    return (
        <div className="w-full min-h-12 max-h-16 flex items-center">
            
            <UserCircleIcon className='h-10 pl-2 pr-2'/>
            
            <h1 className='text-xl font-bold'>
                Ma Doude
            </h1>
        </div>
    );
};

export default Userbar;