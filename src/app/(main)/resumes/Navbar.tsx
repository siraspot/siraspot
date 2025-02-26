import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="shadow-sm">
        <div className='max-w-7xl mx-auto p-3 flex justify-between items-center gap-3'>
            <Link href="/resumes" className="flex items-center gap-2">
                <Image src={""} />
            </Link>
        </div>
    </header>
  )
}
