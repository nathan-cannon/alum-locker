import { Link } from '@inertiajs/react'
import { ShoppingCart, Search, User } from 'lucide-react';
import { Input } from '@headlessui/react';

export default function PublicHeader() {
    return (
        <>
            {/* Main Navigation */}
            <header className="sticky top-0 z-50">
                <nav className="bg-amber-800 px-8 sm:px-10 lg:px-12">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo and Search */}
                        <div className="flex items-center gap-6">
                            <Link href="/" className="text-2xl text-white font-bold whitespace-nowrap">
                                Alum Locker
                            </Link>

                            {/* Search Box */}
                            <div className="relative hidden sm:block">
                                <Input
                                    type="text"
                                    placeholder="Search Schools"
                                    className="w-64 lg:w-86 px-4 py-2 pr-10 bg-white border border-gray-600 rounded-sm placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700" />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center space-x-6">
                            <button className="cursor-pointer text-white hover:text-gray-500">
                                <User className="h-6 w-6" />
                            </button>

                            <button className="sm:hidden cursor-pointer text-white hover:text-gray-500">
                                <Search className="h-6 w-6" />
                            </button>

                            <Link href="/cart" className="flex items-center">
                                <ShoppingCart className="h-6 w-6 text-white" />
                                <span className="ml-2 text-sm font-medium text-white">0</span>
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Secondary Navigation with Diagonal Edge */}
                <div className="bg-transparent">
                    <div className="bg-amber-900 px-8 sm:px-10 lg:px-12" style={{clipPath: 'polygon(0 0, 36% 0, 34% 100%, 0 100%)'}}>
                        <div className="flex items-center space-x-8 h-12">
                            <Link href="/" className="text-sm font-medium text-white hover:text-gray-200">
                                Home
                            </Link>
                            <Link href="/shop" className="text-sm font-medium text-white hover:text-gray-200">
                                Shop All
                            </Link>
                            <Link href="/schools" className="text-sm font-medium text-white hover:text-gray-200">
                                Schools
                            </Link>
                            <Link href="/collections" className="text-sm font-medium text-white hover:text-gray-200">
                                Collections and Special Releases
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-white hover:text-gray-200">
                                Our Story
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
