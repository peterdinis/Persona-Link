'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    GripVertical,
    Trash2,
    Globe,
    Twitter,
    Github,
    Instagram,
    Linkedin,
} from 'lucide-react';
import { Link } from '@/types/ApplicationTypes';

interface LinkItemProps {
    link: Link;
    onDelete: (id: string) => void;
}

const IconMap = {
    globe: Globe,
    twitter: Twitter,
    github: Github,
    instagram: Instagram,
    linkedin: Linkedin,
};

const SortableLink: React.FC<LinkItemProps> = ({ link, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: link.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const Icon = IconMap[link.icon as keyof typeof IconMap] || Globe;

    return (
        <div
            ref={setNodeRef}
            style={style}
            className='mb-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'
        >
            <div className='flex items-center gap-4'>
                <button className='touch-none' {...attributes} {...listeners}>
                    <GripVertical className='cursor-grab text-gray-400 active:cursor-grabbing' />
                </button>

                <Icon
                    className='text-purple-600 dark:text-purple-400'
                    size={20}
                />

                <div className='flex-1'>
                    <h3 className='font-medium dark:text-white'>
                        {link.title}
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        {link.url}
                    </p>
                </div>

                <button
                    onClick={() => onDelete(link.id)}
                    className='p-2 text-gray-400 transition-colors hover:text-red-500 dark:hover:text-red-400'
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

interface LinkListProps {
    links: Link[];
    onDelete: (id: string) => void;
}

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete }) => {
    return (
        <div>
            <h2 className='mb-6 text-2xl font-bold dark:text-white'>
                Your Links
            </h2>
            <div className='space-y-2'>
                {links.map((link) => (
                    <SortableLink
                        key={link.id}
                        link={link}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};
