import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

type SliderProps = {
	imgs: {
		url: string,
		alt: string
	}[];
};

const Slider = ({ imgs }: SliderProps) => {
	function handlePrev() {
		setImageIndex(index => {
      if (index === 0) {
				return imgs.length - 1
			}
      return index - 1
    })
	}

	function handleNext() {
		setImageIndex(index => {
      if (index === imgs.length - 1) return 0
      return index + 1
    })
	}
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className='Slider'>
			{imgs &&
				imgs.map((img, index) => (
					<img
						className='Slider__img'
						style={{ translate: `${-100 * imageIndex}%` }}
						key={img.url}
						src={img.url}
						alt={img.alt}
						aria-hidden = {index !== imageIndex}
					/>
				))}

			<button onClick={handlePrev} className='SliderBtn SliderBtn__left'>
				<ArrowBigLeft />
			</button>
			<button onClick={handleNext} className='SliderBtn SliderBtn__right'>
				<ArrowBigRight />
			</button>
			<div className="Slider__thumbs">
					{imgs.map((img, index) => (
						<img
							onClick={() => setImageIndex(index)} 
							key={index}
							className={`Slider__thumbs-img ${index === imageIndex ? '-isActive' : ''}`
							} 
							src={img.url} 
							alt={img.alt}
						/>
					))}
			</div>
		</div>
	);
};

export default Slider;
