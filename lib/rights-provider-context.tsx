"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type RightsProvider = "NBA" | "Premier League" | "Bundesliga" | "La Liga" | "Serie A" | "UFC" | "F1";

interface RightsProviderContextType {
    selectedProvider: RightsProvider;
    setSelectedProvider: (provider: RightsProvider) => void;
}

const RightsProviderContext = createContext<RightsProviderContextType | undefined>(undefined);

export function RightsProviderProvider({ children }: { children: ReactNode }) {
    const [selectedProvider, setSelectedProvider] = useState<RightsProvider>("NBA");

    return (
        <RightsProviderContext.Provider value={{ selectedProvider, setSelectedProvider }}>
            {children}
        </RightsProviderContext.Provider>
    );
}

export function useRightsProvider() {
    const context = useContext(RightsProviderContext);
    if (context === undefined) {
        throw new Error("useRightsProvider must be used within a RightsProviderProvider");
    }
    return context;
}
