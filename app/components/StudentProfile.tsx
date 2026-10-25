export default function StudentProfile() {
  const name = "Code Hijabi";
  const matricNumber = "24/COICT/CSS/001";
  const department = "Cybersecurity";

  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Matric Number: {matricNumber}</p>
      <p>Department: {department}</p>
    </section>
  );
}
