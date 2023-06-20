import { NavLink } from 'react-router-dom';
import s from './homePage.module.css';

export default function HomePage() {
    return (
        <div className={s.container}>
            <h1 className={s.title}>
                Welcome, traveler.<br />
                This is your contact manager app.<br />
                Choose wisely.
            </h1>
            <div className={s.navigation}>
                <NavLink className={s.link} to='/login'>Login</NavLink>
                <NavLink className={s.link} to='/register'>Register</NavLink>
            </div>
        </div>
    );
};