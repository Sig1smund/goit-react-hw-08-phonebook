import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { contactApi } from "../../redux/contacts/contactApi";
// import { filter } from '../../redux/contacts/filterSlice';
import { useDeleteContactMutation } from '../../redux/contacts/contactApi';
import { ToastContainer, toast } from 'react-toastify';
import s from './contactList.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactList() {
  // const { refetch } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const filtered = useSelector(filter)
  const contacts = useSelector(selectAllContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (!contacts) {
    //   return;
    // }
    const res = contactApi.endpoints.fetchContacts.initiate(dispatch, selectAllContacts);
    console.log(res);
  //  const result = dispatch(useFetchContactsQuery.endpoints.getPost.initiate(postId))
  
  }, [contacts, dispatch])
  
  
  // const getContacts = useMemo(
  //   () => () => {
  //     if (!contacts) {
  //       return;
  //     }

  //     const normalizedFilter = filtered.toLowerCase().trim();

  //     return contacts
  //       .filter(
  //         contact =>
  //           contact.name.toLowerCase().includes(normalizedFilter)
  //       )
  //   },
  //   [contacts, filtered]
  // );

  // const getAllContacts = getContacts();

  return (
    <ul className={s.list__block}>
      {contacts.map(elem => {
        return (
          <li key={elem.id} className={s.contacts__item}>
            {elem.name}: {elem.number}
            <button
              disabled={isDeleting}
              className={s.button}
              type="button"
              onClick={() => deleteContact(elem.id) && toast.success(`Contact ${elem.name} deleted`)}
            >
              Delete
            </button>
          </li>
        );
      })}
      {isDeleting && <ToastContainer
        position="top-center"
        autoClose={1500} />}
    </ul>);
};
