import React from "react";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import "./styles.css";

const AboutIndex = () => {
	return (
		<div>
			<main className="main">
				<div className="left-sidebar">
					<AccordionMenu />
				</div>
				<div className="about-container">
					<h1>About Us</h1>
					<p>
						We are a small team of passionate foodies who believe
						that good food should be accessible to everyone. Our
						mission is to provide our customers with the best dining
						experience possible, using only the freshest ingredients
						and innovative recipes. Whether you're looking for a
						quick bite or a leisurely meal with friends and family,
						we've got you covered. Our menu is designed to cater to
						all tastes and dietary requirements, from vegan to
						gluten-free options.
					</p>
					<p>
						At our restaurant, we strive to create a warm and
						welcoming atmosphere where everyone feels at home. So
						come on in and join us for a meal - we can't wait to
						share our passion for food with you! Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Magni inventore
						esse veritatis voluptates illum consectetur nostrum,
						eius modi, porro fuga suscipit. Quos error qui dolorem!
						Laboriosam sint libero corrupti aliquam maiores
						praesentium modi quasi vitae, nulla autem nesciunt ullam
						quam eos reprehenderit veritatis ea. Quis ducimus nihil
						sunt ratione tenetur. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Ipsum, ullam quibusdam
						officia corporis, obcaecati nostrum dolorem maiores
						dolores maxime reiciendis hic id, soluta similique
						voluptatibus nesciunt sequi quisquam dolor inventore?
					</p>
				</div>
			</main>
		</div>
	);
};

export default AboutIndex;
