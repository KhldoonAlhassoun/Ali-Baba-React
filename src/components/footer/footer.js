import React from "react";
import "./styles.css";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="box-left">
				<h4>Ali Baba pizzeria</h4>
				<div className="contact">
					<FontAwesomeIcon className="number_icon" icon={faPhone} />
					<h4>090-14 00 11</h4>
				</div>
			</div>
			<div className="box-mid">
				<h4>ÖPPETTIDER</h4>
				<p>
					MÅN-FRE 11:00-21:00 <br />
					LÖR-SÖN 12:00-21:00
				</p>
			</div>
			<div className="box-right">
				<ul className="sm-foot">
					<li>
						<FontAwesomeIcon className="icon" icon={faFacebook} />
					</li>
					<li>
						<FontAwesomeIcon className="icon" icon={faInstagram} />
					</li>
					<li>
						<FontAwesomeIcon className="icon" icon={faPhone} />
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
