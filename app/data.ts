import type { Student, Course, Assignment } from "./types";

export const student: Student = {
  name: "Ada Okafor",
  matricNumber: "CSC/2024/001",
  department: "Cybersecurity",
};

export const courses: Course[] = [
  { code: "CYB 201", title: "Network Security" },
  { code: "CYB 203", title: "Introduction to Cryptography" },
  { code: "CSC 205", title: "Data Structures" },
  { code: "GST 211", title: "Communication Skills" },
];

export const assignments: Assignment[] = [
  { id: 1, title: "Firewall rules worksheet", courseCode: "CYB 201", completed: true },
  { id: 2, title: "Packet analysis lab", courseCode: "CYB 201", completed: true },
  { id: 3, title: "Intrusion detection essay", courseCode: "CYB 201", completed: false },
  { id: 4, title: "Caesar cipher exercise", courseCode: "CYB 203", completed: true },
  { id: 5, title: "Hashing report", courseCode: "CYB 203", completed: false },
  { id: 6, title: "Public key quiz", courseCode: "CYB 203", completed: true },
  { id: 7, title: "Linked list implementation", courseCode: "CSC 205", completed: true },
  { id: 8, title: "Stack and queue problems", courseCode: "CSC 205", completed: false },
  { id: 9, title: "Binary tree traversal", courseCode: "CSC 205", completed: true },
  { id: 10, title: "Sorting algorithms test", courseCode: "CSC 205", completed: false },
  { id: 11, title: "Report writing exercise", courseCode: "GST 211", completed: true },
  { id: 12, title: "Presentation outline", courseCode: "GST 211", completed: false },
];