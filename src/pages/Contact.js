import React, { useState } from 'react';

function ContactUs() {
  // State hooks to handle form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or send data to an API here
    alert(`Message sent from ${name}`);
  };

  return (
    <div>
      <header>
        <nav>
          
        </nav>
      </header>

      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="input-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Cake Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
