import {Button, Card} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../JS/Actions/contact";


const ContactCard = ({contact}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={contact.image} />
          <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>{contact.email}</Card.Text>
            <Card.Text>{contact.phone}</Card.Text>
            <Button
              variant="success"
              onClick={() => navigate(`/edit/${contact._id}`)}
            >Edit</Button>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteContact(contact._id))}
            >Delete</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };
export default ContactCard;