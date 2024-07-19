import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center text-4xl'>
        <FiShoppingBag />
        <h1>Shoesy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  )
}