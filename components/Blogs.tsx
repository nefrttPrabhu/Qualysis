"use client"
import Link from "next/link";

// export default function Blogs() {
//     return (
//         <section className="py-20 bg-white dark:bg-gray-900">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Explore Our Blog</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//                   Tips for Acing Your Next Interview
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Discover expert-approved strategies to help you prepare and perform your best in your next interview.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Rise of Remote Interviews</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Explore the growing trend of remote interviews and how to excel in this new interview format.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Navigating the Job Market</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Get expert advice on how to effectively search for and land your dream job in the competitive job
//                   market.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Blogs() {
  return (
    <section id="blog" className="py-20 bg-black/[0.96] bg-grid-white/[0.05]">
       <h2 className="text-lg items-center justify-center flex font-bold text-white mb-4">
          Tips for Acing Your Next Interview
        </h2>
    <div className=" max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </section>

  );
}
export const projects = [
  {
    title: "James Thomas",
    description:
      "Research the company and its culture for a confident interview.",
  },
  {
    title: "John Jacob",
    description:
      "Practice your elevator pitch to nail that first impression",
  },
  {
    title: "Nora Dsouza",
    description:
      "Prepare specific examples to showcase your skills and experience.",
  },
  {
    title: "Leonardo Fernandes",
    description:
      " Use confident body language for professionalism.",
  },
  {
    title: "Brad Lee",
    description:
      "Craft thoughtful questions to demonstrate your interest and engagement.",
  },
  {
    title: "Hung Phu",
    description:
      "Stay calm and focused by practicing mindfulness or deep breathing.",
  },
];
