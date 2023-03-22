import ProjectCta from "@/components/project-cta";

export default function LeadsparkrProject() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
      <div className="lg:grid lg:grid-rows-auto lg:grid-cols-2 lg:gap-4">
        <div className="w-full flex flex-col justify-center lg:justify-start">
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              className="max-h-12 "
              src="./images/leadsparkr-logo-mono.svg"
              alt="Glaciera"
            />
          </div>
          <div className="mb-10 lg:mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Connect with potential customers
            </h2>
            <h3 className="text-brand-purple">Launching soon</h3>
          </div>
        </div>
        <div className="lg:row-span-3 flex justify-center items-center pb-6 lg:pb-0">
          <div className="macbook w-full">
            <div className="screen">
              <div
                className="viewport"
                style={{
                  backgroundColor: "#1C0F13",
                  backgroundImage: "url('images/leadsparkr-coming-soon.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <!-- <img src="images/screencapture-glaciera-2022-01-20-20_36_31.png"> --> */}
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
        </div>
        <div className="lg:row-span-2 flex flex-col items-center lg:items-start">
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            We know how important it is for your business to capture customer
            leads. Whether it is through interactions with your content or
            reaching out through a contact form Leadsparkr will help make sure
            you don’t miss out on these potential customers.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            More information coming soon.
          </p>
          <ProjectCta
            buttonLink="https://www.leadsparkr.com/"
            buttonText="View Project"
          />
        </div>
      </div>
    </div>
  );
}
