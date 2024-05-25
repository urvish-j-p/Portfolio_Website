import React, { useState } from "react";
import "./Contact.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/xgebkdzr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success('Sent Successfully!');
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error('Failed to send!');
      });
  };

  return (
    <div className="contact-form">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span
            style={{ color: darkMode ? "white" : "" }}
            className="formHeading"
          >
            Get in Touch
          </span>
          <span className="formHeading">With Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="user"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
