import { RevealOnScroll } from "../RevealOnScroll"
export const About = () =>{
    const backendSkills = [
        "Python",
        "Flask",
        "Java",
        "SQL"
    ]
    const frontendSkills = [
        "Javascript",
        "TailwindCSS",
        "React Native",
        "React JS Web",
        "HTML",
        "CSS"
    ]

    const ai = [
        "Machine Learning",
        "Image Classification",
        "Natural Language Processing",
    ]

    const skills = [
        "Teamwork",
        "Communication",
        "Time Management"
    ]
    return <section id = "about" className = "min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className = "max-w-3xl mx-auto px-4">
            <h2 className = "text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me
            </h2>

            <div className = "rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className = "text-gray-300 mb-6">
                    Motivated and detail-oriented Computer Science graduate seeking an entry-level Software Engineer position where I can apply my skills in Computer Science in Backend Development and I am knowleagable to AI Engineer. Eager to learn, improve my technical abilities, and contribute to the success of the company through continuous growth and problem solving.
                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">Frontend</h3>
                        <div className = "flex flex-wrap gap-2">
                            {frontendSkills.map((tect)=>(
                                <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tect}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">Backend</h3>
                        <div className = "flex flex-wrap gap-2">
                            {backendSkills.map((tect)=>(
                                <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tect}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">Artificial Intelligence</h3>
                        <div className = "flex flex-wrap gap-2">
                            {ai.map((tect)=>(
                                <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tect}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className = "text-xl font-bold mb-4">Skills</h3>
                        <div className = "flex flex-wrap gap-2">
                            {skills.map((tect)=>(
                                <span className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tect}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className = "text-xl font-bold-mb-4">🎓 Education</h3>
                    <ul className = "list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Blessed Mary Academy </strong> - HighSchool and Elementary (2016 - 2022)
                        </li>
                        <li>
                            <strong>STEM (Science, Technology, Engineering, and Mathematics) Senior HighSchool </strong> - De La salle Dasmarinas University (2022 - 2024)
                        </li>
                        <li>
                            <strong>B.S. in Computer Science in Intelligent System </strong> - De La salle Dasmarinas University (2024 - 2026)
                        </li>
                    </ul>
                </div>
                <div className = "p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className = "text-xl font-bold-mb-4">💼 Experience</h3>
                    <div className = "space-y-4 text-gray-300">
                        <div>
                            <h4 className = "font-semibold">Internship at A2000 in Alabang (July 2025 - August 2025</h4>
                            <p>Developed front-end in Forecasting Prediction AI</p>
                        </div>
                    </div>
                    <h3 className = "text-xl font-bold-mb-4">📚 Online Course</h3>
                    <div className = "space-y-4 text-gray-300">
                        <div>
                            <h4 className = "font-semibold">Coursera</h4>
                            <p>Back-End Web Development (Introduction in Back-End Development)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}