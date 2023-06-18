import { useAuth } from "../../hooks/useAuthHook"
import s from './userCredentials.module.css'

export default function UserCredentials() {
    const {user} = useAuth()
    return <p className={s.title}>{user.name}</p>
}