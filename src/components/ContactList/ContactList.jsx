import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDeleteContactMutation, useFetchContactsQuery } from '../../redux/contacts/contactApi';
import { ToastContainer, toast } from 'react-toastify';
import { selectFilter } from "../../redux/contacts/filterSlice";
import Spinner from '../../utils/Spinner'
import s from './contactList.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactList() {
  const filtered = useSelector(selectFilter);
  const [deleteContact, {isLoading: deleting}] = useDeleteContactMutation();
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const prepareContacts = useMemo(
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

  const readyToRenderContacts = prepareContacts();

  return (
    <ul className={s.list__block}>
      {isFetching && <Spinner />}
      {readyToRenderContacts && readyToRenderContacts.map(elem => {
        return (
          <li key={elem.id} className={s.contacts__item}>
            {elem.name}: {elem.number}
            <button
              disabled={deleting}
              className={s.button}
              type="button"
              onClick={() => deleteContact(elem.id) && toast.success(`Contact '${elem.name}' deleted`)}
            >
              Delete
            </button>
          </li>
        );
      })}
      {deleting && <ToastContainer
        position="top-center"
        autoClose={1500} />}
    </ul>
  );
};
