import React from 'react';
import { Trash2 } from 'lucide-react';
import { Persona } from '@/types/ApplicationTypes';

interface PersonaListProps {
    personas: Persona[];
    onDelete: (id: string) => void;
}

export const PersonaList: React.FC<PersonaListProps> = ({
    personas,
    onDelete,
}) => {
    return (
        <div>
            <h2 className='mb-6 text-2xl font-bold dark:text-white'>
                Your Personas
            </h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {personas.map((persona) => (
                    <div
                        key={persona.id}
                        className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'
                    >
                        <div className='mb-4 flex items-center justify-between'>
                            <h3 className='text-lg font-medium dark:text-white'>
                                {persona.name}
                            </h3>
                            <button
                                onClick={() => onDelete(persona.id)}
                                className='p-2 text-gray-400 transition-colors hover:text-red-500 dark:hover:text-red-400'
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>

                        <div className='space-y-2'>
                            {persona.links.map((link) => (
                                <div
                                    key={link.id}
                                    className='flex items-center gap-2 rounded-lg bg-gray-50 p-2 dark:bg-gray-700'
                                >
                                    <span className='text-sm text-gray-600 dark:text-gray-300'>
                                        {link.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
