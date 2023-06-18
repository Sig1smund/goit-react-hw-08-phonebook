import { NavLink } from "react-router-dom"
import s from './authBar.module.css'

export default function AuthBar() {
    return (
        <div>
            <NavLink to="/login" className={({ isActive }) => (isActive ? s.active : s.link)}>
                Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? s.active : s.link)}>
                Register
            </NavLink>
        </div>
    );
}