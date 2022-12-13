import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri'

export default function NavBar({ navbar, setNavbar }) {
    return (
        <nav className='w-full text-white absolute z-10'>
            <div className="justify-between 2xl:text-2xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex justify-between items-center">
                        <div >
                            <Link href="/">
                                <motion.div
                                    className="p-4 text-5xl font-bold text-red-600"
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    DF
                                </motion.div>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.2 }}
                                className="p-2"
                                onClick={() => {
                                    setNavbar(!navbar)
                                }}
                            >
                                {navbar ? (
                                    <RiCloseFill className='text-xl' />

                                ) : (
                                    <RiMenu2Fill className='text-xl' />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
                {
                    navbar ? <div className="w-full h-screen">
                        <div
                            className="flex-1 justify-self-center backdrop-blur-md h-screen"
                        >
                            <ul className="w-full h-1/2 flex flex-col justify-evenly items-center">
                                <Link href="/">
                                    <motion.li className="hover:text-red-600"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => {
                                            setNavbar(!navbar)
                                        }}>
                                        Home
                                    </motion.li>
                                </Link>
                                <Link href="/blog">
                                    <motion.li className="hover:text-red-600"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => {
                                            setNavbar(!navbar)
                                        }}>
                                        Blog
                                    </motion.li>
                                </Link>
                                <Link href="/about">
                                    <motion.li className="hover:text-red-600"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => {
                                            setNavbar(!navbar)
                                        }}>
                                        About US
                                    </motion.li>
                                </Link>
                                <Link href="/contact">
                                    <motion.li className="hover:text-red-600"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => {
                                            setNavbar(!navbar)
                                        }}>
                                        Contact US
                                    </motion.li>
                                </Link>
                            </ul>
                        </div>
                    </div> :
                        <div className={`w-1/2 h-full`}>
                            <div
                                className={`pb-0 mt-0 h-full ${!navbar ? 'hidden md:block ' : 'hidden'}`}
                            >
                                <ul className="w-full h-full flex flex-row justify-evenly items-center">
                                    <Link href="/">
                                        <motion.li className="hover:text-red-600"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                            >
                                            Home
                                        </motion.li>
                                    </Link>
                                    <Link href="/blog">
                                        <motion.li className="hover:text-red-600"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                            >
                                            Blog
                                        </motion.li>
                                    </Link>
                                    <Link href="/about">
                                        <motion.li className="hover:text-red-600"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                           >
                                            About US
                                        </motion.li>
                                    </Link>
                                    <Link href="/contact">
                                        <motion.li className="hover:text-red-600"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                            >
                                            Contact US
                                        </motion.li>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                }
            </div>
        </nav>
    );
}