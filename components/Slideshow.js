import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../pages/styles/main.module.scss";
const Slideshow = ({ images = [], slides = [], height = 520, interval = 4500 }) => {
	const items = useMemo(() => (slides.length ? slides : images.map((src) => ({ src }))), [slides, images]);
	const [index, setIndex] = useState(0);

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

	const current = items[index] || {};

	return (
		<div className={styles.slideshowRoot} style={{
			width: "100%",
			height,
			margin: "2rem 0 3rem 0",
			padding: "1.5rem",
			background: "#000000",
			borderRadius: "24px",
			boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
			border: "1px solid rgba(255,255,255,0.08)"
		}}>
			<div style={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				position: "relative"
			}}>
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.4 }}
						style={{
							width: "100%",
							height: "80%",
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
										width: "100%",
										height: "100%",
										maxWidth: "86%",
										maxHeight: "100%",
										objectFit: "contain",
										padding: "0.25rem",
										display: "block",
										margin: "0 auto",
										borderRadius: "18px",
										boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
										border: "1px solid rgba(255,255,255,0.08)",
										background: "rgba(2,6,23,0.25)"
									}}
								/>
							</a>
						) : (
							<img
								src={current.src}
								style={{
									width: "100%",
									height: "100%",
									maxWidth: "86%",
									maxHeight: "100%",
									objectFit: "contain",
									padding: "0.25rem",
									display: "block",
									margin: "0 auto",
									borderRadius: "18px",
									boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
									border: "1px solid rgba(255,255,255,0.08)",
									background: "rgba(2,6,23,0.25)"
								}}
							/>
						)}
					</motion.div>
				</AnimatePresence>

				{(current.title || current.subtitle) && (
					<div style={{
						marginTop: "12px",
						textAlign: "center",
						color: "#e5e7eb"
					}}>
						{current.title && (
							<div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{current.title}</div>
						)}
						{current.subtitle && (
							<div style={{ fontSize: "1rem", color: "#9ca3af" }}>{current.subtitle}</div>
						)}
					</div>
				)}

				{items.length > 1 && (
					<>
						<button
							onClick={goPrev}
							style={{
								position: "absolute",
								left: "18px",
								top: "50%",
								transform: "translateY(-50%)",
								width: "38px",
								height: "38px",
								borderRadius: "999px",
								border: "1px solid rgba(255,255,255,0.15)",
								background: "rgba(15,23,42,0.7)",
								color: "#e5e7eb",
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
								right: "18px",
								top: "50%",
								transform: "translateY(-50%)",
								width: "38px",
								height: "38px",
								borderRadius: "999px",
								border: "1px solid rgba(255,255,255,0.15)",
								background: "rgba(15,23,42,0.7)",
								color: "#e5e7eb",
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
		</div>
	);
};

export default Slideshow;

