import { useAuth } from "../../hooks/useAuthHook";
import { NavLink } from "react-router-dom"
import s from './navigation.module.css'

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <nav className={s.navBar}>
            {isLoggedIn
                ? <NavLink to="/contacts" className={({ isActive }) => (isActive ? s.active : s.link)}>
                    Contacts
                </NavLink>
                : <NavLink to="/"
                    className={({ isActive }) => (isActive ? s.active : s.link)}>
                    Home
                </NavLink>}
        </nav>
    );
};