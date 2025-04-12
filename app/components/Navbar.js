import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between content center text-[20px] rounded-full px-[40px] py-[8px] items-center'>
                <div className='flex items-center'>
                    <img className='h-[50px] rounded-full' src="logo2.png" alt="no image" />
                    <div className='font-bold ml-4'>LawSphere</div>
                    {/* <div className='text-[10px]'> Where Justice meets Awareness</div> */}
                </div>
                <div>
                    <ul className='flex gap-6 text-[#f0c040] '>
                        <Link href="/"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>Home</li></Link>
                        <Link href="/blogs"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>Blogs</li></Link>
                        <Link href="/chatbot/index.html"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>Chatbot</li></Link>
                        <Link href="/ngos"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>NGOs</li></Link>
                        <Link href="/contact"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>Contact</li></Link>
                        <Link href="/signup"><li className='hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full'>Sign Up</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
        // <div>
        //     <nav className='flex'>
        //         <div className='w-[50%]'>logo</div>
        //         <div>
        //             <ul className='flex'>
        //                 <Link href='/'><li>Home</li></Link>
        //                 <Link href='/'><li>Library</li></Link>
        //                 <Link href='/'><li>Chatbot</li></Link>
        //                 <Link href='/'><li>NGOs</li></Link>
        //                 <Link href='/'><li>Contact</li></Link>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Navbar