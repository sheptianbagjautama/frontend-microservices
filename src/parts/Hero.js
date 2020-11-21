import React from 'react'

export default function Hero() {
    function submit(){}
    return (
        <div className="flex justify-between items-center">
            <div className="w-1/2">
                <h1 className="text-5xl text-white mb-5">
                    <span className="text-teal-400">The New</span> Way to Achieve Good{" "}
                    <span className="text-teal-400">Skills</span>
                </h1>
                <p className="text-white text-lg mb-8">
                    We provide tons of pathskill that you <br/> can choose and focus on
                </p>

                <form onSubmit={submit}>
                    <input type="text" className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2" placeholder="Your email address"/>
                    <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
                        Daftar Now
                    </button>
                </form>
            </div>
            <div className="w-1/2 flex justify-end pt-24 pr-16">
                <div className="relative" style={{ with:369, height:440 }}>
                    <div className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0" style={{ width:324, height:374 }}></div>
                </div>
            </div>
        </div>
    )
}
