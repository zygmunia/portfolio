

export const Home = () => {
    return(
    <section id= "home" className= "min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent leading-right">
                Hi, I'm Ian Zygmunt
            </h1>

            <p className="text-white text-lg mb-8 max-w-lg mx-auto"> 
            I’ve spent the past few years building up my skills in programming, working on projects, 
            and getting a solid understanding of how software and systems work. 
            I enjoy learning by doing—whether that’s building something from scratch or digging into how things work behind the scenes.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-orange-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(207, 101, 2, 0.8)]">
                    View Projects
                </a>
                <a href="#contact" className="bg-white text-orange-400 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(207, 101, 2, 0.2)]">
                    Contact Me
                </a>
            </div>
        </div>

    </section>
    );
};