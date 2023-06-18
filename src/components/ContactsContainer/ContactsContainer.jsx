import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './contactsContainer.module.css';

export default function ContactsContainer() {
    return (
        <div className={s.container}>
            <div className={s.form_container}>
                <h2 className={s.title}>Phonebook</h2>
                <ContactForm />
                <h2 className={s.title}>Contacts</h2>
                <Filter />
            </div>
            <ContactList />
        </div>
    );
}