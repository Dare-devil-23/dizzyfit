import React, { use, useEffect, useState } from 'react'
import Pagination from './pagination';

const Exercises = ({ bodyPart, exercises, setExercises, currentPage, setCurrentPage , searchResult }) => {
    const [cardsPerPage ] = useState(9)
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/exercises')
            const data = await response.json()
            const result = searchResult.length ? searchResult : data?.filter((exercise) => {
                return exercise.bodyPart === bodyPart ? exercise : ''
            })
            setExercises([...result])
        }
        fetchData()
    }, [bodyPart, setExercises, searchResult])

    const paginate = (pageNumber)=>{
        window.scrollTo({ top: 1100, left: 100, behavior: 'smooth' });
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
        return () => setLoading(true);
      }, [bodyPart, searchResult, currentPage]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = exercises?.slice(indexOfFirstCard, indexOfLastCard);
    
    
    return (
        <div >
           {
            exercises?.length || bodyPart ?
            <div>
                <Pagination cardsPerPage={cardsPerPage} totalCards={exercises?.length} paginate={paginate} currentPage={currentPage} indexOfFirstCard={indexOfFirstCard} indexOfLastCard={indexOfLastCard}/>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {currentCards?.map((exercise) => {
                        return (
                            <div key={exercise.id}>
                            {
                                loading ? <>
                                        <div role="status" className="p-4 max-w-sm rounded border border-zinc-600 shadow animate-pulse md:p-6 ">
                                            <div className="flex justify-center items-center mb-4 h-48 rounded bg-zinc-800">
                                                <svg className="w-12 h-12 text-zinc-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                            </div>
                                            <div className="h-2.5 rounded-full bg-zinc-800 w-48 mb-4"></div>
                                            <div className="h-2 rounded-full bg-zinc-800 mb-2.5"></div>
                                            <div className="h-2 rounded-full bg-zinc-800 mb-2.5"></div>
                                            <div className="h-2 rounded-full bg-zinc-800"></div>
                                            <div className="flex items-center mt-4 space-x-3">
                                                <div>
                                                    <div className="h-2.5 rounded-full bg-zinc-700 w-32 mb-2"></div>
                                                </div>
                                            </div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                </> :
                                    <div className="rounded md:h-full overflow-hidden shadow-lg bg-white text-black" key={exercise.id}>
                                    <img className="w-full" src={exercise.image} alt={exercise.name} />

                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{exercise.name}</div>
                                        <p className="text-gray-700 text-base">
                                            {exercise.name} can be done using {exercise.equipment}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{exercise.target}
                                        </span>
                                    </div>
                                </div>
                            }
                            </div>
                        )
                    })}
                </div>
                <Pagination cardsPerPage={cardsPerPage} totalCards={exercises?.length} paginate={paginate} currentPage={currentPage} indexOfFirstCard={indexOfFirstCard} indexOfLastCard={indexOfLastCard}/>
            </div>:
            <div className='h-fit justify-center flex flex-col items-center'>
                <img src='/no-exercises.svg' alt='notfound' className='p-10'/>
                <h1 className='text-2xl p-5'>There are no exercises</h1>
                <h2 className='opacity-50 px-10'>Search example : pull-up (or) chest (or) body weight etc.</h2>
            </div>
           }
        </div>
    )
}

export default Exercises