import React, { createContext, useReducer } from "react";
import { pc_SRC, accessories_SRC, discover_Links, shop_SRC } from "./NavResources";
export const NavContext = createContext();

export const NavProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "Pc":
                return {type: "Pc", currentNavArray: pc_SRC }
            case "Accessories":
                return {type: "Accessories", currentNavArray: accessories_SRC }
            case "Discover":
                return {type: "Discover", currentNavArray: discover_Links}
            case "Shop":
                return {type: "Shop", currentNavArray: shop_SRC}
            case "":
                    return {type:"", currentNavArray: []}
            default:
                throw new Error("Unknown action type");
        }
    }

	const [ state, dispatch] = useReducer(reducer, [] )

	return (
		<NavContext.Provider value={{ state, dispatch }}>
			{children}
		</NavContext.Provider>
	);
};
