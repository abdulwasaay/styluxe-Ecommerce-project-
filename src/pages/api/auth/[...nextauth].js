import { getByEmail, getByPassword } from "@/services/Formmethods";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials, req) {
                const {email,password}=credentials;
                const user = await getByEmail(email);

                    if (!user) {
                        throw new Error("User does not found!");
                    }

                    const userPassword = await getByPassword(password, user.password);

                    if (!userPassword) {
                        throw new Error("Incorrect password!");
                    }

                    return {
                        email,
                    };
            }
          })
    ],
}
export default NextAuth(authOptions)