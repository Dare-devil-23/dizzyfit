import React , { useState , useEffect} from 'react'
import { motion } from "framer-motion"
import FlowText from './components/flowtext'
import Search from './components/search'
import Exercises from './components/exercises'
const bodyParts = [
  'waist',
  'back',
  'lower legs',
  'chest',
  'upper legs',
  'upper arms',
  'cardio',
  'shoulders',
  'lower arms'
];

const LandingPage = () => {
  const [bodyPart, setBodyPart] = useState(bodyParts[0])
  const [exercises , setExercises] = useState([])
  const [currentPage, setCurrentPage]  = useState(1)
  const [searchResult, setSearchResult] = useState([])
  return (
    <div className='w-full min-h-screen'>
      <video src='/dailyworkout.mp4' autoPlay loop muted className='w-full h-screen object-cover' />
      <div className='w-full h-screen top-0 left-0 absolute bg-black/30'> </div>
      <motion.div
        className='
          md:w-full
          h-screen 
          absolute 
          text-white 
          top-0 
          flex flex-col justify-start m-5 my-20
          py-10 md:py-0
          md:justify-center md:m-0
          items-start md:items-center'

        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1 className='text-[70px] md:text-[100px] 2xl:text-[170px]'><span className='text-red-600'>W</span>orkout <span className='text-red-600'>D</span>aily</h1>
        <p className='my-5 text-xl 2xl:text-2xl'>Because, it is another day to become better!</p>
      </motion.div>
      <FlowText />
      <Search bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts={bodyParts} setCurrentPage={setCurrentPage} searchResult={searchResult} setSearchResult={setSearchResult}/>
      <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} currentPage={currentPage} setCurrentPage={setCurrentPage} searchResult={searchResult} />
    </div>
  )
}

export default LandingPage