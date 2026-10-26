import { courses } from "../data";

export default function MyCourses() {
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
