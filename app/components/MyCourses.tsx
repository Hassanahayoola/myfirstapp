import { courses, assignments } from "../data";

export default function MyCourses() {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">My Courses</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map((course) => {
          const courseAssignments = assignments.filter(
            (assignment) => assignment.courseCode === course.code
          );
          const done = courseAssignments.filter(
            (assignment) => assignment.completed
          ).length;
          const total = courseAssignments.length;
          const percent = total === 0 ? 0 : Math.round((done / total) * 100);

          return (
            <div key={course.code} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-indigo-600">{course.code}</p>
              <h3 className="mt-1 text-lg font-semibold">{course.title}</h3>
              <p className="mt-3 text-sm text-gray-500">
                {done} of {total} assignments completed
              </p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-indigo-600"
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