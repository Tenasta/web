export default function ProfileSection() {
  return (
    <div className="py-6  border-b-2 border-gray-300">
      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-2 mb-4">
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
        <div className="md:border-l-2 md:border-gray-300 md:pl-4 md:ml-4 text-gray-600">
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            <div className="text-sm">Frontend</div>
            <div className="col-span-2">React / Next / Vue / JS</div>
            <div className="text-sm">Backend</div>
            <div className="col-span-2">Node.js / TypeScript / PHP</div>
            <div className="text-sm">Database</div>
            <div className="col-span-2">PostgreSQL / MySQL / NoSQL</div>
            <div className="text-sm">Other</div>
            <div className="col-span-2">
              AWS / Docker / Digital Ocean / IaC / CI/CD / gRPC / REST / GraphQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
