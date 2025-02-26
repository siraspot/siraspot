import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="shadow-sm">
        <div className='max-w-7xl mx-auto p-3 flex justify-between items-center gap-3'>
            <Link href="/resumes" className="text-2xl font-bold"></Link>
        </div>
    </header>
  )
}
