// import Link from "next/link";

// export default function InterviewFeedback() {
//     return (
//         <section className="py-20 bg-gray-100 dark:bg-gray-800">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Interviews</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with John Doe</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Hear from industry expert John Doe as he shares his insights on the latest trends in software
//                   engineering.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with Jane Smith</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Learn from Jane Smith's experience as a successful product manager and how she navigated her career.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interview with Mark Johnson</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   Gain insights from Mark Johnson's experience as a seasoned software engineer and tech lead.
//                 </p>
//                 <Link
//                   className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-300"
//                   href="#"
//                 >
//                   Watch Interview
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InterviewFeedback() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black/[0.96] bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Using Qualisys for my job hunt was a game-changer! Seriously, it made everything so much smoother. I could easily schedule interviews, keep track of everything, and even get feedback. It took a load off my mind, and I couldn't be happier with how it all went down.",
    name: "Charles Dickens",
    title: "",
  },
  {
    quote:
      "Qualisys totally surprised me - in a good way! I expected another complicated job app process, but this was different. It felt like they actually cared about making things easier for me. I mean, who knew scheduling interviews could be this stress-free? Big thumbs up from me!",
    name: "William Shakespeare",
    title: "",
  },
  {
    quote: "Man, Qualisys was a game-changer for me. I was dreading the whole job application thing, but this platform made it surprisingly painless. Scheduling interviews was a breeze, and I loved how I could track everything in one place. Seriously, if you're job hunting, give Qualisys a shot - you won't regret it!",
    name: "Edgar Allan Poe",
    title: "",
  },
  {
    quote:
      "Qualisys was a total lifesaver during my job hunt. I mean, it's not often you find a platform that actually makes things easier. From scheduling interviews to getting feedback, it was all a breeze. If you're tired of the usual job app struggles, definitely give Qualisys a shot - you'll thank me later!",
    name: "Jane Austen",
    title: "",
  },
  {
    quote:
      "I was pleasantly surprised by how smooth Qualisys made my job application process. It's like they took all the usual hassles and just made them disappear. I could focus on preparing for interviews instead of stressing about logistics. Qualisys definitely gets a thumbs up from me!",
    name: "Herman Melville",
    title: "",
  },
];
