export default function EducationSection() {
  return (
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
          University of Exeter // <strong>MSc</strong> International Management
          & Marketing
        </p>
        <p className="mb-2">
          University of Exeter // <strong>BEng</strong> Electronic Engineering &
          Management
        </p>
      </div>
    </div>
  );
}
