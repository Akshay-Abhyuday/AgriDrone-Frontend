import React, { useState } from "react";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just simulating submission
    alert("Message submitted (simulated)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left: Navigation Columns */}
        <div style={styles.columnGroup}>
          <div style={styles.column}>
            <h4>Site Navigation</h4>
            <ul style={styles.ul}>
              <li>Home</li>
              <li>Products</li>
              <li>Solutions</li>
              <li>About Us</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>News</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Shop Drone</h4>
            <ul style={styles.ul}>
              <li>Agricultural Drone</li>
              <li>Transport Drone</li>
              <li>Firefighting Drone</li>
              <li>Cleaning Drone</li>
              <li>Long Range Drone</li>
              <li>Manned Drone</li>
              <li>Accessories</li>
              <li>Mount Devices</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Info</h4>
            <ul style={styles.ul}>
              <li><strong>Email:</strong> service@skytechuav.com</li>
              <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>
                <img src="/logo.svg" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
                <div>Skytech</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div style={styles.contactForm}>
          <h4>Contact Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={styles.input}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              style={styles.textarea}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <div style={styles.captchaPlaceholder}>[ I'm not a robot ]</div>
            <button type="submit" style={styles.button}>Send</button>
          </form>
        </div>
      </div>

      <div style={styles.bottomText}>
        © 2025 Abhyuday Group All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

// ----------------
// Inline CSS Styles
// ----------------
const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 20px 20px",
    fontFamily: "sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  columnGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    flex: "1 1 60%",
  },
  column: {
    minWidth: "180px",
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "1.8",
  },
  contactForm: {
    flex: "1 1 300px",
    minWidth: "280px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  captchaPlaceholder: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    textAlign: "center",
    fontSize: "13px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  bottomText: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
    color: "#ccc",
  },
};
