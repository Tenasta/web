import LeadIn from "./lead-in";
import Nav from "./nav";

export default function Header({}) {
  return (
    <header
      className="relative mb-44 sm:md-40 md:mb-20 text-white"
      style={{ minHeight: "600px" }}
    >
      <div
        className="-skew-y-6 -translate-y-28 absolute bg-gradient-to-tr from-brand-purple to-brand-sky-blue via-[#52b3fd] left-0 top-0 -mt-10 transform "
        style={{ zIndex: "-1", width: "100%", height: "140%" }}
      ></div>
      <Nav />
      <div className="lead-in">
        <LeadIn />
      </div>
    </header>
  );
}
