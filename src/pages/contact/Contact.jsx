import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <div className='contact'>
            <form action="https://formspree.io/f/xldjebqy" method='POST'>
                <input type="text" placeholder='Enter your name..' name='username'  required />
                <input type="text" placeholder='Email' name='email'  required/>
                <textarea name="message" placeholder="Message" required></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact