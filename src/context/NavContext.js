import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <NavContext.Provider value={{ hoveredItem, setHoveredItem }}>
            {children}
        </NavContext.Provider>
    );
};
