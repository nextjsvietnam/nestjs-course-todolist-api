# NestJS Course TodoList API

## Requirements

![TodoList Api](https://github.com/misostack/nestjs2024/assets/31009750/c028d2be-2440-44f6-8044-5f3561cd9182)

## Analyze

- User Types: Guess, User, Admin
- Entities: User, Task

### Prisma ORM

```sh
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```

```sh
npx prisma migrate dev --name init
npm install @prisma/client
```

### Prisma Ref

- [Configuration](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql)

- [Data Model](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#introspection-and-migration)

- [Data type ref](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#examples-1)
