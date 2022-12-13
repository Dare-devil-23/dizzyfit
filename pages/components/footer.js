import React from 'react'
import { motion } from 'framer-motion'
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri'
import Link  from 'next/link'
export default function Footer() {
    return (
        <div >
            <div className="w-full min-h-fit flex items-center justify-center bg-black">
                <div className="mx-1 md:mx-20 my-10 w-full px-4 text-white flex flex-col">
                    <div className="w-full text-6xl font-bold">
                        <h1 className="w-full md:w-3/4 2xl:w-3/5">
                            How can we help you. get in touch
                        </h1>
                    </div>
                    <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                        <p className="w-full md:w-2/3 text-gray-400">
                            To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged
                        </p>
                        <div className="w-44 pt-6 md:pt-0" id="#contact">
                            <Link href="/contact" className="bg-red-600 hover:bg-red-500 justify-center text-center rounded-full shadow px-10 py-3 flex items-center">
                                Contact US
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mt-24 mb-12 flex-row justify-between">
                            <Link href="/" className='text-red-600'>
                                <motion.h2 className="text-3xl 2xl:text-5xl"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}
                                >
                                    DIZZYFIT
                                </motion.h2>
                            </Link>
                            <Link href='/about'>
                                <motion.div className="hidden md:flex items-center cursor-pointer text-gray-600 uppercase hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}    
                                >
                                    About
                                </motion.div>
                            </Link>
                            <Link href='/blog'>
                                <motion.div className="hidden md:flex items-center cursor-pointer text-gray-600 uppercase hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}    
                                >
                                    Blog
                                </motion.div>
                            </Link>
                            <Link href='/privacy'>
                                <motion.div className="hidden md:flex items-center cursor-pointer text-gray-600 uppercase hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}    
                                >
                                    Privacy Policy
                                </motion.div>
                            </Link>
                            <Link href='/terms'>
                                <motion.div  className="hidden md:flex items-center cursor-pointer text-gray-600 uppercase hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}    
                                >
                                    Terms of Service
                                </motion.div>
                            </Link>
                            <div className="flex flex-row space-x-8 items-center justify-between">
                                <motion.a href="/" className='hover:text-red-600'
                                    whileHover={{scale:1.5}}
                                    whileTap={{scale:0.8}}
                                >
                                    <RiFacebookLine className='text-lg'/>
                                </motion.a>
                                <motion.a href="/" className='hover:text-red-600'
                                    whileHover={{scale:1.5}}
                                    whileTap={{scale:0.8}}
                                >
                                    <RiTwitterLine className='text-lg'/>
                                </motion.a>
                                <motion.a href="/" className='hover:text-red-600'
                                    whileHover={{scale:1.5}}
                                    whileTap={{scale:0.8}}
                                >
                                    <RiInstagramLine className='text-lg'/>
                                </motion.a>
                            </div>
                        </div>
                        <hr className="border-gray-600" />
                        <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Daily Workouts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

