import { Fragment } from "react";

const items = [
  {
    title: "Tech Lead",
    date: "Feb 23 - April 23",
    company: "Glaciera",
    location: "Remote, Contract",
    description: [
      "A short project involving modernising and updating existing infrastructure and CI/CD pipeline. Using Pulumi IaC to orchestrate AWS Infrastructure. CloudWatch monitoring with slack integration for alerts. GitHub Actions was utilised to manage source control flows and deployment processes.",
    ],
  },
  {
    title: "Lead Software Engineer",
    date: "Jul 22 - Jan 23",
    company: "Let's Do This",
    location: "London, Contract",
    description: [
      "Tech lead working in a growth team on data-led experiments to drive booking metrics. Subsequently, after a business strategy adjustment our team shifted towards collaborating with other teams to rapidly build core product functionality - bringing expected delivery of the initiative to within the contractual deadline of Q1 start. This enabled key B2B sales and existing event organiser satisfaction.",
      "I worked across several different microservices to deliver end to end functionality from end-user facing experiments/features to platform feature epics. Next.Js frontend <> GraphQL <> gRPC <> Node.JS microservices <> MongoDB.",
    ],
  },
  {
    title: "Interim Tech Lead",
    date: "Oct 20 - Feb 22",
    company: "Glaciera",
    location: "London/Remote, Contract",
    description: [
      "As intertim tech lead I was brought in to lead (hands-on) an under performing offshore team working on a PHP/Vue/AWS codebase. Upon joining (after an extended period of missed deliveries and expanding costs) I focussed the team on a core set of features to enable a timely delivery and reduced costs.",
      "Working closely with the founders on strategy/roadmap, we brought development in-house and successfully delivered an MVP SaaS product within budget to the Jewellery Business space using Stripe subscriptions/checkout. Bespoke SPA & API, SEO, Analytics, Stripe payments, GA dashboard.",
    ],
  },
  {
    title: "Contract/Consulting",
    date: "From Jun 20",
    company: "Tenasta Ltd",
    location: "London/Remote",
    description: [
      "Technology consulting, contract software engineering and interim leadership roles. Primarily working with React, Vue, Laravel and Node codebases in AWS/DO.",
    ],
  },
  {
    title: "Head of Engineering",
    date: "Sept 17 - Apr 20",
    company: "Rush Partners Ltd",
    location: "London/Oslo/Malta",
    description: [
      "Working directly with the group CEO & CTO following a merger I was tasked with building a product & technology team to work across several brands/projects in the business. I recruited and managed a team of 20+ across Engineering, Product and Data. Through establishing recruitment processes, cross-functional teams, professional development plans, internal processes etc. we built a strong remote/hybrid engineering & product culture.",
    ],
  },
  {
    title: "Co-Founder & CTO",
    date: "Sept 17 - Apr 20",
    company: "FanTech",
    location: "London/Oslo/Malta",
    description: [
      "In conjunction with my HoE role and within the Rush group I founded & built a B2B acquisition & engagement platform, for the i-gaming/sports sector. As a group company it was built initially to serve internal group brands, incorporating fantasy and free to play games before launching as an external B2B product. A PnP JS widget using React, Storybook, Codeship, Symfony backend/CMS on AWS fargate & lambda.",
      "The role involved coordinating product development while ensuring compliance and leading applications for necessary industry licenses. Additionally, working internally to develop a B2B sales and marketing strategy for the product to go to market.",
    ],
  },
  {
    title: "Co-Founder & CTO",
    date: "Sept 13 - Sept 17",
    company: "FantasyBet",
    location: "Tromsø/Bristol/London",
    description: [
      "Technical co-founder of an award winning Fantasy Football platform (Best Fantasy product 2015 betting on football awards). We set out to revolutionise fantasy football - bringing daily, weekly and season long fantasy to Football fans. I built out the product as a solo engineer together with a digital agency creating a strong identity which football fans loved and kept coming back to. Acquired by Rush Partners in 2017",
    ],
  },
  {
    title: "Software Engineer",
    date: "Sept 13 - Apr 14",
    company: "Eagle Eye Solutions",
    location: "Guildford",
    description: [
      "Working in a fast paced agile development environment on the AIR and Core services platforms. Using PHP and JavaScript to create a unique product in the retail voucher, coupon and loyalty space. The business grew from ~15 to 50+ in a year, with an IPO and acquisition along the way.",
    ],
  },
  {
    title: "Web Developer",
    date: "Sept 10 - Apr 13",
    company: "Sound in Theory",
    location: "Exeter",
    description: [
      "Working in a creative digital agency specialising in web design, development, SEO and identity - contributing at every stage and in owning phases of the SDLC. Using .NET, PHP, JavaScript and other technologies to solve varied business and project demands.",
    ],
  },
];
export default function ExperienceSection() {
  return (
    <section className="experience py-6  border-b-2 border-gray-300">
      <h3 className="uppercase font-bold text-xl mb-4">Experience</h3>
      <div className="grid grid-cols-4 gap-x-2 gap-y-8">
        {items.map((item, index) => (
          <Fragment key={index}>
            <div>
              <h4 className="text-sm mb-2">{item.title}</h4>
              <p className="">{item.date}</p>
            </div>
            <div>
              <h4 className="mb-2">{item.company}</h4>
              <p className="text-xs">({item.location})</p>
            </div>
            <div className="details col-span-2">
              {item.description.map((desc, i) => (
                <p className="" key={i}>
                  {desc}
                </p>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
