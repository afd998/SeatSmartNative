/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  chartID: string,
  _version?: number | null,
};

export type ModelGroupConditionInput = {
  chartID?: ModelIDInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  Students?: ModelGroupStudentConnection | null,
  chartID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelGroupStudentConnection = {
  __typename: "ModelGroupStudentConnection",
  items:  Array<GroupStudent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type GroupStudent = {
  __typename: "GroupStudent",
  id: string,
  groupID: string,
  studentID: string,
  group: Group,
  student: Student,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Student = {
  __typename: "Student",
  id: string,
  groups?: ModelGroupStudentConnection | null,
  classID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateGroupInput = {
  id: string,
  chartID?: string | null,
  _version?: number | null,
};

export type DeleteGroupInput = {
  id: string,
  _version?: number | null,
};

export type CreateChartInput = {
  id?: string | null,
  classID: string,
  _version?: number | null,
};

export type ModelChartConditionInput = {
  classID?: ModelIDInput | null,
  and?: Array< ModelChartConditionInput | null > | null,
  or?: Array< ModelChartConditionInput | null > | null,
  not?: ModelChartConditionInput | null,
};

export type Chart = {
  __typename: "Chart",
  id: string,
  Groups?: ModelGroupConnection | null,
  classID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateChartInput = {
  id: string,
  classID?: string | null,
  _version?: number | null,
};

export type DeleteChartInput = {
  id: string,
  _version?: number | null,
};

export type CreateClassInput = {
  id?: string | null,
  teacherID: string,
  _version?: number | null,
};

export type ModelClassConditionInput = {
  teacherID?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  Students?: ModelStudentConnection | null,
  Charts?: ModelChartConnection | null,
  teacherID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChartConnection = {
  __typename: "ModelChartConnection",
  items:  Array<Chart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateClassInput = {
  id: string,
  teacherID?: string | null,
  _version?: number | null,
};

export type DeleteClassInput = {
  id: string,
  _version?: number | null,
};

export type CreateStudentInput = {
  id?: string | null,
  classID: string,
  _version?: number | null,
};

export type ModelStudentConditionInput = {
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type UpdateStudentInput = {
  id: string,
  classID?: string | null,
  _version?: number | null,
};

export type DeleteStudentInput = {
  id: string,
  _version?: number | null,
};

export type CreateTeacherInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelTeacherConditionInput = {
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  Classes?: ModelClassConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateTeacherInput = {
  id: string,
  _version?: number | null,
};

export type DeleteTeacherInput = {
  id: string,
  _version?: number | null,
};

export type CreateGroupStudentInput = {
  id?: string | null,
  groupID: string,
  studentID: string,
  _version?: number | null,
};

export type ModelGroupStudentConditionInput = {
  groupID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  and?: Array< ModelGroupStudentConditionInput | null > | null,
  or?: Array< ModelGroupStudentConditionInput | null > | null,
  not?: ModelGroupStudentConditionInput | null,
};

export type UpdateGroupStudentInput = {
  id: string,
  groupID?: string | null,
  studentID?: string | null,
  _version?: number | null,
};

export type DeleteGroupStudentInput = {
  id: string,
  _version?: number | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  chartID?: ModelIDInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelChartFilterInput = {
  id?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelChartFilterInput | null > | null,
  or?: Array< ModelChartFilterInput | null > | null,
  not?: ModelChartFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGroupStudentFilterInput = {
  id?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  and?: Array< ModelGroupStudentFilterInput | null > | null,
  or?: Array< ModelGroupStudentFilterInput | null > | null,
  not?: ModelGroupStudentFilterInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChartMutationVariables = {
  input: CreateChartInput,
  condition?: ModelChartConditionInput | null,
};

export type CreateChartMutation = {
  createChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChartMutationVariables = {
  input: UpdateChartInput,
  condition?: ModelChartConditionInput | null,
};

export type UpdateChartMutation = {
  updateChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChartMutationVariables = {
  input: DeleteChartInput,
  condition?: ModelChartConditionInput | null,
};

export type DeleteChartMutation = {
  deleteChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGroupStudentMutationVariables = {
  input: CreateGroupStudentInput,
  condition?: ModelGroupStudentConditionInput | null,
};

export type CreateGroupStudentMutation = {
  createGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGroupStudentMutationVariables = {
  input: UpdateGroupStudentInput,
  condition?: ModelGroupStudentConditionInput | null,
};

export type UpdateGroupStudentMutation = {
  updateGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGroupStudentMutationVariables = {
  input: DeleteGroupStudentInput,
  condition?: ModelGroupStudentConditionInput | null,
};

export type DeleteGroupStudentMutation = {
  deleteGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGroupsQuery = {
  syncGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChartQueryVariables = {
  id: string,
};

export type GetChartQuery = {
  getChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChartsQueryVariables = {
  filter?: ModelChartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChartsQuery = {
  listCharts?:  {
    __typename: "ModelChartConnection",
    items:  Array< {
      __typename: "Chart",
      id: string,
      Groups?:  {
        __typename: "ModelGroupConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChartsQueryVariables = {
  filter?: ModelChartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChartsQuery = {
  syncCharts?:  {
    __typename: "ModelChartConnection",
    items:  Array< {
      __typename: "Chart",
      id: string,
      Groups?:  {
        __typename: "ModelGroupConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      Students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Charts?:  {
        __typename: "ModelChartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClassesQuery = {
  syncClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      Students?:  {
        __typename: "ModelStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Charts?:  {
        __typename: "ModelChartConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStudentsQuery = {
  syncStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeachersQuery = {
  syncTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      Classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGroupStudentQueryVariables = {
  id: string,
};

export type GetGroupStudentQuery = {
  getGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGroupStudentsQueryVariables = {
  filter?: ModelGroupStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupStudentsQuery = {
  listGroupStudents?:  {
    __typename: "ModelGroupStudentConnection",
    items:  Array< {
      __typename: "GroupStudent",
      id: string,
      groupID: string,
      studentID: string,
      group:  {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      student:  {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGroupStudentsQueryVariables = {
  filter?: ModelGroupStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGroupStudentsQuery = {
  syncGroupStudents?:  {
    __typename: "ModelGroupStudentConnection",
    items:  Array< {
      __typename: "GroupStudent",
      id: string,
      groupID: string,
      studentID: string,
      group:  {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      student:  {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    Students?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    chartID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChartSubscription = {
  onCreateChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChartSubscription = {
  onUpdateChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChartSubscription = {
  onDeleteChart?:  {
    __typename: "Chart",
    id: string,
    Groups?:  {
      __typename: "ModelGroupConnection",
      items:  Array< {
        __typename: "Group",
        id: string,
        chartID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    Students?:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Charts?:  {
      __typename: "ModelChartConnection",
      items:  Array< {
        __typename: "Chart",
        id: string,
        classID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    teacherID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    groups?:  {
      __typename: "ModelGroupStudentConnection",
      items:  Array< {
        __typename: "GroupStudent",
        id: string,
        groupID: string,
        studentID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    classID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        teacherID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGroupStudentSubscription = {
  onCreateGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGroupStudentSubscription = {
  onUpdateGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGroupStudentSubscription = {
  onDeleteGroupStudent?:  {
    __typename: "GroupStudent",
    id: string,
    groupID: string,
    studentID: string,
    group:  {
      __typename: "Group",
      id: string,
      Students?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      chartID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    student:  {
      __typename: "Student",
      id: string,
      groups?:  {
        __typename: "ModelGroupStudentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      classID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
