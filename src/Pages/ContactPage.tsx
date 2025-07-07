// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";

// const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

// const ContactPage: React.FC = () => {
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
//     const { name, email, phone, location, message } = formData;

//     if (!name || !email || !phone || !location || !message || !recaptchaToken) {
//       setError("Please fill all fields and verify reCAPTCHA.");
//       setSubmitted(false);
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/contact/full", {
//         ...formData,
//         token: recaptchaToken, // ✅ Include the token
//       });
//       console.log("✅ Data saved:", res.data);
//       setError("");
//       setSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         location: "",
//         message: "",
//       });
//     } catch (err: any) {
//       console.error("❌ Submission error:", err.message);
//       setError("Something went wrong. Please try again.");
//       setSubmitted(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
//       <h2>Contact Us</h2>
//       <p>Please fill in the form below and we'll get back to you.</p>

//       <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           style={inputStyle}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           style={inputStyle}
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Your Phone"
//           value={formData.phone}
//           onChange={handleInputChange}
//           style={inputStyle}
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Your Location"
//           value={formData.location}
//           onChange={handleInputChange}
//           style={inputStyle}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleInputChange}
//           style={{ ...inputStyle, height: "100px" }}
//           required
//         ></textarea>

//         <ReCAPTCHA
//           sitekey={RECAPTCHA_SITE_KEY}
//           onChange={handleCaptchaChange}
//         />

//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {submitted && <p style={{ color: "green" }}>Message submitted successfully!</p>}

//         <button type="submit" style={buttonStyle}>Submit</button>
//       </form>
//     </div>
//   );
// };

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "15px",
//   borderRadius: "4px",
//   border: "1px solid #ccc",
//   fontSize: "16px",
// };

// const buttonStyle: React.CSSProperties = {
//   padding: "10px 20px",
//   backgroundColor: "#0047AB",
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// export default ContactPage;



import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const RECAPTCHA_SITE_KEY = "6Ld-tHorAAAAALCerLILpICwKWHhfDS-s3mTEb3T";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // ✅ Load Google reCAPTCHA script early
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.onload = () => setRecaptchaReady(true);
    document.body.appendChild(script);
  }, []);

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
    const { name, email, phone, location, message } = formData;

    if (!name || !email || !phone || !location || !message || !recaptchaToken) {
      setError("Please fill all fields and verify reCAPTCHA.");
      setSubmitted(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/contact/full", {
        ...formData,
        token: recaptchaToken,
      });

      console.log("✅ Data saved:", res.data);
      setError("");
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
      recaptchaRef.current?.reset();
    } catch (err: any) {
      console.error("❌ Submission error:", err.message);
      setError("Something went wrong. Please try again.");
      setSubmitted(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h2>Contact Us</h2>
      <p>Please fill in the form below and we'll get back to you.</p>

      {!recaptchaReady ? (
        <p>Loading form...</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ ...inputStyle, height: "100px" }}
            required
          ></textarea>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          {submitted && <p style={{ color: "green" }}>Message submitted successfully!</p>}

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      )}
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#0047AB",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ContactPage;
