import { Link } from '@inertiajs/react'
import { Button, Input } from '@headlessui/react';
import { Search } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-blue-300">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative px-50 sm:px-52 lg:px-54">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Premium Vintage Jackets
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Officially Licensed Collegiate Jackets & Outerwear
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                {/* Solid White Button */}
                                <Button asChild size="lg" className="cursor-pointer h-10 rounded-md bg-white text-gray-900 hover:bg-gray-100 px-8">
                                    <Link href="/shop">Shop New Collection</Link>
                                </Button>

                                {/* White Outline Search */}
                                <div className="relative w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                                    <Input
                                        type="text"
                                        placeholder="Shop by School"
                                        className="pl-10 h-10 bg-gray-600 rounded-md border-white text-white placeholder:text-gray-300 focus-visible:ring-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
