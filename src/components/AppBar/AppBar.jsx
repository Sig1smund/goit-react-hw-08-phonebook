import AuthBar from "../AuthBar";
import UserBar from "../UserBar";
import Navigation from "../Navigation/Navigation";
import { useAuth } from "../../hooks/useAuthHook";
import s from './appBar.module.css'

export default function AppBar() {
    const {isLoggedIn} = useAuth()
    return (
        <header className={s.container}>
            <Navigation />
            {isLoggedIn ? <UserBar /> : <AuthBar />}
        </header>
    );
};