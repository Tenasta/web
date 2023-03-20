export default function About() {
  return (
    <div id="about" className="pt-16 sm:pt-12 md:pt-20 lg:pt-28 xl:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-purple font-semibold tracking-wide uppercase">
            What we do
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Product, technology and business success
          </p>
          <p className="mt-4 sm:max-w-2xl text-xl text-gray-500 sm:mx-auto">
            We work across the complete startup lifecycle and full technology
            stack to help businesses and products reach their goals.
          </p>
        </div>

        <div className="mt-32">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-20">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img src="images/idea.gif" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Product conception
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Whether it is a great idea or just a problem that needs solving,
                we have experience putting the early pieces of the puzzle
                together and finding the fastest and most effective way to get
                results. Landing pages, lead capture, minimum viable products
                (MVP) – there are always options to suit.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img src="images/workplace.gif" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Product development
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Product development can get complicated and out of control,
                fast. In short, we believe in keeping things simple and getting
                regular wins. Continually delivering and communicating means the
                feedback loop stays tight and the project stays under control.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img src="images/social-media.gif" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Team growth
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                A team driving toward a shared vision can accomplish amazing
                things. We know the importance of the right mix of people and
                environment to build long lasting success.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <img src="images/money-bag.gif" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Product success
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Understanding how your customers actually use your product – and
                if it provides enough value – is key. Keeping this in mind
                within the product development cycle will greatly improve
                product success
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
