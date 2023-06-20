import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { removeContact, fetchContacts } from "../../redux/contacts/operations";
import { selectAllContacts, selectIsDeleting, selectIsLoading, selectFilter } from "../../redux/contacts/selectors";
// import { selectAllContacts } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
// import { filter } from '../../redux/contacts/filterSlice';
// import { useDeleteContactMutation, useFetchContactsQuery } from '../../redux/contacts/contactApi';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../utils/Spinner'
import s from './contactList.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactList() {
  const filtered = useSelector(selectFilter);
  const contacts = useSelector(selectAllContacts)
  const isDeleting = useSelector(selectIsDeleting)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts())
}, [contacts, dispatch])

  
  const getContacts = useMemo(
    () => () => {
      if (!contacts) {
        return;
      }

      const normalizedFilter = filtered.toLowerCase().trim();

      return contacts
        .filter(
          contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
    },
    [contacts, filtered]
  );

  const getAllContacts = getContacts();

  return (
    <ul className={s.list__block}>
      {isLoading && <Spinner />}
      {!isLoading && getAllContacts.map(elem => {
        return (
          <li key={elem.id} className={s.contacts__item}>
            {elem.name}: {elem.number}
            <button
              disabled={isDeleting}
              className={s.button}
              type="button"
              onClick={() => dispatch(removeContact(elem.id)) && toast.success(`Contact ${elem.name} deleted`)}
            >
              Delete
            </button>
          </li>
        );
      })}
      {isDeleting && <ToastContainer
        position="top-center"
        autoClose={1500} />}
    </ul>
  );
};
