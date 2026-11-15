
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setFeedback('Please complete all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback('Please enter a valid email address.');
      return;
    }

    const messages = JSON.parse(
      localStorage.getItem('careerconnect-messages') || '[]'
    );

    localStorage.setItem(
      'careerconnect-messages',
      JSON.stringify([...messages, { ...form, date: new Date().toLocaleDateString() }])
    );

    setFeedback('');
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span>GET IN TOUCH</span>
          <h1>We'd love to hear from you.</h1>
          <p>
            Have a question or need assistance? Send us a message.
          </p>
        </div>
      </section>

      <section className="container contact-layout">
        <div className="contact-info">
          <span className="section-tag">CONTACT INFORMATION</span>
          <h2>Let's start a conversation.</h2>
          <p>
            Our team is here to help with questions about job opportunities
            and using CareerConnect.
          </p>

          <div className="contact-info-item">
            <Mail size={22} />
            <div>
              <strong>Email</strong>
              <span>support@careerconnect.com</span>
            </div>
          </div>

          <div className="contact-info-item">
            <Phone size={22} />
            <div>
              <strong>Phone</strong>
              <span>+234 800 000 0000</span>
            </div>
          </div>

          <div className="contact-info-item">
            <MapPin size={22} />
            <div>
              <strong>Location</strong>
              <span>Nigeria</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="contact-success">
              <CheckCircle size={48} />
              <h2>Message received!</h2>
              <p>Your message has been saved successfully.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setForm({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: ''
                  });
                  setSubmitted(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a message</h2>

              <label>Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
              />

              <label>Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
              />

              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is your message about?"
              />

              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />

              {feedback && <p className="form-error">{feedback}</p>}

              <button className="primary-button contact-submit" type="submit">
                Send Message <Send size={17} />
              </button>

              <p className="form-note">
                This demonstration saves messages in your browser.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
