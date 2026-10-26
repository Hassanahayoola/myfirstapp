import type { Course } from "../types";

export default function MyCourses() {
  const courses: Course[] = [
    { code: "CYB 201", title: "Network Security" },
    { code: "CYB 203", title: "Introduction to Cryptography" },
    { code: "CSC 205", title: "Data Structures" },
    { code: "GST 211", title: "Communication Skills" },
  ];

  return (
    <section>
      <h2>My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            {course.code} - {course.title}
          </li>
        ))}
      </ul>
    </section>
  );
}