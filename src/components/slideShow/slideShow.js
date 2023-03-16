import React, { useState, useEffect } from "react";
import "./styles.css";

const SlideShow = ({ images, captions }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSlideIndex((slideIndex + 1) % images.length);
		}, 5000);
		return () => clearTimeout(timer);
	}, [slideIndex, images.length]);

	const moveSlide = (n) => {
		setSlideIndex((slideIndex + n + images.length) % images.length);
	};
	return (
		<div className="slideshow-container">
			{images.map((src, index) => (
				<div
					className={`mySlides fade ${
						index === slideIndex ? "show" : ""
					}`}
					key={index}
				>
					<img src={src} />
					<div className="captionText">{captions[index]}</div>
				</div>
			))}
			<button className="prev" onClick={() => moveSlide(-1)}>
				&#10094;
			</button>
			<button className="next" onClick={() => moveSlide(1)}>
				&#10095;
			</button>
			<div className="dots">
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${
							index === slideIndex ? "activeDot" : ""
						}`}
						onClick={() => setSlideIndex(index)}
					></span>
				))}
			</div>
		</div>
	);
};
export default SlideShow;
