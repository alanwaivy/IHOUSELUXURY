import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Dashboard({ cars, brands }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        type: 'car',
        brand_id: '',
        model: '',
        year: '',
        price: '',
        name: '', // for brand
        description: '', // for brand
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = formData.type === 'car' ? '/cars' : '/brands';
        router.post(endpoint, formData, {
            onSuccess: () => {
                setIsModalOpen(false);
                setFormData({
                    type: 'car',
                    brand_id: '',
                    model: '',
                    year: '',
                    price: '',
                    name: '',
                    description: '',
                });
            },
        });
    };

    const handleDelete = (id, type) => {
        if (confirm('Are you sure you want to delete this item?')) {
            router.delete(`/${type}/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Cars Section */}
                        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold text-white">Cars</h3>
                                    <button
                                        onClick={() => {
                                            setFormData({ ...formData, type: 'car' });
                                            setIsModalOpen(true);
                                        }}
                                        className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-300"
                                    >
                                        Add Car
                                    </button>
                                </div>

                                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                                    <table className="min-w-full divide-y divide-gray-800">
                                        <thead className="bg-gray-900 sticky top-0">
                                            <tr>
                                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300">Brand</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Model</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Year</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Price</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {cars?.map((car) => (
                                                <tr key={car.id} className="hover:bg-gray-800 transition-colors duration-200">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-300">{car.brand?.name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{car.model}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{car.year}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">${car.price}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                        <button
                                                            onClick={() => handleDelete(car.id, 'cars')}
                                                            className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Brands Section */}
                        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold text-white">Brands</h3>
                                    <button
                                        onClick={() => {
                                            setFormData({ ...formData, type: 'brand' });
                                            setIsModalOpen(true);
                                        }}
                                        className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-300"
                                    >
                                        Add Brand
                                    </button>
                                </div>

                                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                                    <table className="min-w-full divide-y divide-gray-800">
                                        <thead className="bg-gray-900 sticky top-0">
                                            <tr>
                                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300">Name</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Description</th>
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {brands?.map((brand) => (
                                                <tr key={brand.id} className="hover:bg-gray-800 transition-colors duration-200">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-300">{brand.name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{brand.description}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                        <button
                                                            onClick={() => handleDelete(brand.id, 'brands')}
                                                            className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add/Edit Modal */}
            <Transition.Root show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setIsModalOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <form onSubmit={handleSubmit}>
                                        {formData.type === 'car' ? (
                                            <>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Brand</label>
                                                    <select
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.brand_id}
                                                        onChange={(e) => setFormData({ ...formData, brand_id: e.target.value })}
                                                        required
                                                    >
                                                        <option value="">Select a brand</option>
                                                        {brands?.map((brand) => (
                                                            <option key={brand.id} value={brand.id}>
                                                                {brand.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Model</label>
                                                    <input
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.model}
                                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Year</label>
                                                    <input
                                                        type="number"
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.year}
                                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Price</label>
                                                    <input
                                                        type="number"
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.price}
                                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Name</label>
                                                    <input
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-300">Description</label>
                                                    <textarea
                                                        className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-gray-300 sm:text-sm"
                                                        value={formData.description}
                                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </>
                                        )}
                                        <div className="mt-6 flex justify-end space-x-3">
                                            <button
                                                type="button"
                                                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none"
                                                onClick={() => setIsModalOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </AuthenticatedLayout>
    );
}
