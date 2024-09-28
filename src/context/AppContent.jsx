import React, { createContext, useContext, useState } from 'react';
import HomePage from '../pages/HomePage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [content, setContent] = useState(<HomePage />); 
    const [activeKey, setActiveKey] = useState("1");
    return (
        <AppContext.Provider value={{ content, setContent,setActiveKey,activeKey }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};