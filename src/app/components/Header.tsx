'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header>
      <nav className='fixed left-0 right-0 bg-background  container flex justify-between items-center z-[999]'>
        <h4 className='text-xl font-bold'>PROPERTY SEARCH</h4>
        <div className='hidden md:flex gap-6 items-center'>
          <Link href='/'>Buy</Link>
          <Link href='/'>Rent</Link>
          <Link href='/'>Post Listing</Link>
          <button className='btn-secondary text-lg'>Sign In</button>
          <Link href='/'>ENG</Link>
        </div>
        <button
          className='md:hidden text-2xl'
          onClick={toggleMenu}
          aria-label='toggle-menu'
        >
          <GiHamburgerMenu />
        </button>
      </nav>
      {isMenuOpen && (
        <div className='fixed container top-16 left-0 right-0 bg-white shadow-md p-4 z-50'>
          <aside className='flex flex-col gap-2 items-start '>
            <Link href='/'>Buy</Link>
            <Link href='/'>Rent</Link>
            <Link href='/'>Post Listing</Link>
            <button className=' btn-secondary'>Sign In</button>
            <Link href='/'>ENG</Link>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Header
