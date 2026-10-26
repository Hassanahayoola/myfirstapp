import { assignments } from "../data";

export default function OverviewCards() {
  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(
    (assignment) => assignment.completed
  ).length;
  const pendingAssignments = totalAssignments - completedAssignments;

  return (
    <section>
      <h2>Overview</h2>

      <div>
        <h3>Total Assignments</h3>
        <p>{totalAssignments}</p>
      </div>

      <div>
        <h3>Pending Assignments</h3>
        <p>{pendingAssignments}</p>
      </div>

      <div>
        <h3>Completed Assignments</h3>
        <p>{completedAssignments}</p>
      </div>
    </section>
  );
}