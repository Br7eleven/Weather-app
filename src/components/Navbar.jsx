import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white/20 backdrop-blur-md shadow-md p-4 flex justify-between items-center text-white fixed w-full top-0 z-50">
           <h1 className="text-3xl font-bold">🌦️ Weather App </h1>
           <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            </div> 
        </nav>
    );

};


export default Navbar;