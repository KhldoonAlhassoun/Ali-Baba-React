import React, { useState } from "react";
import "./styles.css";

const Menu = () => {
	const [menu, setMenu] = useState([
		{
			id: 1,
			title: "Starters",
			submenus: [
				{
					id: 1,
					title: "Garlic Bread",
					price: 4.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 2,
					title: "Caprese Salad",
					price: 7.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 3,
					title: "Calamari",
					price: 9.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
			],
		},
		{
			id: 2,
			title: "Mains",
			submenus: [
				{
					id: 1,
					title: "Pizza Margherita",
					price: 12.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 2,
					title: "Spaghetti Bolognese",
					price: 14.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 3,
					title: "Grilled Salmon",
					price: 17.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
			],
		},
		{
			id: 3,
			title: "Desserts",
			submenus: [
				{
					id: 1,
					title: "Tiramisu",
					price: 6.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 2,
					title: "Chocolate Cake",
					price: 5.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
				{
					id: 3,
					title: "Cheesecake",
					price: 7.99,
					ingredients:
						"Lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do",
				},
			],
		},
	]);
	const [selectedSubmenu, setSelectedSubmenu] = useState(null);
	const handleSubmenuClick = (submenu) => {
		setSelectedSubmenu(submenu);
	};
	return (
		<div className="menu-container">
			<h1 className="menu-title">Menu</h1>
			<ul className="categories-list">
				{menu.map((category) => (
					<li className="category-item" key={category.id}>
						<h2 className="category-title">{category.title}</h2>
						<ul className="subcategories-list">
							{category.submenus.map((submenu) => (
								<li
									className="subcategory-item"
									key={submenu.id}
								>
									<h3 className="subcategory-title">
										{submenu.title}
									</h3>
									<p className="ingredients">
										{submenu.ingredients}
									</p>
									<p className="subcategory-price">
										{submenu.price.toFixed(2)} Kr
										<button className="buy-button">
											Buy
										</button>
									</p>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Menu;
