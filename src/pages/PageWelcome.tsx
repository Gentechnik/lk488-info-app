import axios from "axios";
import { useState, useEffect } from "react";

const urlBackend = `https://lk488-info-app-backend.onrender.com`;

interface IFramework {
	name: string;
	url: string;
	description: string;
}

export const PageWelcome = () => {
	const [appName, setAppName] = useState(``);
	const [frameworks, setFrameworks] = useState<IFramework[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(urlBackend);
			setAppName(response.data.appName);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${urlBackend}/frameworks`);
			setFrameworks(response.data);
		})();
	});

	return (
		<>
			<p>This is the welcome Page</p>
			<p>APPNAME: {appName}</p>
			<div>
				FRAMEWORKS:
				<ul className="list-disc ml-6">
					{frameworks.map((framework, index) => {
						return (
							<li key={index} className="flex gap-3">
								<a
									href={framework.url}
									className="underline font-bold"
								>
									{framework.name}
								</a>
								<span>{framework.description}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
