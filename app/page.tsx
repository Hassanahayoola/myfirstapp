import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import OverviewCards from "./components/OverviewCards";
import MyCourses from "./components/MyCourses";

export default function Home() {
  return (
    <main>
      <Header />
      <StudentProfile />
      <OverviewCards />
      <MyCourses />
    </main>
  );
}
