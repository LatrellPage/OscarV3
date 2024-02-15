import React from "react";
import SearchNavbar from "../../components/SearchNavbar";
import SubTitleContainer from "../../components/SubTitleContainer";

const BrowseTutorials = () => {
	const contentArray = [
		"NVIDIA GeForce RTX 3080 Ti", // High-end graphics card for gaming and creative work
		"SteelSeries Apex Pro TKL", // Compact mechanical keyboard with customizable actuation
		"Logitech G Pro X Superlight", // Ultra-lightweight wireless gaming mouse
		"AMD Ryzen 9 5950X", // Top-tier CPU with 16 cores, excellent for gaming and multitasking
		"ASUS ROG Swift PG259QN", // A 360Hz gaming monitor for ultra-smooth competitive gameplay
		"HyperX Cloud II Wireless", // Wireless gaming headset with virtual 7.1 surround sound
		"Corsair HS70 Bluetooth", // Multi-platform gaming headset with Bluetooth connectivity
		"Corsair K95 RGB Platinum", // NVMe SSD with PCIe 4.0, ideal for fast game loading times
		"NZXT Kraken Z63",
	];

	return (
		<div>
			<SearchNavbar />
			<SubTitleContainer contentArray={contentArray} />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "calc(100vh - 8rem)",
					width: "100%",
					overflowY: "scroll",
				}}
			>
				<div
					style={{
						width: "80%",
						height: "90%",
						display: "grid",
						gridTemplateRows: "1fr 1fr 1fr",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "1rem",
					}}
				>
					{/* Static video items start here */}
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/tAghTyXbyOk"
							frameborder="0"
							allow="fullscreen"
							title="Apex Pro TKL"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										SteelSeries Apex Pro TKL review
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										The Provoked Prawn
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/a8WNHpK2ocI?si=QQogDAagKi-ZrQdz"
							frameborder="0"
							allow="fullscreen"
							title="NVIDIA GeForce RTX 3080 Ti"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										NVIDIA GeForce RTX 3080 Ti Review
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Optimum
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/72AHENDeTEI?si=PbtwNtDudqrLdq5h"
							frameBorder="0"
							allow="fullscreen"
							title="YouTube video player"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										AMD Ryzen 9 5950X CPU Review &
										Benchmarks
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Gamer Nexus
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/VCf6PX0PKNE?si=Qjjy_Hggv0gX0-lg"
							frameborder="0"
							allow="fullscreen"
							allowfullscreen
							title="Logitech G Pro X Superlight"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										The NEW Logitech G Pro X - SUPERLIGHT
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Dave2D
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/gGssIG9cH6k?si=d4ER3Wj8M_Y--9uG"
							frameBorder="0"
							allow="fullscreen"
							allowFullScreen
							title="YouTube video player"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										Gaming at 360Hz! Asus PG259QN Review
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Optimum
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/bgztifNxhbw?si=ALYkjp8BeFIk6htt"
							frameBorder="0"
							allow="fullscreen"
							title="YouTube video player"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										The AMAZING Gaming headset with a fatal
										FLAW
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Digital_Piracy
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/pN9pAfCnWuM?si=_lrz4cENGKnh_5Dg"
							frameBorder="0"
							allow="fullscreen"
							title="YouTube video player"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										New Wireless Gaming Headset CHAMPION!
										Corsair HS70
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Hardware Canucks
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/daHXnr3zMBY?si=gjpheU-dMqUxGelT"
							frameBorder="0"
							allow="fullscreen"
							title="YouTube video player"
							style={{
								width: "25rem",
								height: "11.5rem",
								borderRadius: "10px",
								backgroundColor: "#eee",
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										Corsair K95 RGB Platinum Keyboard
										Review... is it worth it??
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										JayzTwoCents
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<iframe
							src="https://www.youtube.com/embed/gxCD7F7dCyA?si=wd0WkpGI3f18zsGs"
							frameBorder="0"
							allow="fullscreen"
							title="YouTube video player"
							style={{
								width: "25rem", 
								height: "11.5rem",
								borderRadius: "10px", 
								backgroundColor: "#eee", 
							}}
						></iframe>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateRows: "1fr 1fr",
									width: "100%",
									height: "100%",
									overflow: "hidden",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "1rem",
										}}
									>
										NZXT Kraken Z63 & X53 Review - Changing
										the Game?
									</h1>
								</div>
								<div>
									<p
										style={{
											fontSize: "0.6rem",
										}}
									>
										Optimum
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Static videos ends here */}
				</div>
			</div>
		</div>
	);
};

export default BrowseTutorials;
