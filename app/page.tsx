import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import OverviewCards from "./components/OverviewCards";

export default function Home() {
  return (
    <main>
      <Header />
      <StudentProfile />
      <OverviewCards />
    </main>
  );
}
