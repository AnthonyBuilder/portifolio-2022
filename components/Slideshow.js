import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../pages/styles/main.module.scss";
const Slideshow = ({ images = [], slides = [], height = 160, interval = 4500 }) => {
	const items = useMemo(() => (slides.length ? slides : images.map((src) => ({ src }))), [slides, images]);
	const [index, setIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (items.length <= 1) {
			return;
		}
		const id = setInterval(() => {
			setIndex((prev) => (prev + 1) % items.length);
		}, interval);
		return () => clearInterval(id);
	}, [items.length, interval]);

	const goPrev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);
	const goNext = () => setIndex((prev) => (prev + 1) % items.length);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 75) {
			goNext();
		}
		if (touchStart - touchEnd < -75) {
			goPrev();
		}
	};

	const current = items[index] || {};

	return (
		<div>
			<motion.div 
				className={styles.slideshowRoot} 
				initial={false}
				animate={{
					background: `linear-gradient(135deg, rgba(${parseInt(current.color?.slice(1,3), 16)}, ${parseInt(current.color?.slice(3,5), 16)}, ${parseInt(current.color?.slice(5,7), 16)}, 1) 0%, rgba(${parseInt(current.color?.slice(1,3), 16)}, ${parseInt(current.color?.slice(3,5), 16)}, ${parseInt(current.color?.slice(5,7), 16)}, 0.95) 100%)`
				}}
				transition={{ duration: 1.5, ease: "easeInOut" }}
				style={{
					width: "100%",
					height: "auto",
					margin: "2rem 0 3rem 0",
					padding: "1.5rem",
					borderRadius: "24px",
					boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
					overflow: "hidden"
				}}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
			<div style={{
			minHeight: height,
			height: isMobile ? "auto" : height,
			display: "flex",
				flexDirection: isMobile ? "column" : "row-reverse",
				alignItems: "stretch",
				justifyContent: "space-between",
				gap: isMobile ? "0.8rem" : "1rem",
				position: "relative"
			}}>
				<div style={{
					flex: 1,
					minHeight: isMobile ? "300px" : "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					position: "relative",
				paddingLeft: "1rem"
				}}>
				<AnimatePresence mode="wait">
						<motion.div
							key={index}
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -60 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
							style={{
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							{current.href ? (
								<a href={current.href} target="_blank" rel="noreferrer" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
									<img
										src={current.src}
										style={{
											width: "110%",
											height: "110%",
											maxWidth: "110%",
											maxHeight: "110%",
											objectFit: "contain",
											padding: "0.25rem",
											display: "block",
											margin: "0 auto",
										borderRadius: "18px"
										}}
									/>
								</a>
							) : (
								<img
									src={current.src}
									style={{
										width: "110%",
										height: "110%",
										maxWidth: "110%",
										maxHeight: "110%",
										objectFit: "contain",
										padding: "0.25rem",
										display: "block",
										margin: "0 auto",
										borderRadius: "18px"

									}}
								/>
							)}
						</motion.div>
					</AnimatePresence>
				</div>

				<div style={{
					flex: 1,
				minHeight: isMobile ? "auto" : "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "1.2rem",
				paddingLeft: isMobile ? "1.5rem" : "7.5rem"
				}}>
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -60 }}
						transition={{ duration: 0.6, ease: "easeInOut", delay: 0.15 }}
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1.2rem"
							}}
						>
							{current.title && (
								<h2 style={{ 
									fontSize: "clamp(1.5rem, 3vw, 2.2rem)", 
									fontWeight: 900,
									color: "#ffffff",
									margin: 0,
									letterSpacing: "-0.5px"
								}}>{current.title}</h2>
							)}
							{current.subtitle && (
								<p style={{ 
									fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
									color: "#8fa4c4",
									margin: 0,
									lineHeight: "1.6"
								}}>{current.subtitle}</p>
							)}
							{current.technologies && (
								<div style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "0.6rem",
									marginTop: "0.5rem"
								}}>
									{current.technologies.map((tech, idx) => (
										<span key={idx} style={{
											padding: "0.5rem 1rem",
											background: "rgba(56, 189, 248, 0.15)",
											border: "1px solid rgba(56, 189, 248, 0.3)",
											borderRadius: "20px",
											color: "#38bdf8",
											fontSize: "0.85rem",
											fontWeight: 600,
											whiteSpace: "nowrap"
										}}>
											{tech}
										</span>
									))}
								</div>
							)}
							{current.href && (
								<a href={current.href} target="_blank" rel="noreferrer" style={{
									marginTop: "1rem",
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
									fontSize: "0.9rem",
									color: "#38bdf8",
									cursor: "pointer",
									textDecoration: "none",
									transition: "opacity 0.3s ease"
								}} onMouseEnter={(e) => e.target.style.opacity = "0.8"} onMouseLeave={(e) => e.target.style.opacity = "1"}>
									→ Clique para ver o projeto
								</a>
							)}
						</motion.div>
					</AnimatePresence>
				</div>

				{!isMobile && items.length > 1 && (
					<>
						<button
							onClick={goPrev}
							style={{
								position: "absolute",
								left: "25px",
								top: "50%",
								transform: "translateY(-50%)",
							width: "45px",
							height: "45px",
								borderRadius: "999px",
							border: "1px solid rgba(56, 189, 248, 0.3)",
							background: "rgba(0, 0, 0, 0.4)",
							backdropFilter: "blur(10px)",
							color: "#38bdf8",
								cursor: "pointer"
							}}
							aria-label="Anterior"
						>
							‹
						</button>
						<button
							onClick={goNext}
							style={{
								position: "absolute",
								right: "25px",
								top: "50%",
								transform: "translateY(-50%)",
							width: "45px",
							height: "45px",
								borderRadius: "999px",
							border: "1px solid rgba(56, 189, 248, 0.3)",
							background: "rgba(0, 0, 0, 0.4)",
							backdropFilter: "blur(10px)",
							color: "#38bdf8",
								cursor: "pointer"
							}}
							aria-label="Próximo"
						>
							›
						</button>
					</>
				)}
			</div>

			{items.length > 1 && (
				<div style={{
					display: "flex",
					justifyContent: "center",
					gap: "8px",
					marginTop: "10px"
				}}>
					{items.map((_, dotIndex) => (
						<button
							key={dotIndex}
							onClick={() => setIndex(dotIndex)}
							style={{
								width: "10px",
								height: "10px",
								borderRadius: "999px",
								border: "none",
								background: dotIndex === index ? "#e5e7eb" : "rgba(229,231,235,0.4)",
								cursor: "pointer"
							}}
							aria-label={`Slide ${dotIndex + 1}`}
						/>
					))}
				</div>
			)}
		</motion.div>
		</div>
	);
};

export default Slideshow;

