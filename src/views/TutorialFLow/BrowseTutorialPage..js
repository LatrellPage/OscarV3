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
		"Samsung 980 PRO SSD", // NVMe SSD with PCIe 4.0, ideal for fast game loading times
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
				}}
			>
				<div
					style={{
						width: "80%",
						height: "90%",
						display: "grid",
						gridTemplateRows: "1fr 1fr",
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
						<video
							style={{
								backgroundColor: "#eee",
								borderRadius: "10px",
							}}
							src="https://youtu.be/tAghTyXbyOk?si=Fln7CCa9jqwhuwU8"
							width="400"
							height="180"
							poster=""
						></video>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 9fr",
								gridTemplateRows: "1fr",
								width: "100%",
								height: "20%",
							}}
						>
							<div
								style={{
									display: "grid",
									placeContent: "center",
								}}
							>
								<div
									style={{
										borderRadius: "50%",
										backgroundColor: "#333",
										width: "2rem",
										height: "2rem",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										src="path/to/your/image.jpg"
										alt="Descriptive text"
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "50%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div
									style={{
										display: "grid",
										gridTemplateRows: "1fr 1fr",
										width: "90%",
										height: "60%",
										overflow: "hidden",
									}}
								>
									<div>
										<h1 style={{ fontSize: "1rem", marginLeft: "1rem" }}>
											Title here
										</h1>
									</div>
									<div>
										<p style={{ fontSize: "0.6rem", marginLeft: "1rem" }}>
											username here
										</p>
									</div>
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
