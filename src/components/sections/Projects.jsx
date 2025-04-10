import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-orange-400 hover:-translate-y-1 hover:border-orange-200/30 hover:
                    shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Virtual Book Club</h3>
                    <p className="mb-4">Developed a web-based platform using the Django framework to create a virtual book club enabling users to
                    discover, discuss, track books in a collaborative environment, and review books read.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Django", "SQLite", "DigitalOcean", "REST API"].map((tech,key)=>(
                           <span 
                           key = {key}
                           className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-600/20
                           hover:shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition">
                           {tech}
                           </span>
                       ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/zygmunia/django_local_library" className="text-orange-400 hover:text-orange-500 transition-colors my-4">View Project → </a>
                    </div>
            </div>
            <div className="p-6 rounded-xl border border-orange-400 hover:-translate-y-1 hover:border-orange-200/30 hover:
                    shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Y86 Interpreter Implementation</h3>
                    <p className="mb-4">
                     Interpreter for the Y86-64 architecture simulating CPU execution
                    cycles, emphasizing assembly language and machine-level instruction execution. Implemented the von Neumann architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Assembly Language (Y86-64)", "C", "ISA",].map((tech,key)=>(
                           <span 
                           key = {key}
                           className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-600/20
                           hover:shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition">
                           {tech}
                           </span>
                       ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/zygmunia/y86-cpu-architecture" className="text-orange-400 hover:text-orange-500 transition-colors my-4">View Project → </a>
                    </div>
            </div>
            <div className="p-6 rounded-xl border border-orange-400 hover:-translate-y-1 hover:border-orange-200/30 hover:
                    shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition-all">
                    <h3 className="text-xl font-bold mb-2">DHCP Server and Client Implementation</h3>
                    <p className="mb-4">
                    Designed and implemented a fully functional Dynamic Host Configuration Protocol(DHCP) server and client to
                    facilitate automatic IP address assignment and network configuration. This program focused on network
                    communication, packed parsing, and protocol compliance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["DHCP", "UDP", "C",].map((tech,key)=>(
                           <span 
                           key = {key}
                           className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-600/20
                           hover:shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition">
                           {tech}
                           </span>
                       ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/zygmunia" className="text-orange-400 hover:text-orange-500 transition-colors my-4">View Project → </a>
                    </div>
            </div>
            </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}