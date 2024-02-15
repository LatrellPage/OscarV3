import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "../context/NavContext";
import NavElements from "../components/NavElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "../landingPage.css";
import { ReactComponent as BlackLogo } from "../blackLogo.svg";
import { ReactComponent as WhiteLogo } from "../whiteLogo.svg";
import {
	pcDropdownLinks,
	accessoriesDropdownLinks,
	shopDropdownLinks,
} from "../resources/NavResources";

library.add(faMagnifyingGlass, faCircleUser);

const LandingPage = () => {
	const { state, dispatch } = useContext(NavContext);

	const handleNavChange = (NavType) => {
		dispatch({ type: NavType });
	};

	const videoStyle = {
		position: "fixed",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		filter:
			state.currentNavArray && state.currentNavArray.length !== 0
				? "blur(20px)"
				: "",
		transition: "filter 1.5s ease",
	};

	const [dropdownLinksArray, setDropDownLinks] = useState([]);

	useEffect(() => {
		if (state.type === "Pc") {
			setDropDownLinks(pcDropdownLinks);
		} else if (state.type === "Accessories") {
			setDropDownLinks(accessoriesDropdownLinks);
		} else if (state.type === "Shop") {
			setDropDownLinks(shopDropdownLinks);
		} else {
			setDropDownLinks([]);
		}
	}, [state.type]);

	return (
		<div>
			<div className="parent-positioner-container">
				<div
					onMouseEnter={() => handleNavChange("")}
					className="header-ad"
					style={
						state.currentNavArray &&
						state.currentNavArray.length !== 0
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
								textDecoration: "none",
							}}
						>
							See Details
						</Link>
					</h1>
				</div>
				<div
					className="landing_page_navbar"
					style={
						state.currentNavArray &&
						state.currentNavArray.length !== 0
							? {
									backgroundColor: "white",
									color: "black",
									fontWeight: 600,
							  }
							: { color: "whitesmoke", fontWeight: 500 }
					}
				>
					<div className="svg-logo-container">
						{state.currentNavArray &&
						state.currentNavArray.length !== 0 ? (
							<BlackLogo className="svg-logo" />
						) : (
							<WhiteLogo className="svg-logo" />
						)}
					</div>
					<NavElements />
					<div className="icon-container">
						<FontAwesomeIcon
							icon="magnifying-glass"
							style={
								state.currentNavArray &&
								state.currentNavArray.length !== 0
									? { color: "black", cursor: "pointer" }
									: { color: "white", cursor: "pointer" }
							}
						/>
						<FontAwesomeIcon
							icon={["far", "circle-user"]}
							style={
								state.currentNavArray &&
								state.currentNavArray.length !== 0
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
					style={
						state.currentNavArray &&
						state.currentNavArray.length !== 0
							? { height: state.type !== "Discover" ? "60vh" : "45vh", opacity: 1 }
							: { height: "0vh", opacity: 0 }
					}
				>
					<div className="dropdown-container">
						{state.type === "Discover" ? (
							<div
								style={{
									width: "100%",
									height: "70%",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr 1fr 1fr",
										gridAutoColumns: "auto",
										gap: 4,
									}}
								>
									{state.currentNavArray &&
									state.currentNavArray.length > 0 ? (
										state.currentNavArray.map(
											(section, sectionIndex) => (
												<ul
													key={sectionIndex}
													className="dropdown-ordered-list"
												>
													{section.map(
														(item, itemIndex) => (
															<li
																key={itemIndex}
															>
																{
																	<Link className="discover-dropdown-nav-link"
																		to={
																			item.href
																		}
																	>
																		{
																			item.title
																		}
																	</Link>
																}
															</li>
														)
													)}
												</ul>
											)
										)
									) : (
										<div></div>
									)}
								</div>
							</div>
						) : (
							<>
								<div
									style={{
										width: "80%",
										height: "70%",
										display: "grid",
										gridTemplateColumns: "1fr 1fr 1fr 1fr",
										gridTemplateRows: "auto",
										gap: "1rem",
										paddingRight: "15px",
									}}
								>
									{state.currentNavArray &&
									state.currentNavArray.length > 0 ? (
										state.currentNavArray.map((item) => (
											<div className="dropdown-card">
												<img
													src={item.src}
													alt={item.title}
												/>
												<div className="card-info">
													<h2 className="img-title">
														{item.title}
													</h2>
												</div>
											</div>
										))
									) : (
										<div></div>
									)}
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
										{dropdownLinksArray ? (
											dropdownLinksArray.map((item) => (
												<li>
													<Link
														to={item.href}
														className="dropdown-nav-link"
													>
														{item.title}
													</Link>
												</li>
											))
										) : (
											<></>
										)}
									</ul>
								</div>
							</>
						)}
					</div>
				</div>
			</div>

			<video
				onMouseEnter={() => handleNavChange("")}
				autoPlay
				muted
				loop
				style={videoStyle}
				src="/assets/videos/gamer-using-lighted-up-mouse-and-keyboard-playing-game-online-free-video.mp4"
			></video>

			<div
				className="centered-container"
				style={
					state.currentNavArray && state.currentNavArray.length !== 0
						? {
								filter: "blur(20px)",
								transition: "filter 1s ease",
								display: "grid",
								justifyContent: "center",
								gridTemplateRows: "1fr 1fr",
						  }
						: {
								display: "gird",
								justifyContent: "center",
								gridTemplateRows: "1fr 1fr",
						  }
				}
			>
				<div>
					<h1
						style={
							state.currentNavArray &&
							state.currentNavArray.length !== 0
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
										width: "fit-content",
								  }
						}
					>
						Frame Wins
					</h1>
				</div>
				<h2
					style={
						state.currentNavArray &&
						state.currentNavArray.length !== 0
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
					state.currentNavArray && state.currentNavArray.length !== 0
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
