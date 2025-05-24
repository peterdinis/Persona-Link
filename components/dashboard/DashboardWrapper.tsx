'use client';

import React, { FC, useState } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { LinkList } from './LinkList';
import { CreateLinkModal } from './CreateLinkModal';
import { CreatePersonaModal } from './CreatePersonaModal';
import { Settings } from './Settings';
import { initialLinks, initialPersonas } from '@/mockData/mockData';
import { Appearance } from './Apperance';
import { PersonaList } from './PersonalList';
import { DashboardSidebar } from './Sidebar';
import Header from '../shared/Header';
import { DashboardHeader } from './DashboardHeader';

export type Link = {
    id: string;
    title: string;
    url: string;
    icon: string;
};

export type Persona = {
    id: string;
    name: string;
    links: Link[];
};

const DashboardWrapper: FC = () => {
    const [links, setLinks] = useState<Link[]>(initialLinks);
    const [personas, setPersonas] = useState<Persona[]>(initialPersonas);
    const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
    const [isCreatePersonaModalOpen, setIsCreatePersonaModalOpen] =
        useState(false);
    const [activeView, setActiveView] = useState<
        | 'links'
        | 'personas'
        | 'analytics'
        | 'appearance'
        | 'notifications'
        | 'settings'
    >('links');

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setLinks((items) => {
                const oldIndex = items.findIndex(
                    (item) => item.id === active.id,
                );
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handleCreateLink = (newLink: Omit<Link, 'id'>) => {
        const link: Link = {
            ...newLink,
            id: Math.random().toString(36).substr(2, 9),
        };
        setLinks([...links, link]);
        setIsCreateLinkModalOpen(false);
    };

    const handleCreatePersona = (name: string) => {
        const persona: Persona = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            links: [],
        };
        setPersonas([...personas, persona]);
        setIsCreatePersonaModalOpen(false);
    };

    const handleDeleteLink = (id: string) => {
        setLinks(links.filter((link) => link.id !== id));
    };

    const handleDeletePersona = (id: string) => {
        setPersonas(personas.filter((persona) => persona.id !== id));
    };

    const renderContent = () => {
        switch (activeView) {
            case 'links':
                return (
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={links}
                            strategy={verticalListSortingStrategy}
                        >
                            <LinkList
                                links={links}
                                onDelete={handleDeleteLink}
                            />
                        </SortableContext>
                    </DndContext>
                );
            case 'personas':
                return (
                    <PersonaList
                        personas={personas}
                        onDelete={handleDeletePersona}
                    />
                );
            case 'analytics':
                return (
                    <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                        <h2 className='mb-6 text-2xl font-bold dark:text-white'>
                            Analytics
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            Analytics dashboard coming soon...
                        </p>
                    </div>
                );
            case 'appearance':
                return <Appearance />;
            case 'notifications':
                return (
                    <div className='rounded-lg bg-white p-6 dark:bg-gray-800'>
                        <h2 className='mb-6 text-2xl font-bold dark:text-white'>
                            Notifications
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300'>
                            Manage your notifications...
                        </p>
                    </div>
                );
            case 'settings':
                return <Settings />;
            default:
                return null;
        }
    };

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
            <DashboardHeader />
            <div className='flex'>
                <DashboardSidebar
                    activeView={activeView}
                    onChangeView={setActiveView}
                    onCreateLink={() => setIsCreateLinkModalOpen(true)}
                    onCreatePersona={() => setIsCreatePersonaModalOpen(true)}
                />
                <main className='flex-1 p-8'>{renderContent()}</main>
            </div>

            <CreateLinkModal
                isOpen={isCreateLinkModalOpen}
                onClose={() => setIsCreateLinkModalOpen(false)}
                onCreate={handleCreateLink}
            />

            <CreatePersonaModal
                isOpen={isCreatePersonaModalOpen}
                onClose={() => setIsCreatePersonaModalOpen(false)}
                onCreate={handleCreatePersona}
            />
        </div>
    );
};

export default DashboardWrapper;
