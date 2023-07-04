import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 bg-black">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-white">daisyUI</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost">
                            <div className="w-10 rounded-full text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            <li>
                            <a className="justify-between">
                                Profile
                            </a>
                            </li>
                            <Link to="Login">
                                Loginn
                            </Link>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
