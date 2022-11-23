import React from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (

        <nav className='flex justify-center'>
            <ul className="inline-flex items-center -space-x-px ">
                <li className="page-item">
                    <button
                        onClick={() => {
                            paginate(currentPage - 1)
                        }}
                        disabled={currentPage > 1 ? false : true}
                        className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {
                    pageNumbers.map(number => {
                        return (
                            <li key={number}>
                                <button onClick={() => {
                                    paginate(number)
                                }}
                                    className={
                                        `page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300 text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none
                                        ${currentPage === number ? "bg-red-600" : "bg-transparent"}
                                        `}
                                    >{number}</button>
                            </li>
                        )
                    })
                }

                <li className="page-item">
                    <button
                        onClick={() => {
                            paginate(currentPage + 1)
                        }}
                        disabled={currentPage > totalCards-1 ? false : true}
                        className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>

            </ul>
        </nav>

    )
}

export default Pagination