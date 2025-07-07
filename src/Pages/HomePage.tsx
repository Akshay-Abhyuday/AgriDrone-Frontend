// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer'; // Import the new full footer

// const HomePage: React.FC = () => {
//     return (
//         <>
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative h-screen overflow-hidden pt-20">
//            <video
//   className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
//   autoPlay
//   loop
//   muted
//   playsInline
// >
//   <source src="/Img/AA.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>


//                 <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//                 <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4">
//                     <h1 className="text-5xl font-bold">AGRI DRONE</h1>
//                     <p className="text-2xl">Beyond Limits, Above All</p>
//                 </div>
//             </section>


//             {/* Full Footer at the bottom */}
//             <Footer />
//         </>
//     );
// };

// export default HomePage;



import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-20">
        <video
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Img/AA.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center space-y-4">
          <h1 className="text-5xl font-bold">AGRI DRONE</h1>
          <p className="text-2xl">Beyond Limits, Above All</p>
        </div>
      </section>

      {/* Skytech UAV Drone Manufacturer Section */}
      <section style={styles.wrapper}>
        <div style={styles.gridContainer}>

          {/* Left Column: Text Content */}
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

          {/* Right Column: Drone Image */}
          <div style={styles.imageColumn}>
            <img
              src="/Img/DroneImage.png" // ✅ Update this path if needed
              alt="Skytech Drone"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;

// ----------------
// Inline Styles
// ----------------
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "60px 20px",
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
    minWidth: "280px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
  },
};
