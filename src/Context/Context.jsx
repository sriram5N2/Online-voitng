import React, { createContext, useState } from "react";

export const StatusContext = createContext();

const StatusProvider = ({ children }) => {
    const backendUrl = "https://giribabi-vote-easy-api.onrender.com";
    const [progress, setProgress] = useState(0);

    return (
        <StatusContext.Provider value={{ progress, setProgress, backendUrl }}>
            {children}
        </StatusContext.Provider>
    );
};

export default StatusProvider;
