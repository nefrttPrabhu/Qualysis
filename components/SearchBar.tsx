

export default function SearchBar() {
  return (

    <section id="interview" className="py-20 bg-black/[0.96] ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Search for Interviews</h2>
            <p className="text-lg text-gray-400 dark:text-gray-400 mb-8">
              Easily find relevant interviews and expert tips to help you prepare for your next interview.
            </p>
            <div className="flex">
              <input
                className="bg-gray-900 dark:bg-gray-700 border border-white/10 dark:border-gray-600 rounded-md py-3 px-4 w-full mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 text-white"
                placeholder="Search interviews"
                type="text"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Search
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}