import Image from "next/image";
import { student } from "../data";

export default function WelcomeBanner() {
  const firstName = student.name.split(" ")[0];

  return (
    <section className="flex items-center justify-between overflow-hidden rounded-2xl bg-linear-to-r from-indigo-600 to-indigo-400 text-white shadow-sm">
      <div className="p-6 sm:p-8">
        <p className="text-sm font-medium text-indigo-100">Welcome back</p>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
          Hello, {firstName}!
        </h2>
        <p className="mt-2 max-w-md text-indigo-100">
          Keep an eye on your courses and assignments, and stay ahead of your
          deadlines.
        </p>
      </div>
      <Image
        src="/study-illustration.svg"
        alt="Illustration of a laptop with a security shield and a stack of books"
        width={400}
        height={300}
        className="hidden h-40 w-auto sm:block md:h-48"
      />
    </section>
  );
}
