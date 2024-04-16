import React from 'react';

interface Props {
    options: string[];
}

const FormBox = ({options} : Props) => {
    return (
        <div className='flex-col w-full'>
            <form action="">
                <div className='flex'>
                    <h1 className='pl-1 pr-3 font-bold'>Formulaire : </h1>
                    <select className='pl-2 pr-2 text-black'>
                        {options.map((option, index) => (
                            <option key={index} value={option} className='text-black'>{option}</option>
                        ))}
                    </select>
                </div>

                <div className='flex-col w-full'>
                    <h1 className='pl-1 pr-3 font-bold'>Text : </h1>
                    <div className='flex pl-2 pr-2 w-full'>
                        <input type="text" className='w-full h-20 bg-gray-200 text-black' />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='bg-blue-900 text-white p-2 rounded-lg mt-2'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default FormBox;