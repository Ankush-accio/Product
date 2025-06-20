import { Facebook, Twitter, Instagram } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#002D61] text-white p-6 absolute bottom-0 w-full'>
      <div className="flex flex-col md:flex-row justify-between gap-6 max-w-5xl mx-auto">

        <div>
          <h2 className="text-lg font-bold mb-2">Filters</h2>
          <p>All <span>Electronics</span></p>
          <p className="mt-4 text-sm text-gray-300">© 2024 American</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p>About Us</p>
          <p>Contact</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
           <Facebook className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
            <Twitter className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
            <Instagram className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer