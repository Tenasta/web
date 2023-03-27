import ExperienceSection from "./experience-section";
import ProfileSection from "./profile-section";
import BioSection from "./bio-section";
import EducationSection from "./education-section";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-section">
        <BioSection />
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
