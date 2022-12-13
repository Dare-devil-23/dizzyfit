import React from 'react'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import { BsArrowRight } from 'react-icons/bs'

const Blog = ({ allPostsData }) => {
  return (
    <div className='container'>
      <section className="mt-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Our Blog</h2>
            <p className="font-light text-zinc-500 sm:text-xl ">Best place find out the blogs related to fitness.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {
              allPostsData.map(({ id, date, title, author, data, avatar, featuredImage}) => (
                <article key={id} className="p-6 rounded-lg border  shadow-md bg-zinc-900 border-zinc-700">
                  <div>
                    <img src={featuredImage} alt="Featured Image" className='rounded-lg'/>
                  </div>
                  <h2 className="my-5 text-2xl font-bold tracking-tight text-white">
                    <Link href='/'>{title}</Link>
                  </h2>
                  <p className="mb-5 font-light text-zinc-400">{data}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <img className="w-7 h-7 rounded-full" src={avatar} alt="avatar" />
                      <div className='flex flex-col'>
                        <div>
                            <span className="font-medium text-white">
                              {author}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-zinc-500">{date}</span>
                          </div>
                      </div>
                    </div>
                    <Link href="/" className="inline-flex items-center font-medium text-blue-500 hover:underline">
                      Read more <BsArrowRight className='text-lg mx-2'/>
                    </Link>
                    
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blog