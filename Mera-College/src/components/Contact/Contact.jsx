import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3cc3b28-eb31-450f-9f96-474d07407e2e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel Free to Reach out through contact Form or Find our
                    contact Information Below. Your Feedback, Questions and Suggestions are
                    important to us as we strive to provide exceptional services to
                    our University Community </p>
                <ul>
                    <li> <img src={mail_icon} alt="" />dubeypriyanshu033@gmail.com </li>
                    <li><img src={phone_icon} alt="" />+91 6204239578 </li>
                    <li><img src={location_icon} alt="" /> Delhi 
                       </li>
                    </ul>
                    </div>
                    <div className="contact-col">
                        <form onSubmit = {onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name'
                        required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number'
                        required />
                    <label > Write Your Messages Here</label>
                    <textarea name="Message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type ='submit' className='btn dark-btn'> Submit Now <img src={white_arrow}
                     alt="" /></ button>
                </form>
                <span>{result}</span>
            </div>
        </div>

    )
}

export default Contact
