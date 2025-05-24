import React from 'react';
import { Link as SVGLink } from 'lucide-react';
import { ModeToggle } from '../shared/ModeToggle';
import Link from 'next/link';
import ProfileDropdown from '../auth/ProfileDropdown';

export const DashboardHeader: React.FC = () => {
    return (
        <header className='border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'>
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <Link href='/' className='flex items-center gap-2'>
                        <SVGLink className='h-8 w-8 text-purple-600' />
                        <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-2xl font-bold text-transparent'>
                            Persona Link
                        </span>
                    </Link>

                    <div className='flex items-center gap-4'>
                        <ModeToggle />
                        <div className='flex h-8 w-8 items-center justify-center rounded-full'>
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
