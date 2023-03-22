import ProjectCta from "@/components/project-cta";

export default function FantechProject() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-4">
        <div className="flex flex-col">
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              className="max-h-12 "
              src="./images/fantech-logo-mono.svg"
              alt="FanTech"
            />
          </div>
          <div className="mb-2">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Boosting brand awareness and customer engagement
            </h2>
          </div>
        </div>
        <div className="lg:row-span-3 mb-10 lg:order-first flex lg:pt-8">
          <div className="macbook w-full">
            <div className="screen">
              <div
                className="viewport"
                style={{
                  backgroundImage:
                    "url('images/FanTech - Design - Home - Tablet@2x.png')",
                }}
              >
                <img src="images/FanTech - Design - Home - Tablet@2x.png" />
              </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
        </div>

        <div className="lg:row-span-2 flex flex-col items-center lg:items-start">
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            As a co-founder of FanTech we dreamed of one thing – to make sports
            better. Through innovative games and entertaining interactive
            products we sought to get fans more engaged in sports. The industry
            leading Fantasy sports platform offered a plug-and-play integration
            to media and gaming companies.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            The innovative and fun games we created allowed businesses and
            brands to bring their customers closer - driving engagement. The
            tools we offered allowed powerful marketing campaigns - boosting
            customer acquisition, retention and activity leading to increased
            revenue.
          </p>

          <ProjectCta />
        </div>
      </div>
    </div>
  );
}
