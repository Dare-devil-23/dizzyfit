import React from 'react'
import { FaToolbox } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiGithubLine, RiTelegramLine} from 'react-icons/ri'
import Link from 'next/link'
const About = () => {
  return (
    <div className='min-h-screen mt-16 flex justify-center items-center'>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-zinc-900 opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" >
              <img src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Sahith</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-600 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <a className="h-4 fill-current text-red-600 pr-4">
                <FaToolbox className="text-lg"/>
              </a>Full Stack Developer</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <a className="h-4 fill-current text-red-600 pr-4">
              <ImLocation2 className="text-lg"/>
            </a>Location - 16.2379° N, 80.6444° E</p>
            <p className="pt-8 text-sm">Happiness is a by-product of an effort to make someone else happy.</p>

            <div className="pt-12 pb-8">
              <Link href="/contact" className="bg-red-600 hover:bg-red-500 justify-center text-center rounded-full shadow px-10 py-3 flex items-center">
                Get In Touch
              </Link>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-full justify-evenly text-2xl lg:w-full mx-auto flex flex-wrap items-center">
              <a className="link" href="#"  >
                <span className="h-6 fill-current text-gray-600  hover:text-red-600" >
                  <RiFacebookLine/>
                </span>
              </a>
              <a className="link" href="#"  >
                <span className="h-6 fill-current text-gray-600  hover:text-red-600" >
                  <RiInstagramLine />
                </span>
              </a>
              <a className="link" href="#"  >
                <span className="h-6 fill-current text-gray-600  hover:text-red-600" >
                  <RiGithubLine />
                </span>
              </a>
              <a className="link" href="#"  >
                <span className="h-6 fill-current text-gray-600  hover:text-red-600" >
                  <RiTwitterLine />
                </span>
              </a>
              <a className="link" href="#"  >
                <span className="h-6 fill-current text-gray-600  hover:text-red-600" >
                  <RiTelegramLine />
                </span>
              </a>
            </div>
          </div>

        </div>

        <div className="w-full lg:w-2/5 hidden md:block">
          <img src="https://images.unsplash.com/photo-1599847022902-f64cc1ae97fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />

        </div>

      </div>
    </div>
  )
}

export default About