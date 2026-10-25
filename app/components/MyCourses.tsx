export default function MyCourses() {
  const courses = [
    "CYB 201 - Network Security",
    "CYB 203 - Introduction to Cryptography",
    "CSC 205 - Data Structures",
    "GST 211 - Communication Skills",
  ];

  return (
    <section>
      <h2>My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </section>
  );
}