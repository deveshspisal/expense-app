import { useState } from "react"

function ContactForm() {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleContactFormSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : name,
            mobile : mobile,
            message : message
        }
        console.log(formData);
        setIsSubmitted(true)
    }
    return(
        <div>
            <h2>Contact Form</h2>
            {isSubmitted ? 
                        <p>Thank you {name} for submiting the form we will get back to you</p> 
                        :  (
                                <form onSubmit={handleContactFormSubmit}>
                                    <label>Enter Your Name</label><br/>
                                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                                    <label>Enter Your Mobile</label><br/>
                                    <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br/>
                                    <label>Message</label><br/>
                                    <textarea value={message} onChange={(e) =>{setMessage(e.target.value)}}></textarea><br/>
                                    <input type="submit"></input>
                                </form>
                            ) }
            
        </div>
    )
}

export default ContactForm