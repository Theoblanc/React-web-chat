import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { username, password } = args;
      const user = await prisma.user({ username })
      const password2 = user.password
      if(password == password2) {
        return password2;
      }
       
    }
  }
};