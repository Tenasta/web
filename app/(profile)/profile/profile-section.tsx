export default function ProfileSection() {
  return (
    <section className="border-b-2 border-gray-300 pb-4 md:pb-6 md:pt-6">
      <div className="a4:grid a4:grid-cols-3">
        <div className="mb-4 a4:col-span-2">
          <h3 className="mb-4 text-xl font-bold uppercase">Profile</h3>
          <p className="mb-2 leading-7">
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
            collaborating closely with founders, product and design, mentoring
            engineers, and having a positive impact on both the product and the
            people building it.
          </p>
        </div>
        <div className="text-gray-600 md:border-l-2 md:border-gray-300 md:pl-4 md:pt-0 a4:ml-4 a4:pt-4">
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm leading-6">
            <span className="shrink-0 font-bold">Frontend</span>
            <span>React / Next.js</span>
            <span className="shrink-0 font-bold">Backend</span>
            <span>Node.js / TypeScript</span>
            <span className="shrink-0 font-bold">Database</span>
            <span>PostgreSQL / MySQL / NoSQL</span>
            <span className="shrink-0 font-bold">Other</span>
            <span>AWS / Docker / IaC / CI/CD</span>
            <span className="shrink-0 font-bold">How I work</span>
            <span>
              Pragmatic, data-informed, collaborative, biased to ship and
              iterate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
