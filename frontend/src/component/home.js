import React from 'react'
import { Link } from "react-router-dom";

const hero = () => {
    return (
        <div className="hero min-h-screen bg-[url('C:\Users\n.beltran\Desktop\Pagina\Crypto_Django\cryptocom\src\assets\images\Background.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div> 
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">CryptoCom</h1>
                    <p className="mb-5">A Virtual Page where you can buy or sell cryptocoins</p>
                        <Link to="Register">
                            <button className="btn btn-primary">
                                Register/Login
                            </button>
                        </Link> 
                </div>
            </div>
        </div>
    )
}

export default hero
