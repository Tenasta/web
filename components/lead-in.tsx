export default function LeadIn({}) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-20 text-center lg:text-left">
      <div className="relative sm:overflow-hidden">
        <div className="absolute inset-0">
          {/* <!-- <img className="h-full w-full object-cover opacity-40"
                                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                        alt="People working on laptops"> -->
                    <!-- <div
                            className="absolute inset-0 bg-gradient-to-l from-brand-sky-blue-700 to-brand-dark-blue-200 mix-blend-multiply">
                        </div> --> */}
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-28 lg:px-8 flex justify-center lg:justify-start">
          <div className="">
            <h1 className="mb-20 text-5xl font-bold tracking-wide leading-loose sm:text-5xl lg:text-6xl drop-shadow-lg">
              <span className=" text-white">Shaping better </span>
              <span className=" text-brand-green">digital products</span>
              {/* <!-- <span className=" text-brand-green">technology teams</span> --> */}
            </h1>
            {/* <!-- <h2 className="text-2xl font-bold tracking-wide leading-loose mb-0">
                            <span className=" text-white">Passionate about </span>
                            <span className=" text-brand-green">product and technology</span>
                        </h2> --> */}

            <p className="mt-2 max-w-xl mx-auto lg:mx-0 text-2xl text-white font-extralight tracking-wide sm:max-w-3xl drop-shadow-lg">
              We build digital products, grow development teams, help startups
              and launch businesses. Product and technology is our passion.
            </p>

            <div className="mt-10 mx-auto  max-w-sm sm:max-w-none sm:flex justify-center lg:justify-start">
              <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#projects"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-dark-blue-200 hover:text-brand-purple bg-gray-50 bg-opacity-90 hover:bg-gray-200 sm:px-8"
                >
                  Our Projects
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-dark-blue bg-opacity-80 hover:bg-brand-dark-blue-700 sm:px-8"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* <!-- <div
                        className="bg-brand-dark-blue border border-gray-200 border-solid dark:bg-gray-900 dark:border-gray-800 flex-shrink-0 h-80 hidden lg:block overflow-hidden p-4 rounded-md shadow-xl w-1/3">
                        <div className="flex flex-row mb-4">
                            <div className="bg-red-500 h-3 mr-2 rounded-full w-3"></div>
                            <div className="bg-yellow-500 h-3 mr-2 rounded-full w-3"></div>
                            <div className="bg-green-500 h-3 rounded-full w-3"></div>
                        </div>
                        <pre className="bg-transparent dark:text-gray-200 font-semibold p-0 text-black text-xs"><code><span className="font-normal" id="heroPrompt">$ parcel index.html</span>
        <span className="align-middle bg-gray-500 h-3 inline-block w-2" style="margin-top: -2px; display: none;" id="heroCursor"></span><span className="dark:text-blue-500 text-blue-600" id="heroServer">Server running at <span className="underline">http://localhost:1234</span></span>
        <span className="dark:text-green-500 font-bold text-green-600" id="heroStatus">✨ Built in 48ms</span>
                        </code></pre>
                    </div> --> */}
        </div>
      </div>
    </div>
  );
}
