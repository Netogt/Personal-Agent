import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
    showAside: boolean;
    setShowAside: (valor: boolean) => void
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [showAside, setShowAside] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{showAside, setShowAside}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(){
    const context = useContext(AppContext);

    if(!context) {
        throw new Error(
            "useAppContext der ser usado dentro de AppProvider"
        );
    }

    return context;
}