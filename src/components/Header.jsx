import React from "react"
import Link from 'next/link'
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/Bs"
 
export default function Header(){
    return(
        <header>
        <nav className='bg-primary text-white p-3'>
          <div className='container flex justify-between'>
            <ul className='md:flex gap-3'>
              <li>
                <a href="mailto: abc@example.com"><AiOutlineMail className='inline' />yubtolangi@gmail.com</a>
              </li>
              <li>
                <a href="tel:9811854645"><BsFillTelephoneFill className='inline' />9811816638</a>
              </li>
            </ul>
            <ul className='md flex gap-3'>
              <li>
                <Link href={"/login"}>login</Link>
              </li>
              <li>
                <Link href={"/cart"}>cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav className='container text-center md:flex p-4'> 
          <Link href={"/"} className='text-4xl  font-bold text-[#0D0E43]'>Hekto</Link>
          <div className='md:flex md:flex-grow justify-between items-center md:pl-20'>
            <ul className='md:flex gap-3'>
              <li>
                <Link  className='text-secondary'href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
            </ul>
            <from className="flex justify-center mt-3">
              <input type="text" className='border' />
              <div className='bg-secondary text-white p-3 inline'>
                <AiOutlineSearch className='inline' />
              </div>
            </from>

          </div>

        </nav>
      </header >
    )
}