"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log("path",path);
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={`/logo.svg`} width={160} height={160}/>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-semibold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path=='/questions'&&'text-primary font-semibold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path=='/upgrade'&&'text-primary font-semibold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-semibold transition-all cursor-pointer ${path=='/how'&&'text-primary font-semibold'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header