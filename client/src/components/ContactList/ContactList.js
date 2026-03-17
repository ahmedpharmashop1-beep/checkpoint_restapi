import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../JS/Actions/contact';
import ContactCard from '../ContactCard/ContactCard';
import  Spinner  from 'react-bootstrap/spinner';
import {Helmet} from 'react-helmet';

const ContactList = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector((state) => state.contactReducer.listContacts);
    const load = useSelector((state) => state.contactReducer.load);
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contactlist</title>
            <link rel="canonical"/>
        </Helmet>
        <h1>ContactList</h1>
        <div className='uselist'>
            {load ? <Spinner animation="border" /> : listContacts.map((el) => <ContactCard contact={el} key={el._id} />)}
    </div>

    </div>
  )
}   
export default ContactList;