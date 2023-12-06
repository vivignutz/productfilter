import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    console.log('Form data submitted:', formData);

    // You can reset the form data after submission if needed
    setFormData({
      full_name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact">
      <div id="form">
        <h3 className="presentation__content__title">Your message here</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name-field">Name</label>
            <br />
            <input
              id="name-field"
              type="text"
              name="full_name"
              placeholder="Your name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email-field">Email</label>
            <br />
            <input
              id="email-field"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            placeholder="Your message"
            name="message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>

        <div className="alert" id="contact-alert">
          {/* Alert content */}
        </div>
      </div>
    </section>
  );
};

export default Form;