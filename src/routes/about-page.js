import Team from "../components/about/team";
import TeamHeader from "../components/about/team-header";

export default function AboutPage() {
  return (
    <div className="About">
      <TeamHeader />
      <Team />
    </div>
  );
}

// about page was created by adapting content from following page into react
// https://bootstrapious.com/p/about-us-page
