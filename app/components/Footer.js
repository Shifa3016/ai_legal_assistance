import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";

import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-black mr-[9px] text-white h-[30vh]'>
      <div className="icons relative top-[30%]">
        <ul className='flex justify-center space-x-5 items-center'>
            <Link href="https://www.facebook.com/share/RRTQGKnPK7Go8x8v/?mibextid=qi2Omg"><li className='text-[55px] '><FaFacebook /></li></Link>
            <Link href="https://x.com/Andyshan221137"><li className='text-[60px]'><AiFillTwitterCircle /></li></Link>
            <Link href="https://www.instagram.com/frvr_shan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><li className='text-[35px] p-2 rounded-full bg-white text-black'><AiFillInstagram />
            </li></Link>            
            <Link href="https://www.linkedin.com/in/shifa-monam-b933242aa/"><li className='text-[30px] p-[10.5px] mx-1 rounded-full bg-white text-black'><FaLinkedinIn />
            </li></Link>
        </ul>
       <div className=' my-[50px] text-sm flex justify-center items-center'>
          <ul>
            <li className='flex items-center'>Copyright CivicCodeX &copy; All Rights Reserved <p className='mx-1'><FaInfinity /></p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer