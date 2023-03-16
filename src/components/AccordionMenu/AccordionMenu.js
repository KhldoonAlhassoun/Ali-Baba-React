import React from "react";
import "./styles.css";

const AccordionMenu = () => {
	const menuItems = [
		{
			id: 1,
			title: "Appetizers",
			items: ["Mozzarella Sticks", "Fried Calamari", "Chicken Wings"],
		},
		{
			id: 2,
			title: "Entrees",
			items: [
				"Spaghetti Carbonara",
				"Chicken Parmesan",
				"Eggplant Rollatini",
			],
		},
		{
			id: 3,
			title: "Desserts",
			items: ["Tiramisu", "Cannoli", "Chocolate Cake"],
		},
	];

	return (
		<div className="lift-container">
			<div className="accordion-menu">
				{menuItems.map((item) => (
					<div className="accordion-item" key={item.id}>
						<div className="accordion-header">{item.title}</div>
						<ul className="accordion-list">
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
