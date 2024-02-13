import React from "react";

const SubTitleContainer = (prop) => {
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
						key={index}
						style={{
							backgroundColor: "#eee",
							color: "black",
							width: "fit-content",
							height: "0.6rem",
							padding: "10px",
							display: "grid",
							placeContent: "center",
							borderRadius: "7px",
							fontSize: "0.7rem",
							fontWeight: "600",
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
