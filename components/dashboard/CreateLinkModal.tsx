import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from '@/types/ApplicationTypes';

interface CreateLinkModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (link: Omit<Link, 'id'>) => void;
}

export const CreateLinkModal: React.FC<CreateLinkModalProps> = ({
    isOpen,
    onClose,
    onCreate,
}) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [icon, setIcon] = useState('globe');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({ title, url, icon });
        setTitle('');
        setUrl('');
        setIcon('globe');
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
            <div className='w-full max-w-md rounded-lg bg-white dark:bg-gray-800'>
                <div className='flex items-center justify-between border-b p-4 dark:border-gray-700'>
                    <h3 className='text-lg font-medium dark:text-white'>
                        Create New Link
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
                            htmlFor='title'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='url'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                            URL
                        </label>
                        <input
                            type='url'
                            id='url'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='icon'
                            className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                        >
                            Icon
                        </label>
                        <select
                            id='icon'
                            value={icon}
                            onChange={(e) => setIcon(e.target.value)}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                        >
                            <option value='globe'>Globe</option>
                            <option value='twitter'>Twitter</option>
                            <option value='github'>GitHub</option>
                            <option value='instagram'>Instagram</option>
                            <option value='linkedin'>LinkedIn</option>
                        </select>
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
