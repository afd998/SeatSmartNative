import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupStudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Group {
  readonly id: string;
  readonly Students?: (GroupStudent | null)[];
  readonly chartID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Group, GroupMetaData>);
  static copyOf(source: Group, mutator: (draft: MutableModel<Group, GroupMetaData>) => MutableModel<Group, GroupMetaData> | void): Group;
}

export declare class Student {
  readonly id: string;
  readonly groups?: (GroupStudent | null)[];
  readonly classID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class Chart {
  readonly id: string;
  readonly Groups?: (Group | null)[];
  readonly classID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Chart, ChartMetaData>);
  static copyOf(source: Chart, mutator: (draft: MutableModel<Chart, ChartMetaData>) => MutableModel<Chart, ChartMetaData> | void): Chart;
}

export declare class Class {
  readonly id: string;
  readonly Students?: (Student | null)[];
  readonly Charts?: (Chart | null)[];
  readonly teacherID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Teacher {
  readonly id: string;
  readonly Classes?: (Class | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}

export declare class GroupStudent {
  readonly id: string;
  readonly group: Group;
  readonly student: Student;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GroupStudent, GroupStudentMetaData>);
  static copyOf(source: GroupStudent, mutator: (draft: MutableModel<GroupStudent, GroupStudentMetaData>) => MutableModel<GroupStudent, GroupStudentMetaData> | void): GroupStudent;
}