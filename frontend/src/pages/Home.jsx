import wall from "../assets/wall.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-sky-900 p-4 md:p-6 flex items-center">
                <h1 className="font-bold text-3xl md:text-4xl text-white cursor-pointer">
                    IELTS
                </h1>
                <div className="flex-1"></div>
                <div className="flex gap-3 md:gap-5 justify-end">
                    <button 
                        className="cursor-pointer text-white text-sm md:text-base hover:text-gray-300 transition px-2 py-1 md:px-0"
                        onClick={() => navigate("/speaking")}
                    >
                        Speaking Test
                    </button>
                    <button 
                        className="cursor-pointer text-white text-sm md:text-base hover:text-gray-300 transition px-2 py-1 md:px-0"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Us
                    </button>
                </div>
            </nav>

            <div className="relative">
                <img 
                    src={wall} 
                    className="w-full h-[50vh] md:h-auto object-cover" 
                    alt="IELTS Testing Background" 
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <p className="font-bold text-3xl md:text-5xl lg:text-6xl text-white text-center max-w-4xl leading-tight mb-6 md:mb-8">
                        The World's Most<br />
                        Trusted English<br />
                        Test
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
                        <button 
                            className="bg-white text-sky-900 px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer text-base md:text-lg shadow-lg hover:shadow-xl"
                            onClick={() => navigate("/result")}
                        >
                            Take IELTS Test
                        </button>
                        <button 
                            className="bg-transparent border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer text-base md:text-lg"
                            onClick={() => navigate("/result")}
                        >
                            Check Result
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="py-12 px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center text-sky-900 mb-8">
                    Why Choose IELTS?
                </h2>
            </div>
        </div>
    )
}

export default Home;