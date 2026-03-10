"use client";

import Image from "next/image";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { ObfuscatedEmail } from "@/components/shared/obfuscated-email";

export default function BioSection() {
  return (
    <section className="pb-4 md:border-b md:border-gray-300 md:py-10 a4:grid a4:grid-cols-3">
      <div className="flex flex-col a4:col-span-2 a4:flex-row">
        <div className="mr-4 flex-shrink-0 self-center">
          <Image
            className="inline-block h-24 w-24 rounded-full"
            src="/images/avatar.jpg"
            alt="Headshot of Nick"
            width={96}
            height={96}
          />
        </div>
        <div className="self-center text-center a4:text-left">
          <h4 className="text-xl md:text-3xl">Nicholas Martin-Kruck</h4>
          <p className="mb-4 mt-1 text-gray-500">Technical Leader</p>
        </div>
      </div>
      <div className="break-all border-gray-300 text-gray-600 md:ml-4 md:border-l-2 a4:pl-4 a4:pt-4">
        <div className="flex flex-row-reverse justify-center a4:mb-4 a4:flex-row a4:justify-end">
          <p>
            <ObfuscatedEmail className="text-gray-600 hover:underline" />
          </p>
          <div className="hidden self-center pl-6 a4:block">
            <AiOutlineMail className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center a4:mb-4 a4:flex-row a4:justify-end">
          <p>
            <a target="_blank" href="https://github.com/nickmartink">
              github.com/nickmartink
            </a>
          </p>
          <div className="hidden self-center pl-6 a4:block">
            <AiFillGithub className="inline-block h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
