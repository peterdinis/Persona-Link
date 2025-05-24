import React from 'react';
import { User, Link as SVGLink } from 'lucide-react';
import { ModeToggle } from '../shared/ModeToggle';
import Link from 'next/link';

export const DashboardHeader: React.FC = () => {

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <SVGLink className="h-8 w-8 text-purple-600" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Persona Link
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                            <User size={20} className="text-purple-600 dark:text-purple-400" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};