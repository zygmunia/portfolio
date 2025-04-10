import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "Bootstrap",];
    const backendSkills = ["Node.js", "REST API","Django", "SQLite", "DigitalOcean"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent text-center">About Me</h2>
            

            <div className="rounded-xl p-8 border-orange-400 border hover:-translate-y-1 transition-all">
            <p className="text-white-300 mb-6">
                Passionate developer with experience in building web applications, working on systems-level projects, and exploring networking concepts. 
                I enjoy working across different layers of technology, from front-end interfaces to low-level protocols. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech,key) => (
                        <span 
                        key = {key}
                        className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-600/20
                        hover:shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech,key) => (
                        <span 
                        key = {key}
                        className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-600/20
                        hover:shadow-[0_2px_8px_rgba(255, 105, 36, 0.8)] transition">
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-8">
                <div className="p-6 rounded-xl border-orange-400 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-center">🏫Education</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong> B.S. in Computer Science</strong> - James Madison University (2022-2025)
                        </li>
                        <li>
                            <strong>Relevant Coursework</strong>: Data Structures, Applied Algorithms, Web Development, Computer Systems...
                        </li>
                    </ul>
                </div>

            </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}
