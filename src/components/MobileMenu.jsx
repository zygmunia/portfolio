

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    
    return ( 
        <div className={`
            fixed top-0 left-0 w-full h-screen z-50
            bg-[rgba(1,76,82,0.8)] backdrop-blur-sm
            flex flex-col items-center justify-center
            transition-opacity duration-300 ease-in-out
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }
        `}>
            <button onClick = {() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
                &times;
             </button>
             <a href="#home" 
                onClick={()=> setMenuOpen(false)}
             className={`text-2xl font-semibold hover:text-orange-400 text-white my-4 transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
             `}>
                    Home
                </a>
                <a href="#about" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold hover:text-orange-400 text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}>
                    About
                </a>
                <a href="#projects" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold hover:text-orange-400 text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
             `}>
                    Projects
                </a>
                <a href="#contact" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold hover:text-orange-400 text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}>
                    Contact
                </a>

        </div>
    );
};