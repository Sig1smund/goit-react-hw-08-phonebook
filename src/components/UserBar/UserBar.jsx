import { useDispatch } from "react-redux"
import { logOut } from "../../redux/auth/operations"
import UserCredentials from "../UserCredentials/UserCredentials"
import s from './userBar.module.css'

export default function UserBar() {
    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <div className={s.title}>Logged as <UserCredentials/></div>
            <button type="button" className={s.button} onClick={() => dispatch(logOut())}>
                <p className={s.text}>X</p>
            </button>
        </div>
    );
}