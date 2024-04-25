import "./App.css";
import Slider from "./components/Slider";

function App() {
	const imageUrls = [
		{ url: "braden-collum-9HI8UJMSdZA-unsplash.jpg", alt: "Car" },
		{ url: "dmitrii-vaccinium-ByUAo3RpA6c-unsplash.jpg", alt: "Car" },
		{ url: "john-arano-h4i9G-de7Po-unsplash.jpg", alt: "Car" },
		{ url: "markus-spiske-WUehAgqO5hE-unsplash.jpg", alt: "Car" },
		{ url: "matthieu-petiard-Pf6e3o0GL4M-unsplash.jpg", alt: "Car" },
	];
	return (
    <div>
		<div className='SliderComponent'>
			<Slider imgs={imageUrls} />
		</div>
    </div>
	);
}

export default App;
