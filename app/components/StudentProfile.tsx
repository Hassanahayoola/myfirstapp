import { student } from "../data";

export default function StudentProfile() {
  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Matric Number: {student.matricNumber}</p>
      <p>Department: {student.department}</p>
    </section>
  );
}