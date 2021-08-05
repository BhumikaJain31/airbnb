import React from 'react'
import Image from "next/image";
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from "@heroicons/react/solid";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-5 grid  grid-cols-3
        md:px-10">
            
            {/* left */}
            <div className="relative flex items-center h-10
            cursor-pointer my-auto">
                <Image 
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit = "contain"
                objectPosition="left"

                />
            </div>


            {/* middle */}

            <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
               <input className="pl-5 bg-transparent outline-none
               text-gray-600 text-sm flex-grow" type="text" placeholder="Start your search"/>
               <SearchIcon className="hidden h-8 md:inline-flex bg-red-400 p-2 cursor-pointer
                text-white rounded-full mx-auto md:mx-2"/>
            </div>


            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6" />

                <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UsersIcon className="h-6"/>
                </div>
            </div>
        </header>
        
    )
}

export default Header
 