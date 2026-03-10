export default function ProfileSection() {
  return (
    <section className="pb-4 md:pt-6 md:pb-6 border-b-2 border-gray-300">
      <div className="a4:grid a4:grid-cols-3">
        <div className="a4:col-span-2 mb-4">
          <h3 className="uppercase font-bold text-xl mb-4">Profile</h3>
          <p className="leading-7 mb-2">
            I am a hands-on technical leader with broad experience from seed
            through growth stages. I work across the full stack and at every
            stage of the software development lifecycle, from shaping
            architecture and product direction to debugging production issues.
          </p>
          <p className="leading-7">
            I care most about solving real user problems and turning that into
            durable product outcomes. I lean on analytics and data-informed
            decisions, but stay pragmatic and delivery-focused: shipping,
            measuring, and iterating with the team. Whatever the role, I enjoy
            collaborating closely with founders, product and design, mentoring engineers,
            and having a positive impact on both the product and the people
            building it.
          </p>
        </div>
        <div className="md:border-l-2 md:border-gray-300 md:pl-4 a4:ml-4 a4:pt-4 md:pt-0 text-gray-600">
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm leading-6">
            <span className="font-bold shrink-0">Frontend</span>
            <span>React / Next.js</span>
            <span className="font-bold shrink-0">Backend</span>
            <span>Node.js / TypeScript</span>
            <span className="font-bold shrink-0">Database</span>
            <span>PostgreSQL / MySQL / NoSQL</span>
            <span className="font-bold shrink-0">Other</span>
            <span>AWS / Docker / IaC / CI/CD</span>
            <span className="font-bold shrink-0">How I work</span>
            <span>Pragmatic, data-informed, collaborative, biased to ship and iterate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
