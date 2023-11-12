import { getByEmail, getByPassword } from "@/pages/api/services/Formmethods";
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
                const user = getByEmail(email);
                
                if(!user){
                    throw new Error("User doesnot found !");
                }
                const userPassword = await getByPassword(password,user.password)
                if(!userPassword){
                    throw new Error("Incorect password !");
                }
                return{
                    email
                }
            }
          })
    ],
}
export default NextAuth(authOptions)