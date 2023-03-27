export default function ProfileSection() {
  return (
    <section className="pb-4 md:pt-6 md:pb-6 border-b-2 border-gray-300">
      <div className="a4:grid a4:grid-cols-3">
        <div className="a4:col-span-2 mb-4">
          <h3 className="uppercase font-bold text-xl mb-4">Profile</h3>
          <p className=" leading-7 mb-2">
            I am a hands on technical leader with a broad skillset and
            experience from seed through growth stages. I work hands-on across
            the full stack and at any stage in the software development life
            cycle.
          </p>
          <p className=" leading-7">
            I am passionate about solving the real needs of end-users to achieve
            product success; delivering excellent user experiences through
            analytics and data driven decisions in a pragmatic way. Whatever the
            role I enjoy being part of a team or having broader responsibilities
            and having a positive impact on products and people.
          </p>
        </div>
        <div className="md:border-l-2 md:border-gray-300 md:pl-4 a4:ml-4 a4:pt-4 md:pt-0 text-gray-600">
          <div className="flex flex-col gap-y-2 md:grid md:grid-cols-3 md:gap-x-2 md:gap-y-4 text-sm">
            <div className="font-bold">Frontend</div>
            <div className="md:col-span-2">
              React / Next / Vue / JS <p className="text-xs">(10+ years)</p>
            </div>
            <div className="font-bold">Backend</div>
            <div className="md:col-span-2">
              Node.js / TypeScript / PHP <p className="text-xs">(10+ years)</p>
            </div>
            <div className="font-bold">Database</div>
            <div className="md:col-span-2">PostgreSQL / MySQL / NoSQL</div>
            <div className="font-bold">Other</div>
            <div className="md:col-span-2">
              AWS / Docker / Digital Ocean / IaC / CI/CD / gRPC / REST / GraphQL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
