import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from "../../JS/Actions/contact";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const handleAdd = () => {
        dispatch(addContact(newContact));
        navigate("/contactlist");
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Contact</title>
                <link rel="canonical" />
            </Helmet>
            <h1>Add Contacts</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={handleChange}
                name="name"
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={handleChange}
                name="email"
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter phone number"
                onChange={handleChange}
                name="phone"
            />
            <Button variant="primary" onClick={handleAdd}>Add Contact</Button>
        </div>
    );
};
export default Add;