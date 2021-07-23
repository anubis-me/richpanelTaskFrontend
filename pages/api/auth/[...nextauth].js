import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import updateToken from "../../../utils/account";

export default NextAuth({
	providers: [
		Providers.Facebook({
			clientId: process.env.APP_ID,
			clientSecret: process.env.APP_SECRET,
		}),
	],
	debug: false && process.env.NODE_ENV === "development",
	callbacks: {
		async signIn(user, account, profile) {
			updateToken(user.email, account.accessToken);
			return true;
		},
	},
	session: { jwt: true },
	jwt: {
		secret: process.env.JWT_SECRET,
	},
	database: process.env.MONGO_URI,
});
