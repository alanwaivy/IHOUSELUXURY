import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#131929] flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex justify-center">
                    <div className="text-3xl font-bold">
                        <span className="text-orange-500">I</span>
                        <span className="text-white">HOUSE</span>{' '}
                        <span className="text-orange-500">LUXURY</span>
                    </div>
                </Link>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-900 py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
