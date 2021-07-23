import React, { useState } from "react";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import Sidebar from "../../components/base/Layout/Sidebar";

function Dashboard() {
	const [session, loading] = useSession();
	const [active, setActive] = useState("");
	const router = useRouter();
	if (!session && !loading) {
		router.push("/");
	}
	return (
		<div>
			<Sidebar active={active} setActive={setActive} />
		</div>
	);
}

export default Dashboard;
