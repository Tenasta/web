import ProjectCta from "@/components/project-cta";

export default function GlacieraProject() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-4">
        <div className="flex flex-col">
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              className="max-h-12 "
              src="./images/glaciera-logo-mono.svg"
              alt="Glaciera"
            />
          </div>
          <div className="mb-2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empowering Jewellery Businesses
            </h2>
            <h3 className="text-brand-purple">New launch</h3>
          </div>
        </div>
        <div className="lg:row-span-3 mb-10 lg:order-first flex lg:pt-8">
          <div className="macbook w-full">
            <div className="screen">
              <div className="viewport">
                <img src="images/screencapture-glaciera-2022-01-20-20_36_31.png" />
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
        </div>

        <div className="lg:row-span-2 flex flex-col items-center lg:items-start">
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Glaciera is a product for Jewellery businesses – boosting their
            sales to customers. Glaciera offers a 3d model design marketplace
            with purchasable 3d models, design calculator and quotation builder
            and a client collection tool to help make client sales of custom
            Jewellery pieces.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Given the very specific needs of the product and the need for a high
            quality solution, we undertook a bespoke software development with a
            focus on continuous deployment. This enabled us to add value for the
            users as early and often as possible – gaining valuable feedback to
            help guide the product roadmap.
          </p>

          <ProjectCta
            buttonLink="https://www.glaciera.com/"
            buttonText="View Project"
          ></ProjectCta>
        </div>
      </div>
    </div>
  );
}
