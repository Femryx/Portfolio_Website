import { RevealOnScroll } from "../RevealOnScroll"
import backendcert from "../images/coursera_backend.jpg"
import robotics from "../images/robotics.png"
import recognition from "../images/recog.png"
export const Certificates = () => {
    return <section id = "certificate" className = "min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Certificates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">
                    <img
                        src={backendcert}
                        alt="Back-end Development Certificate"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white text-center">
                        Back-end Development
                        </h3>

                        <p className="text-gray-400 mt-2 text-sm text-center">
                        January 14, 2025
                        </p>

                        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 font-medium hover:bg-blue-700 transition"
                        onClick = {()=>
                            window.open("https://www.coursera.org/account/accomplishments/verify/6ION0M8CSGYH",'_blank'
                            )
                        }>
                        View Certificate
                        </button>
                    </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">
                    <img
                        src={robotics}
                        alt="Robotics Certificate"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white text-center">
                        Cerfication of Recognition (Robotics)
                        </h3>

                        <p className="text-gray-400 mt-2 text-sm text-center">
                        December 14,2025
                        </p>

                        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 font-medium hover:bg-blue-700 transition"
                        onClick = {()=>
                            window.open(robotics,'_blank'
                            )
                        }>
                        View Certificate
                        </button>
                    </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-cyan-500/20">
                    <img
                        src={recognition}
                        alt="Back-end Development Certificate"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold text-white text-center">
                        Certificate of Recognition (Contrends Research)
                        </h3>

                        <p className="text-gray-400 mt-2 text-sm text-center">
                            April 23,2026
                        </p>

                        <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 font-medium hover:bg-blue-700 transition"
                        onClick = {()=>
                            window.open(recognition,'_blank'
                            )
                        }>
                        View Certificate
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}