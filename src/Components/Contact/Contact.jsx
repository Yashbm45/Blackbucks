// import React, { useState } from 'react';
// import './Contact.css';  // Import the CSS file for styling

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !message) {
//       setStatus("Please fill in all fields.");
//       return;
//     }

//     const formData = { name, email, message };

//     try {
//       const response = await fetch('/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//       } else {
//         setStatus("Failed to send message.");
//       }
//     } catch (error) {
//       setStatus("An error occurred.");
//     }
//   };

//   return (
//     <div className="contact-page-container">
//       <div className="contact-image">
//         <img src="https://via.placeholder.com/500" alt="Contact Us" />
//       </div>

//       <div className="contact-form-container">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name"
//           />
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your Email"
//           />
//           <label>Message</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Your Message"
//           ></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//         {status && <p className="status-message">{status}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;
