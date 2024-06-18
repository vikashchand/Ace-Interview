"use client"
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
useEffect(() =>{
    
})




  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm' >  
    
    <img src={'/assets/logo.png'} width={160} height={100} alt ='logo' />

<ul className='hidden md:flex gap-6'>

<li className={`hover:text-primary hover:font-bold transition-all cursor-pointer${path=='/dashboard' && 'text-primary font-bold'} ` } >Dashboard</li>


</ul>


<UserButton/>
    </div>
  )
}

export default Header