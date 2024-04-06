import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export const extendedPrismaClient = new PrismaClient().$extends({
  query: {
    user: {
      create: async ({ args, query }) => {
        if (args.data.password) {
          args.data.password = bcrypt.hashSync(args.data.password, 10);
        }
        return query(args);
      },
    },
  },
});

export type ExtendedPrismaClient = typeof extendedPrismaClient;
