import type { Student } from "../types";

export default function StudentProfile() {
  const student: Student = {
    name: "Ada Okafor",
    matricNumber: "CSC/2024/001",
    department: "Cybersecurity",
  };

  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Matric Number: {student.matricNumber}</p>
      <p>Department: {student.department}</p>
    </section>
  );
}