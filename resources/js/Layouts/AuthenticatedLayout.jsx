import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-[#131929]">
            {/* Simple header with user info and logout */}
            <div className="bg-gray-900 shadow">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="text-white text-2xl font-bold">
                            <span className="text-white">LUXURY</span> <span className="text-orange-500">AUTO</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-300">{user.first_name} {user.last_name}</span>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {header && (
                <header className="bg-gray-900 shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="text-xl font-semibold text-white">
                            {header}
                        </div>
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
