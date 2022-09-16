# HR Software

## Development server

Run `nx serve` for a dev server. Navigate to http://localhost:3333/graphql. The app will automatically reload if you change any of the source files.

## Build

Run `nx build` to build the project.

## Tech Stack

This Project has been built using following TechStack.

| Tech        | Url                                         |
| ----------- | ------------------------------------------- |
| NestJs      | https://docs.nestjs.com/techniques/database |
| TypeORM     | https://typeorm.io/                         |
| GraphQl     | https://graphql.org/                        |
| PostGresSql | https://www.postgresql.org/docs/            |

### Created Tables using TypeORM synchronisation:-

```sh
Employee
Department
Position
Project
project_employess_employee
```

### Relations:-

```sh
Employee-Position:-(Many to One)
```

```sh
Employee-Department(Many to One)
```

```sh
Employee-Project(Many to Many)
```

```sh
Position-Employee:-(One to Many)
```

```sh
Department-Employee(One to Many)
```

```sh
Project-Employee(Many to Many)
```

### Task List Employee:-

```sh
1. Create Employee Records
2. Update Employee Records
3. Fetch single Employee Record with relation of other tables
4. Get all Employee
5. Delete Employee
```

### Task List :-

#### Employee

```sh
1. Create Employee Records
2. Update Employee Records
3. Fetch single Employee Record with relation of other tables
4. Get all Employee
5. Delete Employee
```

#### Department

```sh
1. Create Department Records
2. Update Department Records
3. Fetch single Department Record with relation of other tables
4. Get all Department
5. Delete Department
```

#### Position

```sh
1. Create Position Records
2. Update Position Records
3. Fetch single Position Record with relation of other tables
4. Get all Position
5. Delete Position
```

#### Project

```sh
1. Create Project Records
2. Get all Projects
```

#### GRAPHQL OUTPUT SCREENSHOTS

![Alt text](hr\apps\img\createEmployee.png?raw=true)

## Created By

#### @Upasana Tailor

#### upasanatailor90@gmail.com
