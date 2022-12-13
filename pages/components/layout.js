import NavBar from './navbar'
import Footer from './footer'
import React , { useEffect, useState } from 'react'
import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(false);
  const targetRef = React.createRef();
  useEffect(()=>{
    navbar ? disableBodyScroll(targetRef) : enableBodyScroll(targetRef);
  },[navbar])
  return (
    <div className='font-Specialelite select-none' ref={targetRef}>
      <NavBar navbar={navbar} setNavbar={setNavbar}/>
        <main className='min-h-screen text-white flex justify-center items-center bg-black'>{children}</main>
      <Footer />
    </div>
  )
}