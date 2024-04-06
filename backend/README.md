## Description

Backend for social app

## Installation

```bash
$ yarn install
```

## Running the app

Create a `.env` file in the root of the project by copying the `.env.example` file and filling in the necessary values.
Migrate prisma schema to database by running `npx prisma migrate dev`

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
