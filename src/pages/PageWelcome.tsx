import axios from "axios";
import { useState, useEffect } from "react";

export const PageWelcome = () => {
	const [appName, setAppName] = useState(`Test`);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`https://localhost:4899`);
		})();
	});

	return <p>This is the welcome page.</p>;
};
