import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import s from './registerForm.module.css'

export default function RegisterForm() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name: login, email: email, password: password }))
        setLogin('');
        setEmail('');
        setPassword('');
    };

    return (
         <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    value={login}
                    className={s.input}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder='Enter your login'
                    color='warning' />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    className={s.input}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    color='warning' />
                <TextField
                    id="outlined-basic"
                    type="password"
                    autoComplete="off"
                    label="Password"
                    variant="outlined"
                    value={password}
                    className={s.input}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    color='warning' />
                <button type='submit' className={s.button}>Register</button>
            <NavLink to='/login' className={s.link}>Already have an account? Login</NavLink>
            </form>
        </div>
    );
}