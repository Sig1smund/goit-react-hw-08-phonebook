import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './contactsContainer.module.css';

export default function ContactsContainer() {
    return (
        <div className={s.container}>
            <div className={s.form_container}>
                <ContactForm />
                <Filter />
            </div>
            <ContactList />
        </div>
    );
}