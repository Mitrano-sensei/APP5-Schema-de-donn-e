import React from 'react';

interface FormPart {
    title: string;
    type: string;
    options: string[];
}

interface Props {
    options: string[];
}

const FormBox = ({options} : Props) => {

    function createForm(formParts: FormPart[]) {
        return formParts.map(formPart => {
            switch (formPart.type) {
                case 'text':
                    return (
                        <div className='flex-col w-full pt-5 pb-5'>
                            <h1 className='pl-1 pr-3 font-bold'>{formPart.title} : </h1>
                            <div className='flex pl-2 pr-2 w-full'>
                                <input type="text" className='w-full h-20 bg-gray-200 text-black' />
                            </div>
                        </div>
                    );
                case 'select':
                    return (
                        <div className='flex pt-5 pb-5'>
                            <h1 className='pl-1 pr-3 font-bold'>{formPart.title} : </h1>
                            <select className='pl-2 pr-2 text-black'>
                                {formPart.options.map((option, index) => (
                                    <option key={index} value={option} className='text-black'>{option}</option>
                                ))}
                            </select>
                        </div>
                    );
                default:
                    return (
                        <div className='flex-col w-full'>
                            <h1 className='pl-1 pr-3 font-bold'>Text : </h1>
                            <div className='flex pl-2 pr-2 w-full'>
                                <input type="text" className='w-full h-20 bg-gray-200 text-black' />
                            </div>
                        </div>
                    );
            }
        });
    }
    
    const exampleFormParts: FormPart[] = [
        {title: 'Décrit ton plat préféré', type: 'text', options: []},
        {title: 'Choisis ta couleur préférée', type: 'select', options: ['Rouge', 'Bleu', 'Vert']},
    ]; // TODO : Devrait être remplacé par un formProvider qui lirait le XML correspondant à l'option sélectionnée

    return (
        <div className='flex-col w-full'>
            <div className='flex'>
                <h1 className='pl-1 pr-3 font-bold'>Formulaire : </h1>
                <select className='pl-2 pr-2 text-black'>
                    {options.map((option, index) => (
                        <option key={index} value={option} className='text-black'>{option}</option>
                    ))}
                </select>
            </div>

            <form action="">
                {createForm(exampleFormParts)}

                <div className='flex justify-center'>
                    <button className='bg-blue-900 text-white p-2 rounded-lg mt-2'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default FormBox;