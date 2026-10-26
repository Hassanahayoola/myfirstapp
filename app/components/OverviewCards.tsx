import { assignments } from "../data";

export default function OverviewCards() {
  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(
    (assignment) => assignment.completed
  ).length;
  const pendingAssignments = totalAssignments - completedAssignments;

  const cards = [
    { label: "Total Assignments", value: totalAssignments, color: "text-indigo-600" },
    { label: "Pending Assignments", value: pendingAssignments, color: "text-amber-500" },
    { label: "Completed Assignments", value: completedAssignments, color: "text-green-600" },
  ];

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">Overview</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{card.label}</h3>
            <p className={`mt-2 text-4xl font-bold ${card.color}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}