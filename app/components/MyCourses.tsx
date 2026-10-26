import { ShieldCheck, KeyRound, Database, MessagesSquare } from "lucide-react";
import { courses, assignments } from "../data";

const courseThemes = [
  { Icon: ShieldCheck, bg: "bg-indigo-100", color: "text-indigo-600", bar: "bg-indigo-600" },
  { Icon: KeyRound, bg: "bg-pink-100", color: "text-pink-600", bar: "bg-pink-500" },
  { Icon: Database, bg: "bg-amber-100", color: "text-amber-600", bar: "bg-amber-500" },
  { Icon: MessagesSquare, bg: "bg-emerald-100", color: "text-emerald-600", bar: "bg-emerald-500" },
];

export default function MyCourses() {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">My Courses</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map((course, index) => {
          const theme = courseThemes[index % courseThemes.length];
          const courseAssignments = assignments.filter(
            (assignment) => assignment.courseCode === course.code
          );
          const done = courseAssignments.filter(
            (assignment) => assignment.completed
          ).length;
          const total = courseAssignments.length;
          const percent = total === 0 ? 0 : Math.round((done / total) * 100);

          return (
            <div
              key={course.code}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.bg} ${theme.color}`}
                >
                  <theme.Icon size={24} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme.color}`}>
                    {course.code}
                  </p>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>
                  {done} of {total} assignments completed
                </span>
                <span className="font-medium text-gray-700">{percent}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className={`h-2 rounded-full ${theme.bar}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}