import React from 'react';
import { Trash2 } from 'lucide-react';
import { Persona } from '@/types/ApplicationTypes';

interface PersonaListProps {
  personas: Persona[];
  onDelete: (id: string) => void;
}

export const PersonaList: React.FC<PersonaListProps> = ({ personas, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Your Personas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium dark:text-white">{persona.name}</h3>
              <button
                onClick={() => onDelete(persona.id)}
                className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
            
            <div className="space-y-2">
              {persona.links.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-300">{link.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};