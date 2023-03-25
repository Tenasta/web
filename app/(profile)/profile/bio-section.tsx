import { AiFillGithub, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";

export default function BioSection() {
  return (
    <div className="md:grid md:grid-cols-3 border-b border-gray-300 py-10">
      <div className="flex flex-col md:flex-row md:col-span-2">
        <div className="mr-4 flex-shrink-0  self-center">
          <img
            className="inline-block h-24 w-24 rounded-full"
            src="/images/avatar.jpg"
            alt=""
          />
        </div>
        <div className="text-center md:text-left self-center">
          <h4 className="text-3xl">Nicholas Martin-Kruck</h4>
          <p className="mt-1 text-gray-500 mb-4">Technical Leader</p>
        </div>
      </div>
      <div className="md:border-l-2 border-gray-300 md:pl-4 md:ml-4 text-gray-600">
        <div className="flex flex-row-reverse justify-center md:flex-row md:justify-end md:mb-4">
          <p>nick@tenasta.com</p>
          <div className="hidden md:block self-center pl-6">
            <AiOutlineMail className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center md:flex-row md:justify-end md:mb-4">
          <p>github.com/nickmartink</p>
          <div className="hidden md:block self-center pl-6">
            <AiFillGithub className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center md:flex-row md:justify-end md:mb-4">
          <p>+44 7595494939</p>
          <div className="hidden md:block self-center pl-6">
            <AiOutlineMobile className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
