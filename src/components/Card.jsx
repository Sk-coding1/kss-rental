import React from 'react'

export default function Card() {
    return (
        <div>
            <div className='my-9'>
                <h5 className='text-gray-500 text-xs font-semibold ml-6'>Popular Car</h5>
                <div className='flex flex-wrap justify-between'>
                    <div className="lg:w-[calc(25%-1rem)] md:w-[calc(33%)] w-full bg-white border border-gray-200 rounded-lg shadow px-5 py-5 my-5">
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Vehicle Name</h3>
                                <p className='text-xs text-gray-500 font-semibold'>Category</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            {/* Disabled like */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                        </div>
                        <a href="/details">
                            <img className="p-5 my-6 rounded-t-lg" src="../public/assets/vehicles/car/car2.png" alt="vehicle image" />
                        </a>
                        <div>
                            <div className="flex items-center mt-2.5 mb-5 justify-center">
                                <div className="flex justify-between w-full text-gray-500">
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/gas-station.svg" alt="" className='w-3' />
                                        <p className='text-xs'>90L</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/car.svg" alt="" className='w-3' />
                                        <p className='text-xs'>Manual</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/user.svg" alt="" className='w-3' />
                                        <p className='text-xs'>2 People</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className=" font-bold text-gray-900 text-[14px] ">$99.00/<span className='text-gray-500 text-xs'>day</span> </span>
                                <a href="/booking" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-xs px-3 py-2 text-center ">Rent Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[calc(25%-1rem)] md:w-[calc(33%)] w-full bg-white border border-gray-200 rounded-lg shadow px-5 py-5 my-5">
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Xiaomi Mi Scooter</h3>
                                <p className='text-xs text-gray-500 font-semibold'>Electric Scooter</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            {/* Disabled like */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                        </div>
                        <a href="/details">
                            <img className="p-5 my-6 rounded-t-lg w-[200px]" src="https://images.frandroid.com/wp-content/uploads/2021/07/xiaomi-mi-electric-scooter-3-frandroid-2021.png" alt="vehicle image" />
                        </a>
                        <div>
                            <div className="flex items-center mt-2.5 mb-5 justify-center">
                                <div className="flex justify-between w-full text-gray-500">
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/gas-station.svg" alt="" className='w-3' />
                                        <p className='text-xs'>90L</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/car.svg" alt="" className='w-3' />
                                        <p className='text-xs'>Manual</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/user.svg" alt="" className='w-3' />
                                        <p className='text-xs'>2 People</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className=" font-bold text-gray-900 text-[14px] ">$99.00/<span className='text-gray-500 text-xs'>day</span> </span>
                                <a href="/booking" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-xs px-3 py-2 text-center ">Rent Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[calc(25%-1rem)] md:w-[calc(33%)] w-full bg-white border border-gray-200 rounded-lg shadow px-5 py-5 my-5">
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Nissan Leaf</h3>
                                <p className='text-xs text-gray-500 font-semibold'>Electric Car</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            {/* Disabled like */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                        </div>
                        <a href="/details">
                            <img className="p-5 my-6 rounded-t-lg w-[550px]" src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/leaf/2023/overview/mini-exterior-360/xbj/08.png" alt="vehicle image" />
                        </a>
                        <div>
                            <div className="flex items-center mt-2.5 mb-5 justify-center">
                                <div className="flex justify-between w-full text-gray-500">
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/gas-station.svg" alt="" className='w-3' />
                                        <p className='text-xs'>90L</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/car.svg" alt="" className='w-3' />
                                        <p className='text-xs'>Manual</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/user.svg" alt="" className='w-3' />
                                        <p className='text-xs'>2 People</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className=" font-bold text-gray-900 text-[14px] ">$99.00/<span className='text-gray-500 text-xs'>day</span> </span>
                                <a href="/booking" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-xs px-3 py-2 text-center ">Rent Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[calc(25%-1rem)] md:w-[calc(33%)] w-full bg-white border border-gray-200 rounded-lg shadow px-5 py-5 my-5">
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='font-bold'>Specialized Turbo Vado</h3>
                                <p className='text-xs text-gray-500 font-semibold'>Electric Bike</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-500">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            {/* Disabled like */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                        </div>
                        <a href="/details">
                            <img className="p-5 my-6 rounded-t-lg" src="https://bedste-elcykel.dk/wp-content/uploads/2022/09/Specialized-Turbo-Vado-4.0-Step-Through-2022-Brun.png" alt="vehicle image" />
                        </a>
                        <div>
                            <div className="flex items-center mt-2.5 mb-5 justify-center">
                                <div className="flex justify-between w-full text-gray-500">
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/gas-station.svg" alt="" className='w-3' />
                                        <p className='text-xs'>90L</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/car.svg" alt="" className='w-3' />
                                        <p className='text-xs'>Manual</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img src="../public/assets/icons/user.svg" alt="" className='w-3' />
                                        <p className='text-xs'>2 People</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className=" font-bold text-gray-900 text-[14px] ">$99.00/<span className='text-gray-500 text-xs'>day</span> </span>
                                <a href="/booking" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-xs px-3 py-2 text-center ">Rent Now</a>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    )
}
