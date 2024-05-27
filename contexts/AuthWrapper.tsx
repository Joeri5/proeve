import {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import pb from "../lib/pocketbase";
import type { AuthProviderInfo, Record as PbRecord } from "pocketbase";

interface PbUser {
    id: string;
    name: string;
    email: string;
    username: string;
    avatarUrl: string;
}

interface AuthContextType {
    user: PbUser | null;
    setUserData: (user: PbRecord) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<PbUser | null>(null);

    const setUserData = (pbUser: PbRecord) => {
        const { id, name, email, username, avatarUrl } = pbUser;
        setUser({ id, name, email, username, avatarUrl });
    };

    const signOut = () => {
        setUser(null);
        pb.authStore.clear();
    };

    useEffect(() => {
        const initAuth = async () => {
            const authMethods = await pb
                .collection("users")
                .listAuthMethods()
                .then((methods) => methods)
                .catch((err) => {
                    console.error(err);
                });

            if (pb.authStore.model) setUserData(pb.authStore.model as PbRecord);
        };

        initAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, setUserData, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const usePbAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("usePbAuth must be used within an AuthWrapper");
    }
    return context;
};

export default AuthWrapper;
