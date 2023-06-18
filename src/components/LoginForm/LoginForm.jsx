import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import s from './loginForm.module.css';
import TextField from '@mui/material/TextField';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn({ email: email, password: password }))
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
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
                <button type='submit' className={s.button}>Login</button>
                <NavLink to='/register' className={s.link}>No account yet? Register now!</NavLink>
            </form>
        </div>
    );
}