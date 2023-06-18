import propTypes from 'prop-types';
import s from './container.module.css'

export default function Container({children}) {
    return <div className={s.container}>{children}</div>
}

Container.propTypes = {
    children: propTypes.node
};