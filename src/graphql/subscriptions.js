/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
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
export const onCreateEmployeeProject = /* GraphQL */ `
  subscription OnCreateEmployeeProject(
    $filter: ModelSubscriptionEmployeeProjectFilterInput
  ) {
    onCreateEmployeeProject(filter: $filter) {
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
export const onUpdateEmployeeProject = /* GraphQL */ `
  subscription OnUpdateEmployeeProject(
    $filter: ModelSubscriptionEmployeeProjectFilterInput
  ) {
    onUpdateEmployeeProject(filter: $filter) {
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
export const onDeleteEmployeeProject = /* GraphQL */ `
  subscription OnDeleteEmployeeProject(
    $filter: ModelSubscriptionEmployeeProjectFilterInput
  ) {
    onDeleteEmployeeProject(filter: $filter) {
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
