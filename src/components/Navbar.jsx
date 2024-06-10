import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white ">
            <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
            <div className="logo font-bold text-2xl">
                <span className="text-green-500">
                &lt;
                </span>
                <span>Pass</span>

                <span className="text-green-500">Manage /&gt;</span>
                
                </div>
            {/* <ul>
                <li className="flex gap-4">
                    <a className="hover:font-bold" href="#">home</a>
                    <a className="hover:font-bold" href="#">about</a>
                    <a className="hover:font-bold" href="#">contact</a>
                    <a className="hover:font-bold" href="#"></a>
                </li>
            </ul> */}
            <button className='text-white flex justify-center items-center'>
                <img className='invert p-5 w-16' src="/icons/Github.jpeg" alt="" />
                <span className='font-bold'><a href="https://github.com/Shoaibkhan-in/" target='_blank'>Git-Hub</a></span>
            </button>
            </div>
        </nav>
    )
}

export default Navbar
