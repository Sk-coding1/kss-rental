import React from 'react'

export default function Footer() {
    return (
        <div>


            <footer class="bg-white shadow">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                            <span class="self-center text-xl font-semibold whitespace-nowrap text-blue-700">KSS RENTAL</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center">© 2024 <a href="/" class="hover:underline">KSS Rental</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}
