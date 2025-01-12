
import React, { useState } from 'react';
import '../css/contact.css';



import emailjs from '@emailjs/browser';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [showAlert, setShowAlert] = useState(false);

  const handleSendMessage = () => {
    setShowAlert(true); // Show the alert
    setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
  };

  const handleSubmit = (e) => {


    e.preventDefault();

    const serviceId = 'service_5h3u4k7';
    const templeteId = 'template_z30kypk';
    const publicKey = 'sj_wn3yYNpH6jj2-J';



    // Send email using emailjs
    emailjs.sendForm(serviceId, templeteId, e.target, publicKey)
      .then((result) => {
        console.log(result.text);

        // Show success message or perform other actions
      }, (error) => {
        console.error(error);
        // Show error message or handle errors
      });

    // Clear form fields (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };



  return (


    <div className="module">

      <div className="contact-section">
        <div className="about-banner">
          <h1> Contact Us </h1>
        </div>
        <br />
        <div className="contact-cards">
          <div className="contact-card">
            <img src="/logo/map.png" alt="Phone" className="contact-icon" />
            <h3>Admin Office</h3>
            <p>Supermoon Traders</p>
            <p>Shop number 2, First floor, Plot number C-11-21, Smashan maroti road, Kailas Nagar, Ch Sambhaji Nagar - 431001, Maharashtra, India</p>
            <p>📞 +91 70285 52927 (Mr. Akshay Rahul Ghorpade)</p>
            <p> 📧{" "}
              <a
                href="mailto:supermoontraders11@gmail.com"
                style={{ textDecoration: "none", color: "blue" }}
              >
                supermoontraders11@gmail.com
              </a></p>
          </div>

          <div className="contact-card">
            <img src="/logo/map.png" alt="Email" className="contact-icon" />
            <h3>Godown Address</h3>
            <p>Supermoon Traders</p>
            <p>387, Lane no. 3, Kailas nagar, Ch Sambhaji Nagar- 431001</p>
            <p>📞 +91 93222 51291 (Mr. Ajit garkal)</p>
            <p> 📧{" "}
              <a
                href="mailto:supermoontraders11@gmail.com"
                style={{ textDecoration: "none", color: "blue" }}
              >
                supermoontraders11@gmail.com
              </a></p>
          </div>

          <div className="contact-card">
            <img src="/logo/map.png" alt="Location" className="contact-icon" />
            <h3>Visit Us</h3>
            <p>
              Drop by our office for a face-to-face conversation. We’re always happy to meet our customers.
            </p>
            <p>
              <strong>Smashan maroti road, Kailas Nagar, Ch Sambhaji Nagar - 431001, Maharashtra, India</strong>
            </p>
          </div>
        </div>


        {/* ------------------------------------------ send message ---------------------------------------- */}
        <div className="contact-form">
          <h2>send message us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="firstName">First Name:</label> */}
              <div className="name-fields">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="subject">Subject:</label> */}
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
              />
            </div>
            <button onClick={handleSendMessage} type='submit'>
              Send Message
            </button>
            {showAlert && (
              <div
                style={{
                  padding: '10px',
                  margin: '10px 0',
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  border: '1px solid #c3e6cb',
                  borderRadius: '5px',
                }}
              >
                Message has been sent!
              </div>
            )}
          </form>

          <div className="working-hours">
            <h2>Working Hours</h2>
            <table>
              <tbody>
                <tr>
                  <th>Monday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Tuesday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- map ------------------------------------------ */}

        <div className="map-container">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1474.9362301045703!2d75.34212238384367!3d19.878703673544333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d19.879335599999997!2d75.34266199999999!5e0!3m2!1sen!2sin!4v1736263404791!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
