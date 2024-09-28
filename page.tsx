
import Blogs from "@/components/Blogs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import InterviewFeedback from "@/components/InterviewFeedback"
import SearchBar from "@/components/SearchBar"
import { motion } from "framer-motion";
import EarthCanvas from "@/components/Earth";
import { slideIn } from "@/utils/motion";

export default function Component() {
  return (
    <main className="relative bg-white">
      <Header />
      <Hero />

      <SearchBar />
      <InterviewFeedback />
      <Blogs />
      <Footer />
    </main>
  )
}



