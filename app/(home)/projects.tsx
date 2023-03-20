import FantasybetProject from "./fantasybet-project";
import FantechProject from "./fantech-project";
import GlacieraProject from "./glaciera-project";
import LeadsparkrProject from "./leadsparkr-project";

export default function Projects() {
  return (
    <div id="projects" className="mt-12 py-20">
      <div className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-20">
            Some of our projects
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-center">
            <div className="flex justify-center p-5 mx-3 my-2 rounded-lg fill-current text-gray cursor-pointer bg-gray-50 transition ease-in-out duration-500 delay-50 hover:-translate-y-1 hover:scale-110">
              <img
                className="max-h-12 "
                src="./images/glaciera-logo.svg"
                alt="Glaciera"
              />
            </div>
            <div className="flex justify-center p-5 mx-3 my-2 rounded-lg cursor-pointer  transition ease-in-out duration-500 delay-50 hover:-translate-y-1 hover:scale-110">
              <img
                className="max-h-12 "
                src="./images/fantasybet-logo.svg"
                alt="FantasyBet"
              />
            </div>
            <div className="flex justify-center p-5 mx-3 my-2 bg-[#0E101C] rounded-lg cursor-pointer transition ease-in-out duration-500 delay-50 hover:-translate-y-1 hover:scale-110">
              <img
                className="max-h-12 "
                src="./images/fantech-logo.svg"
                alt="FanTech"
              />
            </div>
            <div className="flex justify-center p-5 mx-3 my-2 fill-current bg-[#1C0F13] rounded-lg text-gray cursor-pointer  transition ease-in-out duration-500 delay-50 hover:-translate-y-1 hover:scale-110">
              <img
                className="max-h-12 "
                src="./images/leadsparkr-logo.svg"
                alt="leadsparkr"
              />
            </div>
          </div>
        </div>
        <GlacieraProject />
        <FantasybetProject />
        <FantechProject />
        <LeadsparkrProject />
      </div>
    </div>
  );
}
