import ExperienceSection from "./experience-section";
import ProfileSection from "./profile-section";
import BioSection from "./bio-section";
import EducationSection from "./education-section";
export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="px-6 drop-shadow-2xl bg-gray-50 border border-gray-100">
        <BioSection />
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
