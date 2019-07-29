import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
    createAccount: async (_, args) => {
            const { username, firstName, lastName, email, password } = args;
            const exist = await prisma.$exists.user({
                OR: [
                    {
                        username
                    },
                    {
                        email
                    }
                ]
            });

            if (exist) {
                throw Error("This username / email is already taken");
            }

            const user = await prisma.createUser({
                username, firstName, lastName, email, password
            });


            return user;

        }
    }
}