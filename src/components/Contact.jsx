import ProjectScreen from "./ProjectScreen";
import "./Styles/Project.css";
import React, { useState } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const styles = `
  .contact-container {
    max-height: 100vh;
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-grid {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .contact-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .contact-card {
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(71, 85, 105, 0.5);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .contact-card:hover {
    background: rgba(30, 41, 59, 0.7);
    transform: scale(1.05);
  }

  .contact-card-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .contact-icon {
    width: 48px;
    height: 48px;
    background: rgba(59, 130, 246, 0.2);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #60a5fa;
  }

  .contact-info h3 {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  .contact-info p {
    color: #d1d5db;
    font-size: 1rem;
    margin: 0;
  }

  .contact-form-container {
    background: rgba(30, 41, 59, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(71, 85, 105, 0.5);
    border-radius: 1rem;
    padding: 2rem;
  }

  .form-header {
    margin-bottom: 2rem;
    text-align:center;
  }

  .form-header h2 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  .form-header p {
    color: #d1d5db;
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
  }

  .form-group {
    margin-bottom: 1.5rem;
    padding-right:2rem
  }

  .form-group label {
    display: block;
    color: #d1d5db;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(51, 65, 85, 0.5);
    border: 1px solid rgba(75, 85, 99, 0.5);
    border-radius: 0.75rem;
    color: white;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.2s ease;
  }

  .form-input::placeholder, .form-textarea::placeholder {
    color: #9ca3af;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
  }

  .form-textarea {
    resize: auto;
    min-height: 0px;
  }

  .submit-btn {
    width: 100%;
    background: linear-gradient(135deg, #7c3aed, #2563eb);
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .submit-btn:hover {
    background: linear-gradient(135deg, #6d28d9, #1d4ed8);
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  }

  .submit-btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .contact-container {
      padding: 1rem;
    }
    
    .contact-form-container {
      padding: 1.5rem;
    }
    
    .form-header h2 {
      font-size: 1.75rem;
    }

    .contact-grid {
      gap: 1.5rem;
    }
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Message sent:", formData);
      alert("Message sent! (This is a demo)");

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactItems = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ibrahimahmed1233@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimahmed12333@gmail.com",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/ibrahimahmed",
      link: "https://www.linkedin.com/in/ibrahim-ahmed-8b8961254/",
    },

    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/ibrahimahmed",
      link: "https://github.com/ibrahimahmed413",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+923431938944",
      link: "tel:+923431938944",
    },
  ];
  return (
    <>
      <ProjectScreen
        dh1="Contact Me"
        div="I'd love to collaborate or discuss new opportunities - feel fresh to reach out "
      />
      <style>{styles}</style>
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className="contact-cards">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="contact-card"
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className="contact-card-content">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-info">
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Contact Me</h2>
              <p>
                I'd love to collaborate der discuss new opportunities – feel
                free to reach out.
              </p>
            </div>

            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Message</label>
                <input
                  type=""
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Feel free to ask!"
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello..."
                  disabled={isSubmitting}
                />
              </div> */}

              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
