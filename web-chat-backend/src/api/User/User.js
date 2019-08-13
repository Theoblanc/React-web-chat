import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    rooms: ({ id }) => prisma.user({ id }).rooms(),
    roomsCount: ({ id }) =>
      prisma
        .roomsConnection({ where: { user: { id } } })
        .aggregate()
        .count() 
  }
};