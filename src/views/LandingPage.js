import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";
import NavElements from "../components/NavElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import "../landingPage.css";
import blackLogo from '../logos/blackLogo.svg';
import whiteLogo from '../logos/whiteLogo.svg';


library.add(faMagnifyingGlass, faCircleUser);

const LandingPage = () => {
	const { hoveredItem, setHoveredItem } = useContext(NavContext);

	const videoStyle = {
		position: "fixed",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		filter: hoveredItem !== null ? "blur(20px)" : "",
		transition: "filter 1.5s ease",
	};

	return (
		<div>
			<div className="parent-positioner-container">
				<div
					className="header-ad"
					style={
						hoveredItem !== null
							? { backgroundColor: "black" }
							: {
									background:
										"linear-gradient(to bottom right, rgb(57, 18, 94), #000000)",
							}
					}
				>
					<h1
						style={{
							width: "auto",
							color: "white",
							fontWeight: 400,
						}}
					>
						Access over $5000 in credit and enjoy fast delivery by
						01/01/2025
						<span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span>
						<Link
						to="/"
							style={{
								fontWeight: "600",
								color: "white",
								borderBottom: "1px solid white",
								cursor: "pointer",
								fontSize: "1rem",
								paddingBottom: "1px",
								textDecoration: "none"
							}}
						>
							See Details
						</Link>
					</h1>
				</div>
				<div
					className="landing_page_navbar"
					style={
						hoveredItem !== null
							? {
									backgroundColor: "white",
									color: "black",
									fontWeight: 600,
							}
							: { color: "whitesmoke", fontWeight: 500 }
					}
				>
					<div className="svg-logo-container">
						<img
							src={
								hoveredItem !== null? {blackLogo}: {whiteLogo}
							}
							alt=""
							className="svg-logo"
						/>
					</div>
					<NavElements />
					<div className="icon-container">
						<FontAwesomeIcon
							icon="magnifying-glass"
							style={
								hoveredItem !== null
									? { color: "black", cursor: "pointer" }
									: { color: "white", cursor: "pointer" }
							}
						/>
						<FontAwesomeIcon
							icon={["far", "circle-user"]}
							style={
								hoveredItem !== null
									? {
											color: "black",
											cursor: "pointer",
											fontSize: "1.2rem",
									}
									: {
											color: "white",
											cursor: "pointer",
											fontSize: "1.2rem",
									}
							}
						/>
					</div>
				</div>

				<div
					className="dropdown"
					onMouseLeave={() => setHoveredItem(null)}
					style={
						hoveredItem !== null
							? { height: "60vh", opacity: 1 }
							: { height: "0vh", opacity: 0 }
					}
				>
					<div className="dropdown-container">
						<div
							style={{
								width: "80%",
								height: "70%",
								display: "grid",
								gridTemplateColumns: "1fr 1fr 1fr 1fr",
								gridTemplateRows: "auto",
								gap: "1rem",
							}}
						>
							<div className="dropdown-card">
								<img
									src="../assets/Images/DropDownImages/PC/Alienware Aurora R15.avif"
									alt="Alienware Aurora R15"
								/>
								<div className="card-info">
									<h2 className="img-title">
										Alienware Aurora R15
									</h2>
								</div>
							</div>

							<div className="dropdown-card">
								<img
									src="../assets/Images/DropDownImages/PC/Daily Deal VR 17k.webp"
									alt="Daily Deal VR 17k"
								/>
								<div className="card-info">
									<h2 className="img-title">
										Daily Deal VR 17k
									</h2>
								</div>
							</div>

							<div className="dropdown-card">
								<img
									src="../assets/Images/DropDownImages/PC/Gaming RDY EMRBR201.webp"
									alt="Gaming RDY EMRBR201"
								/>
								<div className="card-info">
									<h3 className="img-title">
										Gaming RDY EMRBR201
									</h3>
								</div>
							</div>

							<div className="dropdown-card">
								<img
									src="../assets/Images/DropDownImages/PC/Creator PC Ultimate.webp"
									alt="Creator PC Ultimate"
								/>
								<div className="card-info">
									<h4 className="img-title">
										Creator PC Ultimate
									</h4>
								</div>
							</div>
						</div>

						<div
							style={{
								width: "20%",
								height: "70%",
								borderLeft: "0.5px solid #ddd",
								marginLeft: "1rem",
								padding: "10px",
							}}
						>
							<ul className="dropdown-ordered-list">
								<li>
									<Link to="/" className="dropdown-nav-link">
										Alienware
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										Asus ROG
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										MSI
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										Acer Predator
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										HP Omen
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										iBUYPOWER
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										Corsair
									</Link>
								</li>
								<li>
									<Link to="/" className="dropdown-nav-link">
										CyberPowerPC
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<video
				autoPlay
				muted
				loop
				style={videoStyle}
				src="/assets/videos/gamer-using-lighted-up-mouse-and-keyboard-playing-game-online-free-video.mp4"
			></video>

			<div
				className="centered-container"
				style={
					hoveredItem !== null
						? {
								filter: "blur(20px)",
								transition: "filter 1s ease",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
						}
						: {
								display: "gird",
								justifyContent: "center",
								gridTemplateRows: '1fr 1fr'
						}
				}
			>
				<div>
					<h1
						style={
							hoveredItem !== null
								? {
										filter: "blur(20px)",
										transition: "filter 1s ease",
								}
								: {
										fontSize: "2rem",
										fontWeight: "600",
										color: "whitesmoke",
										marginLeft: "auto",
										marginRight: "auto",
										width:"fit-content"
								}
						}
					>
						Frame Wins
					</h1>
				</div>
				<h2
					style={
						hoveredItem !== null
							? {
									filter: "blur(20px)",
									transition: "filter 1s ease",
							}
							: {
									fontSize: "1.2rem",
									fontWeight: "500",
									color: "whitesmoke",
							}
					}
				>
					High FPS, Low Monthly Payments
				</h2>
			</div>

			<div
				className="bottom-container"
				style={
					hoveredItem !== null
						? { filter: "blur(20px)", transition: "filter 1s ease" }
						: {}
				}
			>
				<div className="button-container">
					<div className="button-one">Demo and Tutorials</div>
					<div className="button-two">Build Your Pc</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
