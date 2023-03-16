import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<div className="header-container">
			<nav>
				<NavLink to={"/"}>
					<img
						className="logo"
						src={require("../../assets/images/Logo.png")}
						alt="Pizzerians loggan"
					/>
				</NavLink>
				<ul className="sm">
					<ul className="top-links">
						<li className="burger">
							<a className="toggle" href="#sidenav">
								&#9776;
							</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<a href="#" className="fa fa-instagram">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a className="fa fa-phone" href="#">
								<FontAwesomeIcon icon={faPhone} />
							</a>
						</li>
					</ul>

					<ul className="navLinks">
						<li>
							<NavLink to={"/menu"}>Meny</NavLink>
						</li>
						<li>
							<NavLink to={"/news"}>Nyheter</NavLink>
						</li>
						<li>
							<NavLink to={"/about"}>Om Oss</NavLink>
						</li>
					</ul>
				</ul>

				<div className="cart">
					<FontAwesomeIcon
						className="cart-icon"
						icon={faShoppingCart}
					/>
					<a className="cart-button" href="kundvagn.html">
						KUNDVAGN
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Header;
