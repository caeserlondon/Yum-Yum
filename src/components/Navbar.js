import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false);
	const location = useLocation();

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
				<Link to="/" className="logo">
					F<span>oo</span>d Hub
				</Link>
				<div className="nav-links">
					{links.map((link) => (
						<Link
							to={link.path}
							key={link.name}
							className={location.pathname === link.path ? "active" : ""}
						>
							{link.name}
						</Link>
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
