import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);

	function closeSidebar() {
		setShowSidebar(false);
	}

	const links = [
		{
			name: "home",
			path: "/",
			icon: faHome,
		},
		{
			name: "recipes",
			path: "/recipes",
			icon: faList,
		},
		{
			name: "settings",
			path: "/settings",
			icon: faCog,
		},
	];

	return (
		<>
			<div className="navbar container">
				<a href="#!" className="logo">
					F<span>oo</span>d Hub
				</a>
				<div className="nav-links">
					{/* <a href="#!">Home</a>
					<a href="#!">Recipes</a>
					<a href="#!">Settings</a> */}
					{links.map((link) => (
						<a href="#!" key={link.name}>
							{link.name}
						</a>
					))}
				</div>
				<div
					onClick={() => setShowSidebar(!showSidebar)}
					className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
				>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
			{showSidebar && <Sidebar close={closeSidebar} links={links} />}
		</>
	);
}
