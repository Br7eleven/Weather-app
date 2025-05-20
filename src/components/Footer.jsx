import React from "react";


const Footer = () => {
    return (
        <footer className="bg-white/10 backdrop-blur-sm text-white text-center py-4 ">
        <p>&copy; {new Date().getFullYear()} Weather App. All Right Reserved.</p>
        </footer>
    );
};


export default Footer;