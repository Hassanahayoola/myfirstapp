export default function OverviewCards() {
  const totalAssignments = 12;
  const pendingAssignments = 5;
  const completedAssignments = 7;

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
