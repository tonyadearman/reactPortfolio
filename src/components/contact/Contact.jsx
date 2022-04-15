import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";



const Contact = () => {
  return (
    <div>
    <h1>Contact Form</h1>
    <form>
        <label>Name</label>
        <input type='text' name='name' />

        <label>Email</label>
        <input type='email' name='user_email' />

        <label>Message</label>
        <textarea name='message' rows='4' />
        <input type='submit' value='send' />
    </form>
    </div>
  );
}

export default Contact