import React, { useEffect, useState } from 'react'
import Pagination from './pagination';

const Exercises = ({ bodyPart, exercises, setExercises, currentPage, setCurrentPage , searchResult }) => {
    const [cardsPerPage ] = useState(9);
    useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/exercises')
            const data = await response.json()
            const result = searchResult.length ? searchResult : data.filter((exercise) => {
                return exercise.bodyPart === bodyPart ? exercise : ''
            })
            setExercises([...result])
        }
        fetchData()
    }, [bodyPart, setExercises, searchResult])
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = exercises.slice(indexOfFirstCard, indexOfLastCard);
    
    const paginate = (pageNumber)=>{
        window.scrollTo({ top: 1100, left: 100, behavior: 'smooth' });
        setCurrentPage(pageNumber)
    }
    return (
        <div >
           {
            exercises.length || bodyPart ?
            <div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {currentCards.map((exercise) => {
                        return (
                            <div className="rounded overflow-hidden shadow-lg bg-white text-black" key={exercise.id}>
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
                        )
                    })}
                </div>
                <Pagination cardsPerPage={cardsPerPage} totalCards={exercises.length} paginate={paginate} currentPage={currentPage} indexOfFirstCard={indexOfFirstCard} indexOfLastCard={indexOfLastCard}/>
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