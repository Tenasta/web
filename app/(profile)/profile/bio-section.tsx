import { AiFillGithub, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";

export default function BioSection() {
  return (
    <section className="a4:grid a4:grid-cols-3 md:border-b md:border-gray-300 pb-4 md:py-10">
      <div className="flex flex-col a4:flex-row a4:col-span-2">
        <div className="mr-4 flex-shrink-0  self-center">
          <img
            className="inline-block h-24 w-24 rounded-full"
            src="/images/avatar.jpg"
            alt="Headshot of Nick"
          />
        </div>
        <div className="text-center a4:text-left self-center">
          <h4 className="text-xl md:text-3xl">Nicholas Martin-Kruck</h4>
          <p className="mt-1 text-gray-500 mb-4">Technical Leader</p>
        </div>
      </div>
      <div className="md:border-l-2 border-gray-300 a4:pl-4 md:ml-4 text-gray-600">
        <div className="flex flex-row-reverse justify-center a4:flex-row a4:justify-end a4:mb-4">
          <p>
            <a target="_blank" href="mailto:nick@tenasta.com">
              nick@tenasta.com
            </a>
          </p>
          <div className="hidden a4:block self-center pl-6">
            <AiOutlineMail className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center a4:flex-row a4:justify-end a4:mb-4">
          <p>
            <a target="_blank" href="https://github.com/nickmartink">
              github.com/nickmartink
            </a>
          </p>
          <div className="hidden a4:block self-center pl-6">
            <AiFillGithub className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center a4:flex-row a4:justify-end a4:mb-4">
          <p>+44 7595494939</p>
          <div className="hidden a4:block self-center pl-6">
            <AiOutlineMobile className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
