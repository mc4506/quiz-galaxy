import { createContext } from 'react';

const LoginContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    emailVerified: false,
    setEmailVerified: () => {}
});

export default LoginContext;