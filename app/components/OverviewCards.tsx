import { ClipboardList, Clock, CheckCircle2 } from "lucide-react";
import { assignments } from "../data";

export default function OverviewCards() {
  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(
    (assignment) => assignment.completed
  ).length;
  const pendingAssignments = totalAssignments - completedAssignments;

  const cards = [
    {
      label: "Total Assignments",
      value: totalAssignments,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      Icon: ClipboardList,
    },
    {
      label: "Pending Assignments",
      value: pendingAssignments,
      color: "text-amber-500",
      bg: "bg-amber-100",
      Icon: Clock,
    },
    {
      label: "Completed Assignments",
      value: completedAssignments,
      color: "text-green-600",
      bg: "bg-green-100",
      Icon: CheckCircle2,
    },
  ];

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold">Overview</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${card.bg} ${card.color}`}
            >
              <card.Icon size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                {card.label}
              </h3>
              <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}