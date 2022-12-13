import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import BodyPart from "./bodypart"
const Search = ({bodyPart , setBodyPart , bodyParts , setCurrentPage , setSearchResult }) => {
    const [search, setSearch] = useState("")
    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/exercises')
        const data = await response.json()
        const result = data?.filter((exercise)=>{
            return(
                exercise.bodyPart.includes(search)||
                exercise.name.includes(search) ||
                exercise.equipment.includes(search) ||
                exercise.target.includes(search)
            )
        })
        setSearchResult([...result])
        setBodyPart('')
        setSearch('')
    }
    return (
        <div>
            <div className="md:w-1/2 flex mx-auto flex-col">
                <div className='flex text-white justify-start p-5 text-3xl lg:text-5xl 2xl:text-7xl mt-28 mb-10'>
                    Awesome Exercises You<br />Should Know.
                </div>
                <div className="flex justify-center px-4">
                    <div className="relative w-full">
                        <form onSubmit={handleSearch}>
                            <input type="text"
                                className="h-14 w-full 2xl:h-24 pr-8 pl-5 2xl:text-2xl rounded z-0 focus:shadow focus:outline-none text-black"
                                placeholder="Search Exercise..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value.toLocaleLowerCase())
                                }}
                            />
                            <input 
                                type="submit" 
                                value="Submit"
                                className="hidden"
                            />
                                <AiOutlineSearch className="absolute top-5 right-5 text-xl lg:mt-0 2xl:text-4xl 2xl:mt-3 text-gray-400 z-20 hover:text-gray-500" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 p-5 md:mx-auto">
                <div className="flex flex-wrap justify-center">
                    {
                        bodyParts?.map((part , i) => {
                            return (
                                <BodyPart key={i} part={part} bodyPart={bodyPart} setBodyPart={setBodyPart} setCurrentPage={setCurrentPage} setSearchResult={setSearchResult}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search