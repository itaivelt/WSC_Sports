"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "WSC_ADMIN" | "PARTNER_ADMIN";

interface UserRoleContextType {
    userRole: UserRole;
    setUserRole: (role: UserRole) => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export function UserRoleProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole>("WSC_ADMIN");

    return (
        <UserRoleContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </UserRoleContext.Provider>
    );
}

export function useUserRole() {
    const context = useContext(UserRoleContext);
    if (context === undefined) {
        throw new Error("useUserRole must be used within a UserRoleProvider");
    }
    return context;
}
