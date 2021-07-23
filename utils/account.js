import axios from "axios";

const updateToken = async (email, accessToken) => {
	const res = await axios.put(
		`http://localhost:4000/api/user/${email}/accesstoken`,
		{
			accessToken,
		},
	);
	if (res) {
		console.log("msg", res);
	}
};

export default updateToken;
