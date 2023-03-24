import { AiFillGithub, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import Experience from "./experience";
export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="px-6 drop-shadow-2xl bg-gray-50 border border-gray-100">
        <div className="grid grid-cols-3 border-b border-gray-300 py-10">
          <div className="flex col-span-2">
            <div className="mr-4 flex-shrink-0  self-center">
              <img
                className="inline-block h-24 w-24 rounded-full"
                src="/images/avatar.jpg"
                alt=""
              />
            </div>
            <div className=" self-center">
              <h4 className="text-3xl">Nicholas Martin-Kruck</h4>
              <p className="mt-1 text-gray-500">Technical Leader</p>
            </div>
          </div>
          <div className="border-l-2 border-gray-300 pl-4 ml-4 text-gray-600">
            <div className="flex justify-end mb-4">
              <p>nick@tenasta.com</p>
              <div className="self-center pl-8">
                <AiOutlineMail className="inline-block h-6 w-6 rounded-full" />
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <p>github.com/nickmartink</p>
              <div className="self-center pl-8">
                <AiFillGithub className="inline-block h-6 w-6 rounded-full" />
              </div>
            </div>

            <div className="flex justify-end">
              <p>+44 7595494939</p>
              <div className="self-center pl-8">
                <AiOutlineMobile className="inline-block h-6 w-6 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6  border-b-2 border-gray-300">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h3 className="uppercase font-bold text-xl mb-4">Profile</h3>
              <p className=" leading-7 mb-2">
                I am a hands on technical leader with a broad skillset and
                experience from seed through growth stages. I work hands-on
                across the full stack and at any stage in the software
                development life cycle.
              </p>
              <p className=" leading-7">
                I am passionate about solving the real needs of end-users to
                achieve product success; delivering excellent user experiences
                through analytics and data driven decisions in a pragmatic way.
                Whatever the role I enjoy being part of a team or having broader
                responsibilities and having a positive impact on products and
                people.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 ml-4 text-gray-600">
              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                <div className="text-sm">Frontend</div>
                <div className="col-span-2">React / Next / Vue / JS</div>
                <div className="text-sm">Backend</div>
                <div className="col-span-2">Node.js / TypeScript / PHP</div>
                <div className="text-sm">Database</div>
                <div className="col-span-2">PostgreSQL / MySQL / NoSQL</div>
                <div className="text-sm">Other</div>
                <div className="col-span-2">
                  AWS / Docker / Digital Ocean / IaC / CI/CD / gRPC / REST /
                  GraphQL
                </div>
              </div>
            </div>
          </div>
        </div>
        <Experience />
        <div className="py-6 grid grid-cols-4 gap-x-4 gap-y-8">
          <div>
            <h3 className="uppercase font-bold text-xl mb-4">Education</h3>
          </div>
          <div>
            <h4 className="mb-2">2009 - 2010</h4>
            <h4 className="mb-2">2006 - 2009</h4>
          </div>
          <div className="col-span-2">
            <p className="mb-2">
              University of Exeter // <strong>MSc</strong> International
              Management & Marketing
            </p>
            <p className="mb-2">
              University of Exeter // <strong>BEng</strong> Electronic
              Engineering & Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
