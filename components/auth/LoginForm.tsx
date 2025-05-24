"use client"

import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginUser } from '@/actions/authActions';
import { authClient } from '@/lib/auth-client';

export function Form({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const { userId } = await loginUser({ email, password });

            // Prihlási používateľa cez better-auth
            await authClient.signIn(userId);

            // ⤴️ presmerovanie po prihlásení, napr. na dashboard
            window.location.href = '/dashboard';
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        }
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className='text-2xl'>Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-6'>
                            <div className='grid gap-2'>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='m@example.com'
                                    required
                                />
                            </div>
                            <div className='grid gap-2'>
                                <div className='flex items-center'>
                                    <Label htmlFor='password'>Password</Label>
                                    <a
                                        href='#'
                                        className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id='password'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className='text-sm text-red-500'>{error}</p>}
                            <Button type='submit' className='w-full'>
                                Login
                            </Button>
                            <Button variant='outline' className='w-full' disabled>
                                Login with Google
                            </Button>
                        </div>
                        <div className='mt-4 text-center text-sm'>
                            Don&apos;t have an account?{' '}
                            <a
                                href='/register'
                                className='underline underline-offset-4'
                            >
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

const LoginForm: FC = () => {
    return (
        <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
            <div className='w-full max-w-sm'>
                <Form />
            </div>
        </div>
    );
};

export default LoginForm;
