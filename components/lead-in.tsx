export default function LeadIn({}) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-20 text-center lg:text-left">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-28 lg:px-8 flex justify-center lg:justify-start">
          <div className="">
            <h1 className="mb-20 text-5xl font-bold tracking-wide leading-loose sm:text-5xl lg:text-6xl drop-shadow-lg">
              <span className=" text-white">Shaping better </span>
              <span className=" text-brand-green">digital products</span>
            </h1>

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
        </div>
      </div>
    </div>
  );
}
