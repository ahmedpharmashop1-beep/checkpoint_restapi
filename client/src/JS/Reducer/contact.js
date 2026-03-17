// initial state
import { 
  GET_CONTACTS, 
  GET_CONTACT, 
  LOAD_CONTACTS, 
  FAIL_CONTACTS 
} from "../Actionstypes/contact";


const initialState = {
  listContacts: [],
  contactToGet: null,
  load: false,
  error: null
};

// pur fonction
const contactReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return { ...state, load: false, listContacts: payload.listContacts };
    case GET_CONTACT:
      return { ...state, load: false, contactToGet: payload.contactToGet };
    case FAIL_CONTACTS:
      return { ...state, load: false, error: payload };
    default:
      return state;
  }
};
export default contactReducer;