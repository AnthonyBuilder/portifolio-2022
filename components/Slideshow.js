import React from "react";
//These are Third party packages for smooth slideshow
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({images}) => {

	//These are custom properties for zoom effect while slide-show
	const fadeInProperties = {
        duration: 3000,
        transitionDuration: 300,
        infinite: true,
        indicators: true,
        onChange: (oldIndex, newIndex) => {
          console.log(`fade transition from ${oldIndex} to ${newIndex}`);
        },
		prevArrow: (
			<div style={{ width: "25px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "25px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className="m-10">
			<Fade {...fadeInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-full h-full rounded-lg shadow-xl"
							src={each}
                            style={{
                                'object-fit':'contain'
                            }}
						/>
					</div>
				))}
			</Fade>
		</div>
	);
};

export default Slideshow;

