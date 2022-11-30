import React , {useEffect, useState} from 'react'
import { motion } from "framer-motion"
import  Link  from 'next/link'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isMobile , setIsMobbile] = useState(false);
    navbar ? disableBodyScroll(global.document) : enableBodyScroll(global.document);
    useEffect(()=>{
        window.addEventListener('resize', ()=> {
            window.innerWidth < 770 ? setIsMobbile(true) : setIsMobbile(false);
        })
        return () => window.removeEventListener('resize', ()=>{});
     }, [])
    return (
        <nav className="w-full text-white absolute z-10">
            <div className="justify-between 2xl:text-2xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-5 md:py-5 md:block">
                        <Link href="/">
                            <motion.h2 
                                className="flex px-5 text-5xl font-bold 2xl:text-5xl text-red-600"
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.2 }}
                            >
                                DF
                            </motion.h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none"
                                onClick={() => {
                                    setNavbar(!navbar)
                                }}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-screen md:h-full'>
                    <div
                        className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 backdrop-blur-md md:backdrop-blur-none h-screen md:h-full ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="w-full h-1/2 md:h-full flex flex-col md:flex-row justify-evenly items-center">
                            <Link href="/">
                                <motion.li className="hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}
                                    onClick={() => {
                                        isMobile ? setNavbar(!navbar) : ''
                                    }}>
                                    Home
                                </motion.li>
                            </Link>
                            <Link href="/blog">
                                <motion.li className="hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}
                                    onClick={() => {
                                        isMobile ? setNavbar(!navbar) : ''
                                    }}>
                                    Blog
                                </motion.li>
                            </Link>
                            <Link href="/about">
                                <motion.li className="hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}
                                    onClick={() => {
                                        isMobile ? setNavbar(!navbar) : ''
                                    }}>
                                    About US
                                </motion.li>
                            </Link>
                            <Link href="/contact">
                                <motion.li className="hover:text-red-600"
                                    whileHover={{scale:1.2}}
                                    whileTap={{scale:0.8}}
                                    onClick={() => {
                                        isMobile ? setNavbar(!navbar) : ''
                                    }}>
                                    Contact US
                                </motion.li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}