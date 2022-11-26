import React from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate, indexOfFirstCard , indexOfLastCard, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (

        <nav className='flex justify-center'>
            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing 
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {` ${indexOfFirstCard + 1} `}
                    </span> 
                     to 
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {` ${indexOfLastCard} `}
                    </span>
                     of 
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {` ${totalCards} `}
                    </span> 
                     Entries
                </span>
                
                <div class="inline-flex mt-2 xs:mt-0">
                    <button 
                        onClick={() => {
                            paginate(currentPage - 1)
                        }}
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-l hover:bg-zinc-800">
                        <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        Prev
                    </button>
                    <button 
                        onClick={() => {
                            paginate(currentPage + 1)
                        }}
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 border-0 border-l border-zinc-700 rounded-r hover:bg-zinc-800">
                        Next
                        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>

        </nav>

    )
}

export default Pagination