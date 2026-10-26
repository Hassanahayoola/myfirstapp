import { assignments } from "../data";

export default function AssignmentsList() {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">Assignments</h2>
      <ul className="divide-y divide-gray-100 rounded-xl bg-white shadow-sm">
        {assignments.map((assignment) => (
          <li
            key={assignment.id}
            className="flex items-center justify-between gap-4 p-4"
          >
            <div>
              <p className="font-medium">{assignment.title}</p>
              <p className="text-sm text-gray-500">{assignment.courseCode}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                assignment.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {assignment.completed ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
