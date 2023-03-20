type CtaProps = {
  buttonText?: string;
  buttonLink?: string;
};

export default function ProjectCta({ buttonText, buttonLink }: CtaProps) {
  return (
    <div className="mt-10 flex justify-center lg:justify-start">
      <div className="grid grid-flow-col gap-4">
        <a
          href="#contact"
          className="text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-dark-blue-400 hover:bg-brand-dark-blue-500 sm:px-8"
        >
          Contact Us
        </a>
        {buttonText && (
          <a
            href={buttonLink}
            target="_blank"
            className="text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-dark-blue bg-brand-sky-blue  hover:bg-brand-sky-blue-600 sm:px-8"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
