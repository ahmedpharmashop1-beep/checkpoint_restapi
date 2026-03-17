import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editContact, getContact } from "../../JS/Actions/contact";
import { Helmet } from "react-helmet";
import { useMatch, useNavigate } from "react-router-dom";

const Edit = () => {
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contactToGet = useSelector((state) => state.contactReducer.contactToGet);
    const [newContact, setNewContact] = useState(contactToGet || {});
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        dispatch(getContact(match.params.id));
    }, [dispatch, match.params.id]);

    useEffect(() => {
        if (contactToGet) {
            setNewContact(contactToGet);
        }
    }, [contactToGet]);

    const handleEdit = () => {
        dispatch(editContact(match.params.id, newContact));
        navigate(-1);
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Edit Contact</title>
                <link rel="canonical" />
            </Helmet>
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      value={newContact?.name || ""}
      onChange={handleChange} 
      name="name"/>
    <Form.Label>E-mail</Form.Label>
    <Form.Control
      type="text"
      value={newContact?.email || ""}
      onChange={handleChange} 
      name="email"/>
    <Form.Label>Phone</Form.Label>
    <Form.Control
      type="text"
      value={newContact?.phone || ""}
      onChange={handleChange} 
      name="phone"/>
    <Button variant="primary" onClick={handleEdit}>Edit</Button>
    </div>
    );
};
export default Edit;