import React, { useState } from "react";
import "./styles.css";
const AccordionMenu = () => {
	const [expanded, setExpanded] = useState({});

	const toggleExpansion = (id) => {
		setExpanded({
			...expanded,
			[id]: !expanded[id],
		});
	};
	const menuItems = [
		{
			id: 1,
			title: "Pizza",
			items: ["Kebab pizza", "Kyckling pizza", "Salami och oliver pizza"],
		},
		{
			id: 2,
			title: "Kebab",
			items: [
				"Spaghetti Carbonara",
				"Chicken Parmesan",
				"Eggplant Rollatini",
			],
		},
		{
			id: 3,
			title: "Kyckling",
			items: ["Kycklingrulle", "Cannoli", "Chocolate Cake"],
		},
	];
	return (
		<div className="left-container">
			<div className="accordion-menu">
				{menuItems.map((item) => (
					<div className="accordion-item" key={item.id}>
						<div
							className="accordion-header"
							onClick={() => toggleExpansion(item.id)}
						>
							<div className="title">{item.title}</div>
						</div>
						<ul
							className={`accordion-list ${
								expanded[item.id] ? "expanded" : ""
							}`}
						>
							{item.items.map((menuItem, index) => (
								<li key={index}>{menuItem}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
export default AccordionMenu;
