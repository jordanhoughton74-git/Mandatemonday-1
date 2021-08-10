import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


export default function ContactForm(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setForm(() => {
           return {
             [name]: value
    }
    ;});}

    function makeVisible(){
        let element = document.getElementById("submitText");
        element.classList.remove("invisible");
      
      }

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_ghcywgp", "template_q32fedl", e.target, "user_IfJyo8NEMuF24V3SBbMN6")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setForm({
            name: "",
            email: "",
            message: ""   
        });
        makeVisible();
    }


    return(
        <>
        <Button variant="success" aria-label="Contact Form" className="modal-title messageIcon" onClick={handleShow}>
          <ChatBubbleOutlineIcon />
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Got an idea? Get in touch with us!</Modal.Title>
            <button type="button" onClick={handleClose} className="btn-close btn-close-white" aria-label="Close"></button>

          </Modal.Header>
          <Form onSubmit={sendEmail}>
          <Modal.Body>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    value={form.name} 
                    name="name"
                    id="name"
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Enter Name" 
                />
                </Form.Group>
                
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    value={form.email} 
                    onChange={handleChange}
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Enter email" 
                    required
                />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        value={form.message} 
                        onChange={handleChange} 
                        id="message"
                        as="textarea" 
                        name="message"
                        rows={3} 
                        placeholder="Enter Message" 
                        required
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <p id="submitText" className="green-text invisible">Thank You! We'll get back to you shortly</p>
                
                <Button className="submitButton" type="submit">
                    Submit
                </Button>
                
            </Modal.Footer>
            </Form>

          
        
        </Modal>
      </>




    )
}