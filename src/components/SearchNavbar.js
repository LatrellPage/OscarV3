import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BlackLogo } from "../blackLogo.svg";

const SearchNavbar = () => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 3fr 1fr",
				width: "100%",
				height: "5rem",
				fontSize: "0.5rem",
				gridTemplateRows: "1fr",
				gridTemplateAreas: "LogoBackBTN SearchContainer AccountCart",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ddd", fontSize: '2rem' }} />
                <div style={{borderLeft: 'solid black 3px', height: '2rem',width: '60%', display: 'flex', alignItems: 'center'}}>
                    <BlackLogo style={{height: '80%'}}className="svg-logo" />
                </div>
			</div>
			<div style={{display: "flex", justifyContent: 'center', alignItems: "center", fontSize: '1rem',}}>
                <div style={{display: 'grid', gridTemplateColumns: '11fr 1fr', gridAutoRows:'1fr', width: '70%', height: '2.5rem', borderRadius: '25px', border: 'solid #333 0.5px', overflow: 'hidden'}}>
                    <input placeholder="Search" style={{backgroundColor: 'inherit', textIndent: '1rem', outline: 'none',border: 0, fontSize: '1rem'}}></input>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
			<div style={{ backgroundColor: "red" }}></div>
		</div>
	);
};
export default SearchNavbar;
