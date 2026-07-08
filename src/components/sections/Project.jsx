import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () =>{
    return <section id="project" className = "min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className = "max-w-5xl mx-auto px-4">
            <h2 className = "text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Project</h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2">Animo Reporting System</h3>
                    <p className = "text-gray-400 mb-4">
                        Animo Reporting System is a reporting system that was integrated by Image Classification that identifies damages in the Image while having a features of Recommendation System, and Geotagging.
                    </p>
                    <div className = "flex flex-wrap gap-2 mb-4">
                        {["React Native","Python","Flask"].map((tech,key)=>(
                            <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className = "flex justify-between items-center">
                        <a href="https://github.com/Femryx/Animo-Reporting-System-Front-End" className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2">Empathic E-commerce Emotion Detection</h3>
                    <p className = "text-gray-400 mb-4">
                        E-commerce Emotion Detection is a Articial Intelligence that analyze the emotion based on the comment of the customer in E-commerce Websites, just put the comment of the customer then let the Articial Intelligence Analyze the Emotion.
                    </p>
                    <div className = "flex flex-wrap gap-2 mb-4">
                        {["Python","React JS","Tailwind CSS"].map((tech,key)=>(
                            <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className = "flex justify-between items-center">
                        <a onClick = {()=> window.open("https://github.com/Femryx/E-commerce-Emotion_Review_Website",'_blank')} className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className = "text-xl font-bold mb-2">Url Shorten Website </h3>
                    <p className = "text-gray-400 mb-4">
                        It's a website server that shortens the Long URL to Short URL.
                    </p>
                    <div className = "flex flex-wrap gap-2 mb-4">
                        {["Python","Flask","ReactJs","JavaScript","TailwindCSS"].map((tech,key)=>(
                            <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className = "flex justify-between items-center">
                        <a href="https://github.com/Femryx/Url_Shorten_Website" className = "text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}