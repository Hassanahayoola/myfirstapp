import Image from "next/image";
import { student } from "../data";

export default function StudentProfile() {
  return (
    <section className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
      <Image
        src="/avatar.svg"
        alt={`Avatar of ${student.name}`}
        width={80}
        height={80}
        className="h-20 w-20 shrink-0 rounded-full ring-4 ring-indigo-100"
      />
      <div>
        <h2 className="text-lg font-semibold">{student.name}</h2>
        <p className="text-sm text-gray-500">
          Matric No: {student.matricNumber}
        </p>
        <span className="mt-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
          {student.department}
        </span>
      </div>
    </section>
  );
}