// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-screen overflow-hidden pt-20">
//         <video
//           className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//         <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4">
//           <h1 className="text-5xl font-bold">AGRI DRONE</h1>
//           <p className="text-2xl">Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>

//           {/* Left Column: Text Content */}
//           <div style={styles.textColumn}>
//             <h4 style={styles.highlight}>We are</h4>
//             <h2 style={styles.heading}>Skytech UAV Drone Manufacturer</h2>
//             <ul style={styles.list}>
//               <li><strong>Established in 2008</strong>, <strong>Skytech UAV</strong> leads in practical drone innovations.</li>
//               <li><strong>Skytech UAV</strong> offers complete drone systems, components, and custom solutions.</li>
//               <li><strong>Skytech UAV</strong> offers OEM and ODM services to build your distinctive brand.</li>
//               <li><strong>Skytech UAV</strong> New York Sales and Service Center provides worldwide support.</li>
//             </ul>
//             <div style={styles.buttonRow}>
//               <button style={styles.outlineButton}>Learn More</button>
//               <button style={styles.fillButton}>Shop Now</button>
//             </div>
//           </div>

//           {/* Right Column: Drone Image */}
//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/DroneImage.png" // ✅ Update this path if needed
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// // ----------------
// // Inline Styles
// // ----------------
// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "60px 20px",
//   },
//   gridContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "40px",
//   },
//   textColumn: {
//     flex: "1 1 500px",
//     minWidth: "280px",
//   },
//   highlight: {
//     color: "#FFD700",
//     fontWeight: "bold",
//     fontSize: "18px",
//     marginBottom: "10px",
//   },
//   heading: {
//     fontSize: "34px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   list: {
//     listStyle: "disc",
//     paddingLeft: "20px",
//     marginBottom: "25px",
//     lineHeight: "1.6",
//   },
//   buttonRow: {
//     display: "flex",
//     gap: "15px",
//     flexWrap: "wrap",
//   },
//   outlineButton: {
//     padding: "10px 24px",
//     border: "2px solid white",
//     borderRadius: "30px",
//     backgroundColor: "transparent",
//     color: "#fff",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   fillButton: {
//     padding: "10px 24px",
//     borderRadius: "30px",
//     backgroundColor: "#FFD700",
//     color: "#000",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//   },
//   imageColumn: {
//     flex: "1 1 500px",
//     minWidth: "280px",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     maxWidth: "500px",
//     height: "auto",
//   },
// };

// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// const HomePage: React.FC = () => {
//     return (
//         <>
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative h-screen overflow-hidden pt-20">
//                 <video
//                     className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 >
//                     <source src="/Img/AA.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//                 <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4">
//                     <h1 className="text-5xl font-bold">AGRI DRONE</h1>
//                     <p className="text-2xl">Beyond Limits, Above All</p>
//                 </div>
//             </section>

//             {/* Skytech UAV Drone Manufacturer Section */}
//             <section style={styles.wrapper}>
//                 <div style={styles.gridContainer}>
//                     {/* Left Column: Text Content */}
//                     <div style={styles.textColumn}>
//                         <h4 style={styles.highlight}>We are</h4>
//                         <h2 style={styles.heading}>Skytech UAV Drone Manufacturer</h2>
//                         <ul style={styles.list}>
//                             <li><strong>Established in 2008</strong>, <strong>Skytech UAV</strong> leads in practical drone innovations.</li>
//                             <li><strong>Skytech UAV</strong> offers complete drone systems, components, and custom solutions.</li>
//                             <li><strong>Skytech UAV</strong> offers OEM and ODM services to build your distinctive brand.</li>
//                             <li><strong>Skytech UAV</strong> New York Sales and Service Center provides worldwide support.</li>
//                         </ul>
//                         <div style={styles.buttonRow}>
//                             <button style={styles.outlineButton}>Learn More</button>
//                             <button style={styles.fillButton}>Shop Now</button>
//                         </div>
//                     </div>

//                     {/* Right Column: Drone Image */}
//                     <div style={styles.imageColumn}>
//                         <img
//                             src="/Img/DroneImage.png"
//                             alt="Skytech Drone"
//                             style={styles.image}
//                         />
//                     </div>
//                 </div>
//             </section>
// {/* Custom Drone Inquiry Video Section */}
// <section className="relative h-screen w-full overflow-hidden">
//   {/* Background Video */}
//   <video
//     className="absolute top-0 left-0 w-full h-full object-cover z-0"
//     autoPlay
//     muted
//     loop
//     playsInline
//   >
//     <source src="https://www.youtube.com/watch?v=y7ujCJxaB3w" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>

//   {/* Centered Overlay Text */}
//   <div
//     className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4"
//     style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
//   >
//     <p style={{
//       letterSpacing: "2px",
//       fontWeight: "500",
//       fontSize: "14px",
//       textTransform: "uppercase"
//     }}>
//       CUSTOM DRONE TAILORED FOR AGRICULTURE
//     </p>
//     <h2 style={{
//       fontSize: "44px",
//       fontWeight: "bold",
//       margin: "12px 0"
//     }}>
//       2025 Skytech Agriculture Drone
//     </h2>
//     <p style={{
//       fontSize: "18px",
//       marginBottom: "28px"
//     }}>
//       Spray Capacity: 92L | Transport Payload: 100 kg
//     </p>
//     <button
//       style={{
//         padding: "12px 30px",
//         border: "2px solid white",
//         borderRadius: "30px",
//         backgroundColor: "transparent",
//         color: "#fff",
//         fontSize: "16px",
//         cursor: "pointer",
//       }}
//     >
//       Order Now
//     </button>
//   </div>

//   {/* Bottom-Left Spray Efficiency Label */}
//   <div
//     className="absolute bottom-10 left-10 text-white z-20"
//     style={{ textAlign: "left" }}
//   >
//     <p style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1" }}>
//       33 ha/h
//     </p>
//     <p style={{ fontSize: "20px", marginTop: "5px" }}>
//       Spray Efficiency
//     </p>
//   </div>
// </section>

//             {/* Products Section */}
//             <section>
//                 <Products />
//             </section>
           

           


//             {/* Footer Section */}
//             <Footer />
//         </>
//     );
// };

// export default HomePage;

// // ----------------
// // Inline Styles
// // ----------------
// const styles: { [key: string]: React.CSSProperties } = {
//     wrapper: {
//         backgroundColor: "#000",
//         color: "#fff",
//         padding: "60px 20px",
//     },
//     gridContainer: {
//         display: "flex",
//         flexWrap: "wrap",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: "40px",
//     },
//     textColumn: {
//         flex: "1 1 500px",
//         minWidth: "280px",
//     },
//     highlight: {
//         color: "#FFD700",
//         fontWeight: "bold",
//         fontSize: "18px",
//         marginBottom: "10px",
//     },
//     heading: {
//         fontSize: "34px",
//         fontWeight: "bold",
//         marginBottom: "20px",
//     },
//     list: {
//         listStyle: "disc",
//         paddingLeft: "20px",
//         marginBottom: "25px",
//         lineHeight: "1.6",
//     },
//     buttonRow: {
//         display: "flex",
//         gap: "15px",
//         flexWrap: "wrap",
//     },
//     outlineButton: {
//         padding: "10px 24px",
//         border: "2px solid white",
//         borderRadius: "30px",
//         backgroundColor: "transparent",
//         color: "#fff",
//         fontWeight: "bold",
//         cursor: "pointer",
//     },
//     fillButton: {
//         padding: "10px 24px",
//         borderRadius: "30px",
//         backgroundColor: "#FFD700",
//         color: "#000",
//         fontWeight: "bold",
//         border: "none",
//         cursor: "pointer",
//     },
//     imageColumn: {
//         flex: "1 1 500px",
//         minWidth: "280px",
//         textAlign: "center",
//     },
//     image: {
//         width: "100%",
//         maxWidth: "500px",
//         height: "auto",
//     },
// };



// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-screen overflow-hidden pt-20">
//         <video
//           className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
//         <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4">
//           <h1 className="text-5xl font-bold">AGRI DRONE</h1>
//           <p className="text-2xl">Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
//           {/* Left Column: Text Content */}
//           <div style={styles.textColumn}>
//             <h4 style={styles.highlight}>We are</h4>
//             <h2 style={styles.heading}>Skytech UAV Drone Manufacturer</h2>
//             <ul style={styles.list}>
//               <li><strong>Established in 2008</strong>, <strong>Skytech UAV</strong> leads in practical drone innovations.</li>
//               <li><strong>Skytech UAV</strong> offers complete drone systems, components, and custom solutions.</li>
//               <li><strong>Skytech UAV</strong> offers OEM and ODM services to build your distinctive brand.</li>
//               <li><strong>Skytech UAV</strong> New York Sales and Service Center provides worldwide support.</li>
//             </ul>
//             <div style={styles.buttonRow}>
//               <button style={styles.outlineButton}>Learn More</button>
//               <button style={styles.fillButton}>Shop Now</button>
//             </div>
//           </div>

//           {/* Right Column: Drone Image */}
//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/DroneImage.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section className="relative h-screen w-full overflow-hidden">
//         {/* YouTube Video Embed */}
//         <iframe
//           className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         {/* Overlay */}
//         <div
//           className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
//         >
//           <p style={{
//             letterSpacing: "2px",
//             fontWeight: "500",
//             fontSize: "14px",
//             textTransform: "uppercase"
//           }}>
//             CUSTOM DRONE TAILORED FOR AGRICULTURE
//           </p>
//           <h2 style={{
//             fontSize: "44px",
//             fontWeight: "bold",
//             margin: "12px 0"
//           }}>
//             2025 Skytech Agriculture Drone
//           </h2>
//           <p style={{
//             fontSize: "18px",
//             marginBottom: "28px"
//           }}>
//             Spray Capacity: 92L | Transport Payload: 100 kg
//           </p>
//           <button
//             style={{
//               padding: "12px 30px",
//               border: "2px solid white",
//               borderRadius: "30px",
//               backgroundColor: "transparent",
//               color: "#fff",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//           >
//             Order Now
//           </button>
//         </div>

//         {/* Bottom Left Efficiency Label */}
//         <div
//           className="absolute bottom-10 left-10 text-white z-20"
//           style={{ textAlign: "left" }}
//         >
//           <p style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1" }}>
//             33 ha/h
//           </p>
//           <p style={{ fontSize: "20px", marginTop: "5px" }}>
//             Spray Efficiency
//           </p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// // ----------------
// // Inline Styles
// // ----------------
// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "60px 20px",
//   },
//   gridContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "40px",
//   },
//   textColumn: {
//     flex: "1 1 500px",
//     minWidth: "280px",
//   },
//   highlight: {
//     color: "#FFD700",
//     fontWeight: "bold",
//     fontSize: "18px",
//     marginBottom: "10px",
//   },
//   heading: {
//     fontSize: "34px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   list: {
//     listStyle: "disc",
//     paddingLeft: "20px",
//     marginBottom: "25px",
//     lineHeight: "1.6",
//   },
//   buttonRow: {
//     display: "flex",
//     gap: "15px",
//     flexWrap: "wrap",
//   },
//   outlineButton: {
//     padding: "10px 24px",
//     border: "2px solid white",
//     borderRadius: "30px",
//     backgroundColor: "transparent",
//     color: "#fff",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
//   fillButton: {
//     padding: "10px 24px",
//     borderRadius: "30px",
//     backgroundColor: "#FFD700",
//     color: "#000",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//   },
//   imageColumn: {
//     flex: "1 1 500px",
//     minWidth: "280px",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     maxWidth: "500px",
//     height: "auto",
//   },
// };



import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Products from './Products';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section style={heroStyles.heroSection}>
        <video
          style={heroStyles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Img/AA.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={heroStyles.overlay}></div>
        <div style={heroStyles.heroContent}>
          <h1 style={heroStyles.title}>AGRI DRONE</h1>
          <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
        </div>
      </section>

      {/* Skytech UAV Drone Manufacturer Section */}
      <section style={styles.wrapper}>
        <div style={styles.gridContainer}>
          <div style={styles.textColumn}>
            <h4 style={styles.highlight}>We are</h4>
            <h2 style={styles.heading}>Skytech UAV Drone Manufacturer</h2>
            <ul style={styles.list}>
              <li><strong>Established in 2008</strong>, <strong>Skytech UAV</strong> leads in practical drone innovations.</li>
              <li><strong>Skytech UAV</strong> offers complete drone systems, components, and custom solutions.</li>
              <li><strong>Skytech UAV</strong> offers OEM and ODM services to build your distinctive brand.</li>
              <li><strong>Skytech UAV</strong> New York Sales and Service Center provides worldwide support.</li>
            </ul>
            <div style={styles.buttonRow}>
              <button style={styles.outlineButton}>Learn More</button>
              <button style={styles.fillButton}>Shop Now</button>
            </div>
          </div>

          <div style={styles.imageColumn}>
            <img
              src="/Img/drone.png"
              alt="Skytech Drone"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Custom Drone Inquiry Section with YouTube Background
      <section style={customStyles.section}>
        <iframe
          src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
          title="Custom Drone Video"
          style={customStyles.videoIframe}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div style={customStyles.overlay}></div>

        <div style={customStyles.contentWrapper}>
          <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
          <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
          <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
          <button style={customStyles.button}>Order Now</button>

          <div style={customStyles.sprayInfo}>
            <p style={customStyles.sprayValue}>33 ha/h</p>
            <p style={customStyles.sprayLabel}>Spray Efficiency</p>
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <section>
        <Products />
      </section>
      {/* Custom Drone Inquiry Section with YouTube Background */}
      <section style={customStyles.section}>
        <iframe
          src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
          title="Custom Drone Video"
          style={customStyles.videoIframe}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div style={customStyles.overlay}></div>

        <div style={customStyles.contentWrapper}>
          <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
          <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
          <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
          <button style={customStyles.button}>Order Now</button>

          <div style={customStyles.sprayInfo}>
            <p style={customStyles.sprayValue}>33 ha/h</p>
            <p style={customStyles.sprayLabel}>Spray Efficiency</p>
          </div>
        </div>
      </section>
          {/* Real-World Challenges Section */}
      <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
            Advanced Drones for Real-World Challenges
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
            boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
            cleaning solutions, our drones are engineered to drive meaningful impact.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
            performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
            empower businesses to innovate and thrive.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },
  textColumn: {
    flex: "1 1 500px",
    minWidth: "280px",
  },
  highlight: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
    marginBottom: "25px",
    lineHeight: "1.6",
  },
  buttonRow: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  outlineButton: {
    padding: "10px 24px",
    border: "2px solid white",
    borderRadius: "30px",
    backgroundColor: "transparent",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  fillButton: {
    padding: "10px 24px",
    borderRadius: "30px",
    backgroundColor: "#FFD700",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  imageColumn: {
    flex: "1 1 500px",
    minWidth: "400px",
    textAlign: "center",
  },
  image: {
    width: "200%",
    maxWidth: "700px",
    height: "auto",
  },
};

const heroStyles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    position: 'relative' as 'relative',
    height: '70vh',
    overflow: 'hidden' as 'hidden',
    paddingTop: '80px',
  },
  video: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover' as 'cover',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute' as 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative' as 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: 'white',
    textAlign: 'center' as 'center',
    gap: '16px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '24px',
  },
};

const customStyles: { [key: string]: React.CSSProperties } = {
  section: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden' as 'hidden',
  },
  videoIframe: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none' as 'none',
  },
  overlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  contentWrapper: {
    position: 'relative' as 'relative',
    zIndex: 2,
    color: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as 'center',
    padding: '0 20px',
  },
  subheading: {
    fontSize: '14px',
    textTransform: 'uppercase' as 'uppercase',
    letterSpacing: '2px',
    fontWeight: '500',
    marginBottom: '10px',
  },
  heading: {
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 30px',
    border: '2px solid white',
    borderRadius: '30px',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '40px',
  },
  sprayInfo: {
    textAlign: 'center' as 'center',
    marginTop: '10px',
  },
  sprayValue: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '1',
    marginBottom: '5px',
  },
  sprayLabel: {
    fontSize: '18px',
  },
};