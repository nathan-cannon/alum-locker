import { Link } from '@inertiajs/react'
import { ShoppingCart, Search, User } from 'lucide-react';

export default function PublicHeader() {
    return (
        <>
            {/* Promotional Banner */}
            <div className="bg-indigo-600 px-4 py-3 text-white text-center text-sm font-medium">
                Get free delivery on orders over $100
            </div>

            {/* Main Navigation */}
            <header className="bg-white">
                <nav className="px-8 sm:px-10 lg:px-12">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="text-2xl text-black font-bold">
                            Alum Locker
                        </Link>

                        {/* Center Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/shop" className="text-md font-medium text-gray-700 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/schools" className="text-md font-medium text-gray-700 hover:text-gray-900">
                                Schools
                            </Link>
                            <Link href="/about" className="text-md font-medium text-gray-700 hover:text-gray-900">
                                About
                            </Link>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center space-x-6">
                            <button className="cursor-pointer text-gray-400 hover:text-gray-500">
                                <User className="h-6 w-6" />
                            </button>

                            <button className="cursor-pointer text-gray-400 hover:text-gray-500">
                                <Search className="h-6 w-6" />
                            </button>

                            <Link href="/cart" className="flex items-center">
                                <ShoppingCart className="h-6 w-6 text-gray-400" />
                                <span className="ml-2 text-sm font-medium text-gray-700">0</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
