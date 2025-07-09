// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video
//           style={heroStyles.video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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

//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/drone.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section> */}

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>
//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>
//           {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
//             boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
//             cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
//             performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
//             empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "40px 20px",
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
//     minWidth: "400px",
//     textAlign: "center",
//   },
//   image: {
//     width: "200%",
//     maxWidth: "700px",
//     height: "auto",
//   },
// };

// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroSection: {
//     position: 'relative' as 'relative',
//     height: '70vh',
//     overflow: 'hidden' as 'hidden',
//     paddingTop: '80px',
//   },
//   video: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     minWidth: '100%',
//     minHeight: '100%',
//     objectFit: 'cover' as 'cover',
//     zIndex: 0,
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     inset: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   heroContent: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     color: 'white',
//     textAlign: 'center' as 'center',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: '24px',
//   },
// };

// const customStyles: { [key: string]: React.CSSProperties } = {
//   section: {
//     position: 'relative' as 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden' as 'hidden',
//   },
//   videoIframe: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none' as 'none',
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     zIndex: 1,
//   },
//   contentWrapper: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     color: '#fff',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center' as 'center',
//     padding: '0 20px',
//   },
//   subheading: {
//     fontSize: '14px',
//     textTransform: 'uppercase' as 'uppercase',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     marginBottom: '10px',
//   },
//   heading: {
//     fontSize: '44px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   description: {
//     fontSize: '18px',
//     marginBottom: '30px',
//   },
//   button: {
//     padding: '12px 30px',
//     border: '2px solid white',
//     borderRadius: '30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '40px',
//   },
//   sprayInfo: {
//     textAlign: 'center' as 'center',
//     marginTop: '10px',
//   },
//   sprayValue: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     lineHeight: '1',
//     marginBottom: '5px',
//   },
//   sprayLabel: {
//     fontSize: '18px',
//   },
// };




// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// // Define the type for tab keys
// type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');

//   // Add index signature to tabContent
//   const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
//     Cleaning: {
//       image: '/Img/drone_field.jpg',
//       title: 'Cleaning Drones',
//       description: 'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
//     },
//     Agriculture: {
//       image: '/Img/agriculture_drone.jpg',
//       title: 'Agriculture Drones',
//       description: 'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
//     },
//     Transport: {
//       image: '/Img/transport_drone.jpg',
//       title: 'Transport Drones',
//       description: 'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
//     },
//     Firefighting: {
//       image: '/Img/firefighting_drone.jpg',
//       title: 'Firefighting Drones',
//       description: 'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video
//           style={heroStyles.video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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

//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/drone.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
//             boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
//             cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
//             performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
//             empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* New Section with Tabs */}
//       <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Agriculture' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Agriculture')}
//             >
//               Agriculture
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Transport' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Transport')}
//             >
//               Transport
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Firefighting' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Firefighting')}
//             >
//               Firefighting
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Cleaning' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Cleaning')}
//             >
//               Cleaning
//             </button>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} Drone`}
//               style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
//             />
//             <div style={{ width: '45%', textAlign: 'left', paddingLeft: '20px' }}>
//               <h2>{tabContent[activeTab].title}</h2>
//               <p>{tabContent[activeTab].description}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "40px 20px",
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
//     minWidth: "400px",
//     textAlign: "center",
//   },
//   image: {
//     width: "200%",
//     maxWidth: "700px",
//     height: "auto",
//   },
// };

// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroSection: {
//     position: 'relative' as 'relative',
//     height: '70vh',
//     overflow: 'hidden' as 'hidden',
//     paddingTop: '80px',
//   },
//   video: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     minWidth: '100%',
//     minHeight: '100%',
//     objectFit: 'cover' as 'cover',
//     zIndex: 0,
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     inset: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   heroContent: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     color: 'white',
//     textAlign: 'center' as 'center',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: '24px',
//   },
// };

// const customStyles: { [key: string]: React.CSSProperties } = {
//   section: {
//     position: 'relative' as 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden' as 'hidden',
//   },
//   videoIframe: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none' as 'none',
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     zIndex: 1,
//   },
//   contentWrapper: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     color: '#fff',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center' as 'center',
//     padding: '0 20px',
//   },
//   subheading: {
//     fontSize: '14px',
//     textTransform: 'uppercase' as 'uppercase',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     marginBottom: '10px',
//   },
//   heading: {
//     fontSize: '44px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   description: {
//     fontSize: '18px',
//     marginBottom: '30px',
//   },
//   button: {
//     padding: '12px 30px',
//     border: '2px solid white',
//     borderRadius: '30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '40px',
//   },
//   sprayInfo: {
//     textAlign: 'center' as 'center',
//     marginTop: '10px',
//   },
//   sprayValue: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     lineHeight: '1',
//     marginBottom: '5px',
//   },
//   sprayLabel: {
//     fontSize: '18px',
//   },
// };

// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// // Define the type for tab keys
// type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');

//   // Add index signature to tabContent
//   const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
//     Cleaning: {
//       image: '/Img/cleaning.png',
//       title: 'Cleaning Drones',
//       description: 'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
//     },
//     Agriculture: {
//       image: '/Img/agri.png',
//       title: 'Agriculture Drones',
//       description: 'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
//     },
//     Transport: {
//       image: '/Img/transport.png',
//       title: 'Transport Drones',
//       description: 'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
//     },
//     Firefighting: {
//       image: '/Img/firefighting.png',
//       title: 'Firefighting Drones',
//       description: 'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video
//           style={heroStyles.video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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

//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/drone.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
//             boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
//             cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
//             performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
//             empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* New Section with Tabs */}
//       <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Agriculture' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Agriculture')}
//             >
//               Agriculture
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Transport' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Transport')}
//             >
//               Transport
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Firefighting' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Firefighting')}
//             >
//               Firefighting
//             </button>
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: activeTab === 'Cleaning' ? '#d3d3d3' : '#f0f0f0',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setActiveTab('Cleaning')}
//             >
//               Cleaning
//             </button>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} Drone`}
//               style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
//             />
//             <div style={{ width: '45%', textAlign: 'left', paddingLeft: '20px' }}>
//               <h2>{tabContent[activeTab].title}</h2>
//               <p>{tabContent[activeTab].description}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "40px 20px",
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
//     minWidth: "400px",
//     textAlign: "center",
//   },
//   image: {
//     width: "200%",
//     maxWidth: "700px",
//     height: "auto",
//   },
// };

// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroSection: {
//     position: 'relative' as 'relative',
//     height: '70vh',
//     overflow: 'hidden' as 'hidden',
//     paddingTop: '80px',
//   },
//   video: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     minWidth: '100%',
//     minHeight: '100%',
//     objectFit: 'cover' as 'cover',
//     zIndex: 0,
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     inset: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   heroContent: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     color: 'white',
//     textAlign: 'center' as 'center',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: '24px',
//   },
// };

// const customStyles: { [key: string]: React.CSSProperties } = {
//   section: {
//     position: 'relative' as 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden' as 'hidden',
//   },
//   videoIframe: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none' as 'none',
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     zIndex: 1,
//   },
//   contentWrapper: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     color: '#fff',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center' as 'center',
//     padding: '0 20px',
//   },
//   subheading: {
//     fontSize: '14px',
//     textTransform: 'uppercase' as 'uppercase',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     marginBottom: '10px',
//   },
//   heading: {
//     fontSize: '44px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   description: {
//     fontSize: '18px',
//     marginBottom: '30px',
//   },
//   button: {
//     padding: '12px 30px',
//     border: '2px solid white',
//     borderRadius: '30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '40px',
//   },
//   sprayInfo: {
//     textAlign: 'center' as 'center',
//     marginTop: '10px',
//   },
//   sprayValue: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     lineHeight: '1',
//     marginBottom: '5px',
//   },
//   sprayLabel: {
//     fontSize: '18px',
//   },
// };

// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// // Define the type for tab keys
// type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');

//   // Add index signature to tabContent
//   const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
//     Cleaning: {
//       image: '/Img/drone_field.jpg',
//       title: 'Cleaning Drones',
//       description: 'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
//     },
//     Agriculture: {
//       image: '/Img/agriculture_drone.jpg',
//       title: 'Agriculture Drones',
//       description: 'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
//     },
//     Transport: {
//       image: '/Img/transport_drone.jpg',
//       title: 'Transport Drones',
//       description: 'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
//     },
//     Firefighting: {
//       image: '/Img/firefighting_drone.jpg',
//       title: 'Firefighting Drones',
//       description: 'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video
//           style={heroStyles.video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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

//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/drone.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
//             boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
//             cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
//             performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
//             empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* New Section with Tabs */}
//       <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} Drone`}
//               style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
//             />
//             <div style={{ width: '50%' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     backgroundColor: activeTab === 'Agriculture' ? '#007bff' : 'transparent',
//                     border: 'none',
//                     borderBottom: activeTab === 'Agriculture' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Agriculture' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Agriculture' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                   }}
//                   onClick={() => setActiveTab('Agriculture')}
//                 >
//                   Agriculture
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     backgroundColor: activeTab === 'Transport' ? '#007bff' : 'transparent',
//                     border: 'none',
//                     borderBottom: activeTab === 'Transport' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Transport' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Transport' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                   }}
//                   onClick={() => setActiveTab('Transport')}
//                 >
//                   Transport
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     backgroundColor: activeTab === 'Firefighting' ? '#007bff' : 'transparent',
//                     border: 'none',
//                     borderBottom: activeTab === 'Firefighting' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Firefighting' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Firefighting' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                   }}
//                   onClick={() => setActiveTab('Firefighting')}
//                 >
//                   Firefighting
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     backgroundColor: activeTab === 'Cleaning' ? '#007bff' : 'transparent',
//                     border: 'none',
//                     borderBottom: activeTab === 'Cleaning' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Cleaning' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Cleaning' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                   }}
//                   onClick={() => setActiveTab('Cleaning')}
//                 >
//                   Cleaning
//                 </button>
//               </div>
//               <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '8px' }}>
//                 <h2 style={{ marginBottom: '10px' }}>{tabContent[activeTab].title}</h2>
//                 <p>{tabContent[activeTab].description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "40px 20px",
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
//     padding: '10px 24px',
//     borderRadius: '30px',
//     backgroundColor: '#FFD700',
//     color: '#000',
//     fontWeight: 'bold',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   imageColumn: {
//     flex: "1 1 500px",
//     minWidth: "400px",
//     textAlign: "center",
//   },
//   image: {
//     width: "200%",
//     maxWidth: "700px",
//     height: "auto",
//   },
// };

// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroSection: {
//     position: 'relative' as 'relative',
//     height: '70vh',
//     overflow: 'hidden' as 'hidden',
//     paddingTop: '80px',
//   },
//   video: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     minWidth: '100%',
//     minHeight: '100%',
//     objectFit: 'cover' as 'cover',
//     zIndex: 0,
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     inset: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   heroContent: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     color: 'white',
//     textAlign: 'center' as 'center',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: '24px',
//   },
// };

// const customStyles: { [key: string]: React.CSSProperties } = {
//   section: {
//     position: 'relative' as 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden' as 'hidden',
//   },
//   videoIframe: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none' as 'none',
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     zIndex: 1,
//   },
//   contentWrapper: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     color: '#fff',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center' as 'center',
//     padding: '0 20px',
//   },
//   subheading: {
//     fontSize: '14px',
//     textTransform: 'uppercase' as 'uppercase',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     marginBottom: '10px',
//   },
//   heading: {
//     fontSize: '44px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   description: {
//     fontSize: '18px',
//     marginBottom: '30px',
//   },
//   button: {
//     padding: '12px 30px',
//     border: '2px solid white',
//     borderRadius: '30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '40px',
//   },
//   sprayInfo: {
//     textAlign: 'center' as 'center',
//     marginTop: '10px',
//   },
//   sprayValue: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     lineHeight: '1',
//     marginBottom: '5px',
//   },
//   sprayLabel: {
//     fontSize: '18px',
//   },
// };

// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// // Define the type for tab keys
// type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');

//   // Add index signature to tabContent
//   const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
//     Cleaning: {
//       image: '/Img/cleaning.png',
//       title: 'Cleaning Drones',
//       description: 'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
//     },
//     Agriculture: {
//       image: '/Img/agri.png',
//       title: 'Agriculture Drones',
//       description: 'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
//     },
//     Transport: {
//       image: '/Img/transport.png',
//       title: 'Transport Drones',
//       description: 'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
//     },
//     Firefighting: {
//       image: '/Img/firefighting.png',
//       title: 'Firefighting Drones',
//       description: 'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video
//           style={heroStyles.video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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

//           <div style={styles.imageColumn}>
//             <img
//               src="/Img/drone.png"
//               alt="Skytech Drone"
//               style={styles.image}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>

//         <div style={customStyles.overlay}></div>

//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>

//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From
//             boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective
//             cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust
//             performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that
//             empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* New Section with Tabs */}
//       <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} Drone`}
//               style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
//             />
//             <div style={{ width: '50%' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     background: activeTab === 'Agriculture' ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f4f8',
//                     border: 'none',
//                     borderBottom: activeTab === 'Agriculture' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Agriculture' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Agriculture' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                     borderRadius: '4px',
//                   }}
//                   onClick={() => setActiveTab('Agriculture')}
//                 >
//                   Agriculture
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     background: activeTab === 'Transport' ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f4f8',
//                     border: 'none',
//                     borderBottom: activeTab === 'Transport' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Transport' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Transport' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                     borderRadius: '4px',
//                   }}
//                   onClick={() => setActiveTab('Transport')}
//                 >
//                   Transport
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     background: activeTab === 'Firefighting' ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f8f0',
//                     border: 'none',
//                     borderBottom: activeTab === 'Firefighting' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Firefighting' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Firefighting' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                     borderRadius: '4px',
//                   }}
//                   onClick={() => setActiveTab('Firefighting')}
//                 >
//                   Firefighting
//                 </button>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     background: activeTab === 'Cleaning' ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f4f8',
//                     border: 'none',
//                     borderBottom: activeTab === 'Cleaning' ? '3px solid #007bff' : '3px solid transparent',
//                     cursor: 'pointer',
//                     color: activeTab === 'Cleaning' ? '#fff' : '#000',
//                     fontWeight: activeTab === 'Cleaning' ? 'bold' : 'normal',
//                     transition: 'all 0.3s ease',
//                     marginLeft: '10px',
//                     borderRadius: '4px',
//                   }}
//                   onClick={() => setActiveTab('Cleaning')}
//                 >
//                   Cleaning
//                 </button>
//               </div>
//               <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
//                 <h2 style={{ marginBottom: '10px', color: '#333' }}>{tabContent[activeTab].title}</h2>
//                 <p style={{ color: '#555' }}>{tabContent[activeTab].description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Products from './Products';

// // Define the type for tab keys
// type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// const HomePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const droneImages = [1, 2, 3, 4, 5, 6, 7, 8];
//   const imageWidth = 300;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollPosition((prev) => (prev + 1) % (droneImages.length - 3));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [droneImages.length]);

//   useEffect(() => {
//     const container = document.getElementById('drone-scroll-container');
//     if (container) {
//       container.scrollTo({ left: scrollPosition * imageWidth, behavior: 'smooth' });
//     }
//   }, [scrollPosition]);

//   const newsData = [
//     {
//       image: '/Img/news1.jpg',
//       title: 'Global Drone Industry Trends and Market Outlook',
//       date: 'February 26, 2025',
//       link: '/news/global-drone-trends',
//     },
//     {
//       image: '/Img/news2.jpg',
//       title: 'Yangtze River Delta: China’s Economic Powerhouse & Leading UAV Manufacturing Hub',
//       date: 'January 31, 2025',
//       link: '/news/yangtze-river-delta',
//     },
//     {
//       image: '/Img/news3.jpg',
//       title: 'Could Firefighting Drones Have Saved More Homes in the Los Angeles Wildfire?',
//       date: 'January 31, 2025',
//       link: '/news/firefighting-drones-wildfire',
//     },
//     {
//       image: '/Img/news4.jpg',
//       title: 'Agricultural Drone Sprayer Application in Cotton Defoliation',
//       date: 'January 28, 2025',
//       link: '/news/agricultural-cotton-drones',
//     },
//   ];

//   const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
//     Cleaning: {
//       image: '/Img/cleaning.png',
//       title: 'Cleaning Drones',
//       description:
//         'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
//     },
//     Agriculture: {
//       image: '/Img/agri.png',
//       title: 'Agriculture Drones',
//       description:
//         'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
//     },
//     Transport: {
//       image: '/Img/transport.png',
//       title: 'Transport Drones',
//       description:
//         'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
//     },
//     Firefighting: {
//       image: '/Img/firefighting.png',
//       title: 'Firefighting Drones',
//       description:
//         'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Hero Section */}
//       <section style={heroStyles.heroSection}>
//         <video style={heroStyles.video} autoPlay loop muted playsInline>
//           <source src="/Img/AA.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div style={heroStyles.overlay}></div>
//         <div style={heroStyles.heroContent}>
//           <h1 style={heroStyles.title}>AGRI DRONE</h1>
//           <p style={heroStyles.subtitle}>Beyond Limits, Above All</p>
//         </div>
//       </section>

//       {/* Skytech UAV Drone Manufacturer Section */}
//       <section style={styles.wrapper}>
//         <div style={styles.gridContainer}>
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
//           <div style={styles.imageColumn}>
//             <img src="/Img/drone.png" alt="Skytech Drone" style={styles.image} />
//           </div>
//         </div>
//       </section>

//       {/* Custom Drone Inquiry Section with YouTube Background */}
//       <section style={customStyles.section}>
//         <iframe
//           src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
//           title="Custom Drone Video"
//           style={customStyles.videoIframe}
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//         ></iframe>
//         <div style={customStyles.overlay}></div>
//         <div style={customStyles.contentWrapper}>
//           <p style={customStyles.subheading}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
//           <h2 style={customStyles.heading}>2025 Skytech Agriculture Drone</h2>
//           <p style={customStyles.description}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
//           <button style={customStyles.button}>Order Now</button>
//           <div style={customStyles.sprayInfo}>
//             <p style={customStyles.sprayValue}>33 ha/h</p>
//             <p style={customStyles.sprayLabel}>Spray Efficiency</p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section>
//         <Products />
//       </section>

//       {/* Real-World Challenges Section */}
//       <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
//           <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
//             Advanced Drones for Real-World Challenges
//           </h2>
//           <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
//             <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective cleaning solutions, our drones are engineered to drive meaningful impact.
//           </p>
//           <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
//             Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that empower businesses to innovate and thrive.
//           </p>
//         </div>
//       </section>

//       {/* New Section with Tabs */}
//       <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} Drone`}
//               style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
//             />
//             <div style={{ width: '50%' }}>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
//                 {(['Agriculture', 'Transport', 'Firefighting', 'Cleaning'] as TabKey[]).map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       padding: '10px 20px',
//                       background: activeTab === tab ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f4f8',
//                       border: 'none',
//                       borderBottom: activeTab === tab ? '3px solid #007bff' : '3px solid transparent',
//                       cursor: 'pointer',
//                       color: activeTab === tab ? '#fff' : '#000',
//                       fontWeight: activeTab === tab ? 'bold' : 'normal',
//                       transition: 'all 0.3s ease',
//                       marginLeft: '10px',
//                       borderRadius: '4px',
//                     }}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//               <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
//                 <h2 style={{ marginBottom: '10px', color: '#333' }}>{tabContent[activeTab].title}</h2>
//                 <p style={{ color: '#555' }}>{tabContent[activeTab].description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA Section */}
//      <section style={{ backgroundColor: '#1a1a1a', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
//         <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
//           <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Ready For Your First Drone? Contact Us!</h2>
//           <button style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', padding: '12px 30px', borderRadius: '30px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Whatsapp : +1-917-428-4343</button>
//         </div>
//         <div
//           id="drone-scroll-container"
//           style={{
//             display: 'flex',
//             overflowX: 'hidden',
//             marginTop: '30px',
//             scrollBehavior: 'smooth',
//             width: '100%',
//             whiteSpace: 'nowrap',
//           }}
//         >
//           {droneImages.map((i) => (
//             <img
//               key={i}
//               src={`/Img/drone${i}.jpg`}
//               alt={`Drone ${i}`}
//               style={{
//                 height: '300px',
//                 width: '25%',
//                 minWidth: '250px',
//                 maxWidth: '100%',
//                 objectFit: 'cover',
//                 borderRadius: '4px',
//                 flexShrink: 0,
//               }}
//             />
//           ))}
//         </div>
//       </section>
//       <section style={{ padding: '60px 20px', backgroundColor: '#f3f3f3', textAlign: 'center' }}>
//         <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px' }}>Recent News</h2>
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
//           {newsData.map((news, idx) => (
//             <div key={idx} style={{ width: '100%', maxWidth: '300px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
//               <img src={news.image} alt={news.title} style={{ width: '150%', height: '180px', objectFit: 'cover' }} />
//               <div style={{ padding: '20px', textAlign: 'left' }}>
//                 <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{news.title}</h3>
//                 <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px' }}>{news.date}</p>
//                 <a href={news.link} style={{ fontSize: '14px', color: '#007bff', textDecoration: 'none' }}>Read More</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>


//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// // existing styles remain unchanged (styles, heroStyles, customStyles)


// const styles: { [key: string]: React.CSSProperties } = {
//   wrapper: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "40px 20px",
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
//     padding: '10px 24px',
//     borderRadius: '30px',
//     backgroundColor: '#FFD700',
//     color: '#000',
//     fontWeight: 'bold',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   imageColumn: {
//     flex: "1 1 500px",
//     minWidth: "400px",
//     textAlign: "center",
//   },
//   image: {
//     width: "200%",
//     maxWidth: "700px",
//     height: 'auto',
//   },
// };

// const heroStyles: { [key: string]: React.CSSProperties } = {
//   heroSection: {
//     position: 'relative' as 'relative',
//     height: '70vh',
//     overflow: 'hidden' as 'hidden',
//     paddingTop: '80px',
//   },
//   video: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     minWidth: '100%',
//     minHeight: '100%',
//     objectFit: 'cover' as 'cover',
//     zIndex: 0,
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     inset: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   heroContent: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     color: 'white',
//     textAlign: 'center' as 'center',
//     gap: '16px',
//   },
//   title: {
//     fontSize: '48px',
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: '24px',
//   },
// };

// const customStyles: { [key: string]: React.CSSProperties } = {
//   section: {
//     position: 'relative' as 'relative',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden' as 'hidden',
//   },
//   videoIframe: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     pointerEvents: 'none' as 'none',
//   },
//   overlay: {
//     position: 'absolute' as 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     zIndex: 1,
//   },
//   contentWrapper: {
//     position: 'relative' as 'relative',
//     zIndex: 2,
//     color: '#fff',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column' as 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center' as 'center',
//     padding: '0 20px',
//   },
//   subheading: {
//     fontSize: '14px',
//     textTransform: 'uppercase' as 'uppercase',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     marginBottom: '10px',
//   },
//   heading: {
//     fontSize: '44px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//   },
//   description: {
//     fontSize: '18px',
//     marginBottom: '30px',
//   },
//   button: {
//     padding: '12px 30px',
//     border: '2px solid white',
//     borderRadius: '30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '40px',
//   },
//   sprayInfo: {
//     textAlign: 'center' as 'center',
//     marginTop: '10px',
//   },
//   sprayValue: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     lineHeight: '1',
//     marginBottom: '5px',
//   },
//   sprayLabel: {
//     fontSize: '18px',
//   },
// };


import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import Products from './Products';


// Define the type for tab keys
type TabKey = 'Cleaning' | 'Agriculture' | 'Transport' | 'Firefighting';

// Define a union type for all style keys
type StyleKey = keyof typeof styles | keyof typeof heroStyles | keyof typeof customStyles;

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Cleaning');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width for responsiveness
  const droneImages = [1, 2, 3, 4, 5, 6, 7, 8];
  const imageWidth = 300;

  // Handle auto-scrolling of drone images
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (droneImages.length - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [droneImages.length]);

  // Sync scroll position with container
  useEffect(() => {
    const container = document.getElementById('drone-scroll-container');
    if (container) {
      container.scrollTo({ left: scrollPosition * imageWidth, behavior: 'smooth' });
    }
  }, [scrollPosition]);

  // Handle window resize for responsive styles
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const newsData = [
    {
      image: '/Img/news1.jpeg',
      title: 'Global Drone Industry Trends and Market Outlook',
      date: 'February 26, 2025',
      link: '/news/global-drone-trends',
    },
    {
      image: '/Img/news2.png',
      title: 'Yangtze River Delta: China’s Economic Powerhouse & Leading UAV Manufacturing Hub',
      date: 'January 31, 2025',
      link: '/news/yangtze-river-delta',
    },
    {
      image: '/Img/news3.png',
      title: 'Could Firefighting Drones Have Saved More Homes in the Los Angeles Wildfire?',
      date: 'January 31, 2025',
      link: '/news/firefighting-drones-wildfire',
    },
    {
      image: '/Img/news4.jpg',
      title: 'Agricultural Drone Sprayer Application in Cotton Defoliation',
      date: 'January 28, 2025',
      link: '/news/agricultural-cotton-drones',
    },
  ];

  const tabContent: { [key in TabKey]: { image: string; title: string; description: string } } = {
    Cleaning: {
      image: '/Img/cleaning.png',
      title: 'Cleaning Drones',
      description:
        'Our cleaning drones combine precision with power, designed to handle large-scale cleaning tasks with high efficiency. With a high payload capacity, these drones can carry heavy cleaning solutions and equipment, making them ideal for large buildings, industrial sites, or hard-to-reach areas. Equipped with advanced spread and spray mechanisms, our cleaning drones deliver thorough cleaning and surface treatments while reducing labor costs and improving safety, making them an essential tool for modern cleaning solutions.',
    },
    Agriculture: {
      image: '/Img/agri.png',
      title: 'Agriculture Drones',
      description:
        'Our agriculture drones enhance farming efficiency with precision spraying and monitoring. Equipped with advanced sensors, they optimize crop health, reduce water usage, and increase yield by targeting specific areas, making them a vital tool for sustainable farming.',
    },
    Transport: {
      image: '/Img/transport.png',
      title: 'Transport Drones',
      description:
        'Our transport drones offer reliable delivery solutions with high payload capacities. Designed for speed and safety, they streamline logistics, reduce carbon footprint, and provide rapid transport for goods in urban and remote areas.',
    },
    Firefighting: {
      image: '/Img/firefighting.png',
      title: 'Firefighting Drones',
      description:
        'Our firefighting drones provide aerial support with water and fire retardant drops. Equipped with thermal imaging, they detect hotspots and assist firefighters in controlling fires efficiently, enhancing safety in hazardous conditions.',
    },
  };

  // Function to apply responsive styles
  const getResponsiveStyles = (baseStyle: React.CSSProperties, styleKey: StyleKey): React.CSSProperties => {
    const mediaStyles = {
      tablet: {
        minWidth: 768,
        styles: {
          wrapper: { padding: '20px' },
          gridContainer: { flexWrap: 'nowrap' },
          textColumn: { flex: '1 1 50%' },
          imageColumn: { flex: '1 1 40%' },
          image: { maxWidth: '500px' },
          heading: { fontSize: '28px' },
          highlight: { fontSize: '18px' },
          heroSection: { height: '60vh', paddingTop: '60px' },
          video: { minWidth: '100%', minHeight: '100%' },
          overlay: { backgroundColor: 'rgba(0,0,0,0.5)' },
          heroContent: { gap: '10px' },
          title: { fontSize: '36px' },
          subtitle: { fontSize: '20px' },
          section: { height: '60vh' },
          videoIframe: { width: '100%', height: '100%' },
          contentWrapper: { padding: '0 10px' },
          subheading: { fontSize: '12px' },
          customHeading: { fontSize: '32px' },
          description: { fontSize: '16px' },
          button: { padding: '10px 25px', fontSize: '16px' },
          sprayValue: { fontSize: '28px' },
        } as { [key in StyleKey]?: React.CSSProperties },
      },
      desktop: {
        minWidth: 1024,
        styles: {
          wrapper: { padding: '40px 20px' },
          gridContainer: { gap: '40px' },
          textColumn: { flex: '1 1 500px' },
          imageColumn: { flex: '1 1 500px' },
          image: { maxWidth: '700px' },
          heading: { fontSize: '34px' },
          highlight: { fontSize: '18px' },
          buttonRow: { justifyContent: 'flex-start' },
          outlineButton: { padding: '10px 24px', fontSize: '16px' },
          fillButton: { padding: '10px 24px', fontSize: '16px' },
          heroSection: { height: '70vh', paddingTop: '80px' },
          video: { minWidth: '100%', minHeight: '100%' },
          overlay: { backgroundColor: 'rgba(0,0,0,0.5)' },
          heroContent: { gap: '16px' },
          title: { fontSize: '48px' },
          subtitle: { fontSize: '24px' },
          section: { height: '100vh' },
          videoIframe: { width: '100%', height: '100%' },
          contentWrapper: { padding: '0 20px' },
          subheading: { fontSize: '14px' },
          customHeading: { fontSize: '44px' },
          description: { fontSize: '18px' },
          button: { padding: '12px 30px', fontSize: '16px' },
          sprayValue: { fontSize: '36px' },
          droneImage: { width: '25%', minWidth: '300px' },
          newsCard: { maxWidth: '300px' },
        } as { [key in StyleKey]?: React.CSSProperties },
      },
    };

    if (windowWidth >= mediaStyles.desktop.minWidth) {
      return { ...baseStyle, ...mediaStyles.desktop.styles[styleKey] };
    } else if (windowWidth >= mediaStyles.tablet.minWidth) {
      return { ...baseStyle, ...mediaStyles.tablet.styles[styleKey] };
    }
    return baseStyle;
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section style={getResponsiveStyles(heroStyles.heroSection, 'heroSection')}>
        <video style={getResponsiveStyles(heroStyles.video, 'video')} autoPlay loop muted playsInline>
          <source src="/Img/AA.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={getResponsiveStyles(heroStyles.overlay, 'overlay')}></div>
        <div style={getResponsiveStyles(heroStyles.heroContent, 'heroContent')}>
          <h1 style={getResponsiveStyles(heroStyles.title, 'title')}>AGRI DRONE</h1>
          <p style={getResponsiveStyles(heroStyles.subtitle, 'subtitle')}>Beyond Limits, Above All</p>
        </div>
      </section>

      {/* Skytech UAV Drone Manufacturer Section */}
      <section style={getResponsiveStyles(styles.wrapper, 'wrapper')}>
        <div style={getResponsiveStyles(styles.gridContainer, 'gridContainer')}>
          <div style={getResponsiveStyles(styles.textColumn, 'textColumn')}>
            <h4 style={getResponsiveStyles(styles.highlight, 'highlight')}>We are</h4>
            <h2 style={getResponsiveStyles(styles.heading, 'heading')}>Skytech UAV Drone Manufacturer</h2>
            <ul style={styles.list}>
              <li><strong>Established in 2008</strong>, <strong>Skytech UAV</strong> leads in practical drone innovations.</li>
              <li><strong>Skytech UAV</strong> offers complete drone systems, components, and custom solutions.</li>
              <li><strong>Skytech UAV</strong> offers OEM and ODM services to build your distinctive brand.</li>
              <li><strong>Skytech UAV</strong> New York Sales and Service Center provides worldwide support.</li>
            </ul>
            <div style={getResponsiveStyles(styles.buttonRow, 'buttonRow')}>
              <button style={getResponsiveStyles(styles.outlineButton, 'outlineButton')}>Learn More</button>
              <button style={getResponsiveStyles(styles.fillButton, 'fillButton')}>Shop Now</button>
            </div>
          </div>
          <div style={getResponsiveStyles(styles.imageColumn, 'imageColumn')}>
            <img src="/Img/drone.png" alt="Skytech Drone" style={getResponsiveStyles(styles.image, 'image')} />
          </div>
        </div>
      </section>

      {/* Custom Drone Inquiry Section with YouTube Background */}
      <section style={getResponsiveStyles(customStyles.section, 'section')}>
        <iframe
          src="https://www.youtube.com/embed/y7ujCJxaB3w?autoplay=1&mute=1&controls=0&loop=1&playlist=y7ujCJxaB3w&modestbranding=1&showinfo=0"
          title="Custom Drone Video"
          style={getResponsiveStyles(customStyles.videoIframe, 'videoIframe')}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div style={getResponsiveStyles(customStyles.overlay, 'overlay')}></div>
        <div style={getResponsiveStyles(customStyles.contentWrapper, 'contentWrapper')}>
          <p style={getResponsiveStyles(customStyles.subheading, 'subheading')}>CUSTOM DRONE TAILORED FOR AGRICULTURE</p>
          <h2 style={getResponsiveStyles(customStyles.heading, 'customHeading')}>2025 Skytech Agriculture Drone</h2>
          <p style={getResponsiveStyles(customStyles.description, 'description')}>Spray Capacity: 92L | Transport Payload: 100 kg</p>
          <button style={getResponsiveStyles(customStyles.button, 'button')}>Order Now</button>
          <div style={customStyles.sprayInfo}>
            <p style={getResponsiveStyles(customStyles.sprayValue, 'sprayValue')}>33 ha/h</p>
            <p style={customStyles.sprayLabel}>Spray Efficiency</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <Products />
      </section>

      {/* Real-World Challenges Section */}
      <section style={{ backgroundColor: '#f3f3f3', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#000' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>
            Advanced Drones for Real-World Challenges
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
            <strong>Skytech UAV</strong> develops cutting-edge drone solutions to tackle the unique challenges industries face worldwide. From boosting agricultural yields and streamlining logistics to enhancing firefighting safety and delivering cost-effective cleaning solutions, our drones are engineered to drive meaningful impact.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Recognizing that every industry has distinct needs, our advanced drones combine precision technology with robust performance to excel in demanding environments. More than just machines, they are intelligent, reliable tools that empower businesses to innovate and thrive.
          </p>
        </div>
      </section>

      {/* New Section with Tabs */}
      <section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <img
              src={tabContent[activeTab].image}
              alt={`${activeTab} Drone`}
              style={{ width: '45%', height: 'auto', objectFit: 'cover' }}
            />
            <div style={{ width: '50%' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                {(['Agriculture', 'Transport', 'Firefighting', 'Cleaning'] as TabKey[]).map(tab => (
                  <button
                    key={tab}
                    style={{
                      padding: '10px 20px',
                      background: activeTab === tab ? 'linear-gradient(90deg, #007bff, #00b4d8)' : '#f0f4f8',
                      border: 'none',
                      borderBottom: activeTab === tab ? '3px solid #007bff' : '3px solid transparent',
                      cursor: 'pointer',
                      color: activeTab === tab ? '#fff' : '#000',
                      fontWeight: activeTab === tab ? 'bold' : 'normal',
                      transition: 'all 0.3s ease',
                      marginLeft: '10px',
                      borderRadius: '4px',
                    }}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div style={{ padding: '20px', border: '2px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <h2 style={{ marginBottom: '10px', color: '#333' }}>{tabContent[activeTab].title}</h2>
                <p style={{ color: '#555' }}>{tabContent[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section style={{ backgroundColor: '#1a1a1a', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Ready For Your First Drone? Contact Us!</h2>
          <button style={{ backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', padding: '12px 30px', borderRadius: '30px', border: 'none', fontSize: '16px', cursor: 'pointer' }}>Whatsapp : +1-917-428-4343</button>
        </div>
        <div
          id="drone-scroll-container"
          style={{
            display: 'flex',
            overflowX: 'hidden',
            marginTop: '30px',
            scrollBehavior: 'smooth',
            width: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          {droneImages.map((i) => (
            <img
              key={i}
              src={`/Img/drone${i}.jpg`}
              alt={`Drone ${i}`}
              style={{
                height: '300px',
                width: '25%',
                minWidth: '250px',
                maxWidth: '100%',
                objectFit: 'cover',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#f3f3f3', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px' }}>Recent News</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          {newsData.map((news, idx) => (
            <div key={idx} style={{ width: '100%', maxWidth: '300px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={news.image} alt={news.title} style={{ width: '150%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{news.title}</h3>
                <p style={{ fontSize: '14px', color: '#777', marginBottom: '10px' }}>{news.date}</p>
                <a href={news.link} style={{ fontSize: '14px', color: '#007bff', textDecoration: 'none' }}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  textColumn: {
    flex: '1 1 100%',
    minWidth: '280px',
    padding: '0 10px',
  },
  highlight: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '10px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '20px',
    marginBottom: '15px',
    lineHeight: '1.5',
  },
  buttonRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  outlineButton: {
    padding: '8px 16px',
    border: '2px solid white',
    borderRadius: '30px',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
  },
  fillButton: {
    padding: '8px 16px',
    borderRadius: '30px',
    backgroundColor: '#FFD700',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  imageColumn: {
    flex: '1 1 100%',
    minWidth: '250px',
    textAlign: 'center',
    padding: '0 10px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
};

const heroStyles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    position: 'relative' as 'relative',
    height: '50vh',
    overflow: 'hidden' as 'hidden',
    paddingTop: '50px',
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
    gap: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '16px',
  },
};

const customStyles: { [key: string]: React.CSSProperties } = {
  section: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '50vh',
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
    padding: '0 10px',
  },
  subheading: {
    fontSize: '12px',
    textTransform: 'uppercase' as 'uppercase',
    letterSpacing: '1px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    marginBottom: '15px',
  },
  button: {
    padding: '8px 20px',
    border: '2px solid white',
    borderRadius: '30px',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  sprayInfo: {
    textAlign: 'center' as 'center',
    marginTop: '10px',
  },
  sprayValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1',
    marginBottom: '5px',
  },
  sprayLabel: {
    fontSize: '14px',
  },
};