import { createContext, useState } from "react";

type UserContext = {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContext | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [username, setUsername] = useState("Muhammed");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}