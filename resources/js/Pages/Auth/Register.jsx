import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="first_name" value="First Name" className="text-gray-300" />
                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="text-gray-300 bg-[#0a0a0a] border-gray-700 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="given-name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />
                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" className="text-gray-300" />
                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="text-gray-300 bg-[#0a0a0a] border-gray-700 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="family-name"
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />
                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" className="text-gray-300" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="text-gray-300 bg-[#0a0a0a] border-gray-700 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" className="text-gray-300" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="text-gray-300 bg-[#0a0a0a] border-gray-700 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-300" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="text-gray-300 bg-[#0a0a0a] border-gray-700 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div>
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>

                <div className="text-center">
                    <Link
                        href={route('login')}
                        className="text-sm text-gray-300 hover:text-orange-500"
                    >
                        Already registered? Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
