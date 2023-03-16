import React from "react";
import SlideShow from "../../components/slideShow/slideShow";
import "./style.css";
import image1 from "../../assets/images/burger1.jpg";
import image2 from "../../assets/images/pizza.jpg";
import image3 from "../../assets/images/burger2.jpg";

const captions = [
	"Take a bite of our delicious burgers and let the explosion of flavors take you on a mouthwatering journey!",
	"Indulge in a slice of heaven with our mouth-watering pizzas - made with love, baked to perfection!",
	"Satisfy your cravings with our juicy and flavorful burgers - the ultimate comfort food for any occasion!",
];
const images = [image1, image2, image3];

const Home = () => {
	return <SlideShow images={images} captions={captions} />;
};

export default Home;
