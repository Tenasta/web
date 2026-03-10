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
          <div className="flex flex-col gap-y-2 md:grid md:grid-cols-3 md:gap-x-2 md:gap-y-4 text-sm">
            <div className="font-bold">Frontend</div>
            <div className="md:col-span-2">React / Next.js</div>

            <div className="font-bold">Backend</div>
            <div className="md:col-span-2">Node.js / TypeScript</div>

            <div className="font-bold">Database</div>
            <div className="md:col-span-2">PostgreSQL / MySQL / NoSQL</div>

            <div className="font-bold">Other</div>
            <div className="md:col-span-2">
              AWS / Docker / IaC / CI/CD
            </div>

            <div className="font-bold">How I work</div>
            <div className="md:col-span-2">
              Pragmatic, data-informed, collaborative, biased to ship and
              iterate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
