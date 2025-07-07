// import React, { useState } from "react";

// const Footer: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Just simulating submission
//     alert("Message submitted (simulated)");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* Left: Navigation Columns */}
//         <div style={styles.columnGroup}>
//           <div style={styles.column}>
//             <h4>Site Navigation</h4>
//             <ul style={styles.ul}>
//               <li>Home</li>
//               <li>Products</li>
//               <li>Solutions</li>
//               <li>About Us</li>
//               <li>Support</li>
//               <li>FAQ</li>
//               <li>Contact</li>
//               <li>News</li>
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Shop Drone</h4>
//             <ul style={styles.ul}>
//               <li>Agricultural Drone</li>
//               <li>Transport Drone</li>
//               <li>Firefighting Drone</li>
//               <li>Cleaning Drone</li>
//               <li>Long Range Drone</li>
//               <li>Manned Drone</li>
//               <li>Accessories</li>
//               <li>Mount Devices</li>
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Info</h4>
//             <ul style={styles.ul}>
//               <li><strong>Email:</strong> service@skytechuav.com</li>
//               <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>
//                 <img src="/logo.svg" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
//                 <div>Skytech</div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div style={styles.contactForm}>
//           <h4>Contact Form</h4>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               style={styles.input}
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               style={styles.input}
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               rows={4}
//               style={styles.textarea}
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             />
//             <div style={styles.captchaPlaceholder}>[ I'm not a robot ]</div>
//             <button type="submit" style={styles.button}>Send</button>
//           </form>
//         </div>
//       </div>

//       <div style={styles.bottomText}>
//         © 2025 Skytech UAV All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // ----------------
// // Inline CSS Styles
// // ----------------
// const styles: { [key: string]: React.CSSProperties } = {
//   footer: {
//     backgroundColor: "#111",
//     color: "#fff",
//     padding: "40px 20px 20px",
//     fontFamily: "sans-serif",
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: "30px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   columnGroup: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "40px",
//     flex: "1 1 60%",
//   },
//   column: {
//     minWidth: "180px",
//   },
//   ul: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     lineHeight: "1.8",
//   },
//   contactForm: {
//     flex: "1 1 300px",
//     minWidth: "280px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   captchaPlaceholder: {
//     backgroundColor: "#fff",
//     color: "#000",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "4px",
//     textAlign: "center",
//     fontSize: "13px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#fff",
//     color: "#000",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   bottomText: {
//     textAlign: "center",
//     marginTop: "40px",
//     fontSize: "14px",
//     color: "#ccc",
//   },
// };



// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const RECAPTCHA_SITE_KEY = "6Lelr3orAAAAANXqx0VFfff4nEf-X63QrX5dgn_u"; // Replace this with your actual site key

// const Footer: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!recaptchaToken) {
//       setError("Please verify you're not a robot.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/contact", {
//         ...formData,
//         token: recaptchaToken,
//       });

//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });
//       setError("");
//     } catch (err) {
//       setError("Failed to submit form.");
//     }
//   };

//   return (
//     <footer style={{ backgroundColor: "#111", color: "#fff", padding: "2rem" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleInputChange}
//           required
//         />
//         <ReCAPTCHA
//           sitekey={RECAPTCHA_SITE_KEY}
//           onChange={handleCaptchaChange}
//         />
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {submitted && <p style={{ color: "green" }}>Submitted successfully!</p>}
//         <button type="submit">Send</button>
//       </form>
//     </footer>
//   );
// };

// export default Footer;


// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

// const Footer: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     message: "",
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!recaptchaToken) {
//       setError("Please verify you're not a robot.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/contact", {
//         ...formData,
//         token: recaptchaToken,
//       });

//       setSubmitted(true);
//       setFormData({ name: "", email: "", phone: "", location: "", message: "" });
//       setError("");
//     } catch (err) {
//       setError("Failed to submit form.");
//     }
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* Left: Navigation Columns */}
//         <div style={styles.columnGroup}>
//           <div style={styles.column}>
//             <h4>Site Navigation</h4>
//             <ul style={styles.ul}>
//               <li>Home</li>
//               <li>Products</li>
//               <li>Solutions</li>
//               <li>About Us</li>
//               <li>Support</li>
//               <li>FAQ</li>
//               <li>Contact</li>
//               <li>News</li>
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Shop Drone</h4>
//             <ul style={styles.ul}>
//               <li>Agricultural Drone</li>
//               <li>Transport Drone</li>
//               <li>Firefighting Drone</li>
//               <li>Cleaning Drone</li>
//               <li>Long Range Drone</li>
//               <li>Manned Drone</li>
//               <li>Accessories</li>
//               <li>Mount Devices</li>
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Info</h4>
//             <ul style={styles.ul}>
//               <li><strong>Email:</strong> service@skytechuav.com</li>
//               <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>
//                 <img src="/logo.svg" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
//                 <div>Skytech</div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div style={styles.contactForm}>
//           <h4>Contact Form</h4>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               style={styles.input}
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               style={styles.input}
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               style={styles.input}
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               style={styles.input}
//               value={formData.location}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               rows={4}
//               style={styles.textarea}
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//             />
//             <ReCAPTCHA
//               sitekey={RECAPTCHA_SITE_KEY}
//               onChange={handleCaptchaChange}
//             />
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {submitted && <p style={{ color: "lightgreen" }}>Submitted successfully!</p>}
//             <button type="submit" style={styles.button}>Send</button>
//           </form>
//         </div>
//       </div>

//       <div style={styles.bottomText}>
//         © 2025 Skytech UAV All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // ----------------
// // Inline CSS Styles
// // ----------------
// const styles: { [key: string]: React.CSSProperties } = {
//   footer: {
//     backgroundColor: "#111",
//     color: "#fff",
//     padding: "40px 20px 20px",
//     fontFamily: "sans-serif",
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: "30px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   columnGroup: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "40px",
//     flex: "1 1 60%",
//   },
//   column: {
//     minWidth: "180px",
//   },
//   ul: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     lineHeight: "1.8",
//   },
//   contactForm: {
//     flex: "1 1 300px",
//     minWidth: "280px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#fff",
//     color: "#000",
//     fontWeight: "bold",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   bottomText: {
//     textAlign: "center",
//     marginTop: "40px",
//     fontSize: "14px",
//     color: "#ccc",
//   },
// };

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

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

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setError("Please verify you're not a robot.");
      return;
    }

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contact/footer", {
        ...formData,
        token: recaptchaToken,
      });

      setSubmitted(true);
      setError("");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("❌ Footer submission error:", err.message);
      setError("Failed to submit form. Please try again.");
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Navigation Links */}
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
                <img src="/Img/logo.png" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
                <div>Skytech</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
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
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {submitted && <p style={{ color: "lightgreen" }}>Message submitted successfully!</p>}
            <button type="submit" style={styles.button}>Send</button>
          </form>
        </div>
      </div>

      <div style={styles.bottomText}>
        © 2025 Skytech UAV All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
