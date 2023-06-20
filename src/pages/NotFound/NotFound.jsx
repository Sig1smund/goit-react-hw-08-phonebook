import { NavLink } from 'react-router-dom';
import s from './notFound.module.css'


export default function NotFound() {
   return (
      <div className={s.container}>
         <h1 className={s.title}>Русский военный корабль, иди на#уй!</h1>
         <div className={s.navigation}>
            <NavLink className={s.link} to='/'>Become human</NavLink>
         </div>
      </div> 
   );
}