export type Student = {
  name: string;
  matricNumber: string;
  department: string;
};

export type Course = {
  code: string;
  title: string;
};

export type Assignment = {
  id: number;
  title: string;
  courseCode: string;
  completed: boolean;
};