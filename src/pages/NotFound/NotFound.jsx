import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuthHook';
import s from './notFound.module.css'


export default function NotFound() {
   const { isLoggedIn } = useAuth();
   return (
      <div className={s.container}>
         <h1 className={s.title}>Русский военный корабль, иди на#уй!</h1>
         <div className={s.navigation}>
            {isLoggedIn
               ? <NavLink className={s.link} to='/contacts'>Become human</NavLink>
               : <NavLink className={s.link} to='/'>Become human</NavLink>}
         </div>
      </div>
   );
}