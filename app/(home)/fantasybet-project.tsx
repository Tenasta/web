import ProjectCta from "@/components/project-cta";

export default function FantasybetProject() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
      <div className="md:grid md:grid-rows-auto md:grid-cols-2 md:gap-2">
        <div className="w-full flex flex-col justify-center lg:justify-start">
          <div className="flex justify-center lg:justify-start mb-2">
            <img
              className="max-h-12 "
              src="./images/fantasybet-logo-mono.svg"
              alt="FantasyBet"
            />
          </div>
          <div className="mb-10 lg:mb-4">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Innovation in fantasy football
            </h2>
            <h3 className="text-brand-purple">Award winning product</h3>
          </div>
        </div>
        <div className="md:row-span-5 flex justify-center items-center pb-6 lg:pb-0">
          {/* <!-- <img style="width:250px;" src="images/fantasybet-landing-page.png"> -->
            <!-- <video src="video/Screen Recording 2022-01-06 at 16.47.29.mov" autoplay
                width="300"></video> --> */}
          <div className="mock-mobile">
            <div className="mobile-screen">
              <div className="mobile-content">
                {/* <!-- height:1000px; background-image: url('images/fantasybet-landing-page.png'); background-position: 0 0; background-size: contain; --> */}
                <img
                  className="w-full"
                  src="images/Landing page - Design v1@2x.png"
                />
              </div>
            </div>
            <div className="mobile-frame"></div>
          </div>
        </div>
        <div className="md:row-span-4 flex flex-col items-center lg:items-start">
          <h3 className="text-xl my-4">Vision</h3>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Our vision was to enhance the experience of sport through
            innovative, fun and easy to play fantasy games. We believed that
            sport was more fun when you had your friends involved and something
            on the line. FantasyBet set out to change the way we play Fantasy –
            not just the end result but how you get there.
          </p>
          <h3 className="text-xl my-4">Key Areas</h3>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Some of the key elements to enhance the product experience were:
            Real time scoring and leaderboard updates for an immersive
            experience, top-notch UI and UX for a frictionless process for users
            to play, gamification elements to boost the entertainment value for
            fantasy managers and an authentic and true-to-sport interface.
          </p>
          <h3 className="text-xl my-4">Recognition</h3>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Our relentless commitment to a top-quality product and user
            experience paid off. With recognition coming through a best fantasy
            product award - beating out industry leading competitors.
          </p>

          <ProjectCta />
        </div>
      </div>
    </div>
  );
}
