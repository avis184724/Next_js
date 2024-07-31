import { connectDB } from "@/utils/database.js";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23liXqYNois3gt7dqq',
            clientSecret : 'ac23b7dd0fe0f4f12dadd1f0028c369aff5bc55e'
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);