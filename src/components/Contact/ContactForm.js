import './Form.css'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleMessage(e){
        setMessage(e.target.value)
    }

    const [state, handleSubmit] = useForm("xknkvpee");

    if (state.succeeded) {
        return <p>Thanks! I look forward to speaking with you soon!</p>;
    }
    return (
        <div id='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                <span style={{ color: '#b07156' }}>&gt;</span> Email:
                </label>
                <br></br>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />
                <br></br>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor='message'>
                <span style={{ color: '#b07156' }}>&gt;</span> Message:
                </label>
                <br></br>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessage}
                    placeholder="Say what's up!"
                /><br></br>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button class='button' id='submit' type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default ContactForm