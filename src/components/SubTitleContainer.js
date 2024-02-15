import React, {useState} from "react";

const SubTitleContainer = (prop) => {

	const [ hover, setHover ] = useState();

	return (
		<>
			<div
				style={{
					height: "3rem",
					width: "100%",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				{prop.contentArray.map((item, index) => (
					<div
					onMouseEnter={() => setHover(index)}
						key={index}
						style={{
							backgroundColor: hover === index ?"black": "#eee",
							color: hover === index ? "white" : "black",
							width: "fit-content",
							height: "0.6rem",
							padding: "10px",
							display: "grid",
							placeContent: "center",
							borderRadius: "7px",
							fontSize: "0.7rem",
							fontWeight: "600",
							cursor: "pointer"
						}}
					>
						{item}
					</div>
				))}
			</div>
		</>
	);
};

export default SubTitleContainer;
