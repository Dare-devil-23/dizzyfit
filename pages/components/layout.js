import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
        <main className='min-h-screen text-white flex justify-center items-center bg-black'>{children}</main>
      <Footer />
    </>
  )
}