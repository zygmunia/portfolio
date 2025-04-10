import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'
import { useState } from "react";
export const Contact = () => {

const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: ""})
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
    };
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Name"
                                className="w-full bg-white/5 border border-orange-200/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-400 focus:bg-orange-400/5"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="example@gmail.com"
                                className="w-full bg-white/5 border border-orange-200/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-400 focus:bg-orange-400/5"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                placeholder="Your Message..."
                                className="w-full bg-white/5 border border-orange-200/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-400 focus:bg-orange-400/5 resize-none"
                                rows={5}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
