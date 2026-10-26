import { student } from "../data";

export default function StudentProfile() {
  const initials = student.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
        {initials}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{student.name}</h2>
        <p className="text-sm text-gray-500">
          Matric No: {student.matricNumber}
        </p>
        <p className="text-sm text-gray-500">
          Department: {student.department}
        </p>
      </div>
    </section>
  );
}