import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  role: "emprendedor" | "turista";
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
});

const hardcodedUsers: User[] = [
  {
    role: "emprendedor",
    name: "Carlos López",
    email: "emprendedor@demo.com",
  },
  {
    role: "turista",
    name: "Ana Rodríguez",
    email: "turista@demo.com",
  },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const found = hardcodedUsers.find(
      (u) => u.email === email && password === "123456"
    );
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
