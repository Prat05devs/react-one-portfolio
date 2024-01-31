import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://getform.io/f/a93d5d55-911d-4bfe-967a-16de40682f91" method="POST">
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="message"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here......." name="text" />
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form