import Header from "./components/Header";
import WelcomeBanner from "./components/WelcomeBanner";
import StudentProfile from "./components/StudentProfile";
import OverviewCards from "./components/OverviewCards";
import MyCourses from "./components/MyCourses";
import AssignmentsList from "./components/AssignmentsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <div className="mx-auto max-w-6xl space-y-6 p-6">
        <WelcomeBanner />
        <StudentProfile />
        <OverviewCards />
        <MyCourses />
        <AssignmentsList />
      </div>
    </main>
  );
}