import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='font-Specialelite'>
      <NavBar />
        <main className='min-h-screen text-white flex justify-center items-center bg-black'>{children}</main>
      <Footer />
    </div>
  )
}