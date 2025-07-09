// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

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

//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/contact/footer", {
//         ...formData,
//         token: recaptchaToken,
//       });

//       setSubmitted(true);
//       setError("");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err: any) {
//       console.error("❌ Footer submission error:", err.message);
//       setError("Failed to submit form. Please try again.");
//     }
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* Navigation Links */}
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
//               <li>Tethered Drone</li>
//               <li>Surveillance Drone</li>
//               <li>Seedcopter Drone</li>
//               <li>FPV Drone</li>
//               <li>Kamikaze Drone</li>
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Info</h4>
//             <ul style={styles.ul}>
//               <li><strong>Email:</strong> service@abhyuday.com</li>
//               <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>
//                 <img src="/Img/logo.png" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
//                 <div>Abhyuday Bharat</div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Contact Form */}
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
//             <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {submitted && <p style={{ color: "lightgreen" }}>Message submitted successfully!</p>}
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

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

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
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     transition: "color 0.2s ease",
//   },
//   linkHover: {
//     color: "#FFD700",
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

// const Footer: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");
//   const location = useLocation();

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

//     const { name, email, message } = formData;

//     if (!name || !email || !message) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/contact/footer", {
//         ...formData,
//         token: recaptchaToken,
//       });

//       setSubmitted(true);
//       setError("");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err: any) {
//       console.error("❌ Footer submission error:", err.message);
//       setError("Failed to submit form. Please try again.");
//     }
//   };

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/Products" },
//     { name: "Solutions", path: "/solutions" },
//     { name: "About Us", path: "/About" },
//     { name: "Support", path: "/support" },
//     { name: "FAQ", path: "/faq" },
//     { name: "Contact", path: "/contact" },
//     { name: "News", path: "/news" },
//   ];

//   const droneLinks = [
//     { name: "Agricultural Drone", path: "/?tab=Agriculture#real-world-challenges" },
//     { name: "Transport Drone", path: "/?tab=Transport#real-world-challenges" },
//     { name: "Firefighting Drone", path: "/?tab=Firefighting#real-world-challenges" },
//     { name: "Cleaning Drone", path: "/?tab=Cleaning#real-world-challenges" },
//     { name: "Long Range Drone", path: "/#products" },
//     { name: "Tethered Drone", path: "/#products" },
//     { name: "Surveillance Drone", path: "/#products" },
//     { name: "Seedcopter Drone", path: "/#products" },
//     { name: "FPV Drone", path: "/#products" },
//     { name: "Kamikaze Drone", path: "/#products" },
//   ];

//   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
//     const isSamePage = location.pathname === "/" && path.startsWith("/#");
//     const isTabLink = path.includes("?tab=") && path.includes("#real-world-challenges");

//     if (isSamePage || isTabLink) {
//       e.preventDefault();
//       const sectionId = path.includes("#") ? path.split("#")[1] : null;
//       if (sectionId) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//       if (isTabLink) {
//         window.history.pushState(null, "", path);
//       }
//     }
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* Navigation Links */}
//         <div style={styles.columnGroup}>
//           <div style={styles.column}>
//             <h4>Site Navigation</h4>
//             <ul style={styles.ul}>
//               {navLinks.map((nav) => (
//                 <li key={nav.name}>
//                   <Link
//                     to={nav.path}
//                     style={styles.link}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHover.color || "#FFD700")}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = styles.link.color || "#fff")}
//                     onClick={(e) => handleLinkClick(e, nav.path)}
//                   >
//                     {nav.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Shop Drone</h4>
//             <ul style={styles.ul}>
//               {droneLinks.map((drone) => (
//                 <li key={drone.name}>
//                   <Link
//                     to={drone.path}
//                     style={styles.link}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHover.color || "#FFD700")}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = styles.link.color || "#fff")}
//                     onClick={(e) => handleLinkClick(e, drone.path)}
//                   >
//                     {drone.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div style={styles.column}>
//             <h4>Info</h4>
//             <ul style={styles.ul}>
//               <li><strong>Email:</strong> service@abhyuday.com</li>
//               <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>
//                 <img src="/Img/logo.png" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
//                 <div>Abhyuday Bharat</div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Contact Form */}
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
//             <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {submitted && <p style={{ color: "lightgreen" }}>Message submitted successfully!</p>}
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


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  link: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  linkHover: {
    color: "#FFD700",
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
  const location = useLocation();

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "News", path: "/news" },
  ];

  const droneLinks = [
    { name: "Agricultural Drone", path: "/?tab=Agriculture#tabs-section" },
    { name: "Transport Drone", path: "/?tab=Transport#tabs-section" },
    { name: "Firefighting Drone", path: "/?tab=Firefighting#tabs-section" },
    { name: "Cleaning Drone", path: "/?tab=Cleaning#tabs-section" },
    { name: "Long Range Drone", path: "/#products" },
    { name: "Tethered Drone", path: "/#products" },
    { name: "Surveillance Drone", path: "/#products" },
    { name: "Seedcopter Drone", path: "/#products" },
    { name: "FPV Drone", path: "/#products" },
    { name: "Kamikaze Drone", path: "/#products" },
  ];

  const handleDroneLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const isSamePage = location.pathname === "/" && (path.startsWith("/#") || path.includes("#tabs-section"));
    if (isSamePage) {
      e.preventDefault();
      const sectionId = path.includes("#") ? path.split("#")[1] : null;
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", path);
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
              {navLinks.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.path}
                    style={styles.link}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHover.color || "#FFD700")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.link.color || "#fff")}
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Shop Drone</h4>
            <ul style={styles.ul}>
              {droneLinks.map((drone) => (
                <li key={drone.name}>
                  <Link
                    to={drone.path}
                    style={styles.link}
                    onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHover.color || "#FFD700")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = styles.link.color || "#fff")}
                    onClick={(e) => handleDroneLinkClick(e, drone.path)}
                  >
                    {drone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.column}>
            <h4>Info</h4>
            <ul style={styles.ul}>
              <li><strong>Email:</strong> service@abhyuday.com</li>
              <li><strong>Phone/Whatsapp:</strong> +1-917-428-4343</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>
                <img src="/Img/logo.png" alt="Skytech Logo" style={{ height: 30, marginTop: 10 }} />
                <div>Abhyuday Bharat</div>
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