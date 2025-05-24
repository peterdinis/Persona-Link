'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreatePersonaModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (name: string) => void;
}

export const CreatePersonaModal: React.FC<CreatePersonaModalProps> = ({
    isOpen,
    onClose,
    onCreate,
}) => {
    const [name, setName] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(name);
        setName('');
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
            <div className='w-full max-w-md rounded-lg bg-white dark:bg-gray-800'>
                <div className='flex items-center justify-between border-b p-4 dark:border-gray-700'>
                    <h3 className='text-lg font-medium dark:text-white'>
                        Create New Persona
                    </h3>
                    <button
                        onClick={onClose}
                        className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4 p-4'>
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                            Persona Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            required
                        />
                    </div>

                    <div className='flex justify-end gap-2'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700'
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
