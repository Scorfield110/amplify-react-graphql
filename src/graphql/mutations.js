/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      documents
      employee
      status
      start_timestamp
      end_timestamp
      employees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      documents
      employee
      status
      start_timestamp
      end_timestamp
      employees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      documents
      employee
      status
      start_timestamp
      end_timestamp
      employees {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      role
      linemanager
      capacity
      EmployeeToProjects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      role
      linemanager
      capacity
      EmployeeToProjects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      firstname
      lastname
      username
      password
      role
      linemanager
      capacity
      EmployeeToProjects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEmployeeProject = /* GraphQL */ `
  mutation CreateEmployeeProject(
    $input: CreateEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    createEmployeeProject(input: $input, condition: $condition) {
      id
      projectID
      employeeID
      project {
        id
        name
        documents
        employee
        status
        start_timestamp
        end_timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      employee {
        id
        firstname
        lastname
        username
        password
        role
        linemanager
        capacity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEmployeeProject = /* GraphQL */ `
  mutation UpdateEmployeeProject(
    $input: UpdateEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    updateEmployeeProject(input: $input, condition: $condition) {
      id
      projectID
      employeeID
      project {
        id
        name
        documents
        employee
        status
        start_timestamp
        end_timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      employee {
        id
        firstname
        lastname
        username
        password
        role
        linemanager
        capacity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEmployeeProject = /* GraphQL */ `
  mutation DeleteEmployeeProject(
    $input: DeleteEmployeeProjectInput!
    $condition: ModelEmployeeProjectConditionInput
  ) {
    deleteEmployeeProject(input: $input, condition: $condition) {
      id
      projectID
      employeeID
      project {
        id
        name
        documents
        employee
        status
        start_timestamp
        end_timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      employee {
        id
        firstname
        lastname
        username
        password
        role
        linemanager
        capacity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
