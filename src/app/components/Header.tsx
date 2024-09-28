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
      <nav className='fixed left-0 right-0  container flex justify-between items-center'>
        <h4 className='text-xl font-bold'>PROPERTY SEARCH</h4>
        <div className='hidden md:flex gap-6 items-center'>
          <Link href='/buy'>Buy</Link>
          <Link href='/rent'>Rent</Link>
          <Link href='/post_listing'>Post Listing</Link>
          <button className='btn-secondary text-lg'>Sign In</button>
          <Link href='/post_listing'>ENG</Link>
        </div>
        {/* Hamburger Menu Icon */}
        <button className='md:hidden text-2xl' onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed container top-16 left-0 right-0 bg-white shadow-md p-4 z-50'>
          <aside className='flex flex-col gap-2 items-start '>
            <Link href='/buy'>Buy</Link>
            <Link href='/rent'>Rent</Link>
            <Link href='/post_listing'>Post Listing</Link>
            <button className=' btn-secondary'>Sign In</button>
            <Link href='/post_listing'>ENG</Link>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Header
