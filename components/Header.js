import React, { useState } from 'react'
import Image from "next/image";
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';
// import { router } from 'next/dist/next-server/server/router';


function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuesets, setNoOfGuests] = useState(1);
    const router = useRouter();

    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const search = () => {
       router.push({
           pathname: "/search",
           query:{
               location: searchInput,
               startDate: startDate.toISOString(),
               endDate: endDate.toISOString(),
               noOfGuesets
           }
       })
    }

    const home = () => {
        router.push("/")
     }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-5 grid  grid-cols-3
        md:px-10">
            
            {/* left */}
            <div  onClick={home} className="relative flex items-center h-10
            cursor-pointer my-auto">
                <Image 
                onClick={home}
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit = "contain"
                objectPosition="left"

                />
            </div>


            {/* middle */}

            <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
               <input 
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value) } className="pl-5 bg-transparent outline-none
               text-gray-600 text-sm flex-grow" type="text" placeholder={placeholder || "Start your Search"} />
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

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}/>
                
                <div className="flex items-center border-b mb-4">
                   <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2> 
                   <UsersIcon className="h-5"/>
                   <input 
                   min={1}
                   value={noOfGuesets}
                   onChange={(e) => setNoOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg outline-none text-red-400" />
                </div>
                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={() => setSearchInput("")}>Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>)}
        </header>
        
    )
}

export default Header
 