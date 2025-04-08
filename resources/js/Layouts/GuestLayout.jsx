import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <>
           <div 
                className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: 
                    "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images')" 
                }}
            >
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-grey/30 backdrop-blur-lg"></div>

                {/* Content (Ensuring it is on top) */}
                <div className="relative z-10 w-full max-w-md p-6 mx-4 sm:p-6 bg-white rounded-lg shadow-md">
                    <div className="flex justify-center mb-4">
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 text-gray-500" />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>

        </>

    );
}
