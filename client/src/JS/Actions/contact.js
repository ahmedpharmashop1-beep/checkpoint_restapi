import axios from "axios";
import { GET_CONTACTS, GET_CONTACT, LOAD_CONTACTS, FAIL_CONTACTS } from "../Actionstypes/contact";

//get all contacts
export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get("/api/contact/all");
        dispatch({ type: GET_CONTACTS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/api/contact/add", newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/delete/${id}`);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/update/${id}`, newContact);
        dispatch(getContacts());
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

export const getContact = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
        let result = await axios.get(`/api/contact/get/${id}`);
        dispatch({ type: GET_CONTACT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
};

export default getContacts;