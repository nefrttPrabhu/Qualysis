"use client"
import { Spotlight } from "@/components/ui/Spotlight"
import Link from "next/link"
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";
import { slideIn } from "@/utils/motion";



export default function Hero() {
    return (

        <section id="header" className="pt-32 pb-20 bg-black/[0.96]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="gray"
            />
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Unlock Your Potential
                            </span>
                            with Our Interview Platform
                        </h1>
                        <p className="text-lg  text-white mb-8">
                            Prepare for your next interview with our comprehensive platform. Search for relevant interviews, explore
                            expert tips, and practice your skills.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/signup">
                                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                                    Sign Up
                                </button>
                            </Link>
                            <button className="bg-transparent hover:underline text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                    {/* <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
                    >
                        <EarthCanvas />
                    </motion.div> */}
                    </div>
                </div>
            </div>
        </section>

    )
}