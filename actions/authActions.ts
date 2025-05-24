'use server';

import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { actionClient } from '@/lib/safe-action';
import { db } from '@/lib/database';
import { authClient } from '@/lib/auth-client';

const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
});

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const registerUser = actionClient
    .schema(RegisterSchema)
    .action(async ({ parsedInput: { email, password, name } }) => {
        const existing = await db.user.findUnique({ where: { email } });
        if (existing) throw new Error('Email already in use');

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await db.user.create({
            data: {
                email,
                name,
                emailVerified: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        await db.account.create({
            data: {
                id: crypto.randomUUID(),
                accountId: email,
                providerId: 'credentials',
                userId: user.id,
                password: hashedPassword,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        return { userId: user.id };
    });

export const loginUser = actionClient
    .schema(LoginSchema)
    .action(async ({ parsedInput: { email, password } }) => {
        const account = await db.account.findUnique({
            where: {
                accountId_providerId: {
                    accountId: email,
                    providerId: 'credentials',
                },
            },
            include: { user: true },
        });

        if (!account || !account.password) {
            throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(password, account.password);
        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        return { userId: account.user.id };
    });
