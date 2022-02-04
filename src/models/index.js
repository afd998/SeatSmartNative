// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Group, Student, Chart, Class, Teacher, GroupStudent } = initSchema(schema);

export {
  Group,
  Student,
  Chart,
  Class,
  Teacher,
  GroupStudent
};