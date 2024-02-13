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
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", width: "100%", height: "100%"}}>
                {/* Here we will create a map to loop through an array of objects containing the video src, title, by etc */}
            </div>
		</div>
	);
};

export default BrowseTutorials;
