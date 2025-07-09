import React from "react";

const Solutions: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: "Segoe UI, sans-serif",
      color: "#222",
      paddingBottom: "60px",
    },
    heroSection: {
      position: "relative",
      height: "75vh",
      overflow: "hidden",
    },
    heroImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(50%)",
    },
    heroOverlay: {
      position: "absolute",
      top: "50%",
      left: "10%",
      transform: "translateY(-50%)",
      color: "#fff",
      maxWidth: "600px",
    },
    heroTitle: {
      fontSize: "2.8rem",
      marginBottom: "10px",
    },
    heroText: {
      fontSize: "1.1rem",
      lineHeight: 1.5,
    },
    introText: {
      maxWidth: "900px",
      margin: "40px auto",
      fontSize: "1.1rem",
      lineHeight: 1.6,
      padding: "0 20px",
      textAlign: "center",
    },
    boxGrid: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap", // allow 2nd row
      padding: "20px",
      gap: "50px",
      maxWidth: "100%",
      margin: "auto",
      marginBottom: "100px",
    },
    infoBox: {
      flex: "0 0 180px",
      backgroundColor: "#f5f5f5",
      padding: "35px 15px",
      borderRadius: "8px",
      textAlign: "center",
      minWidth: "160px",
    },
    infoIcon: {
      fontSize: "2rem",
      marginBottom: "10px",
    },
    infoTitle: {
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginBottom: "8px",
    },
    infoText: {
      fontSize: "0.9rem",
      lineHeight: 1.4,
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      gap: "15vh",
      padding: "0 20px",
      maxWidth: "1200px",
      margin: "auto",
    },
    block: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
      flexWrap: "wrap",
    },
    blockReverse: {
      flexDirection: "row-reverse"
    },
    blockImage: {
      width: "100%",
      height: "30vh",
      maxWidth: "500px",
      borderRadius: "10px",
      objectFit: "cover",
    },
    blockContent: {
      maxWidth: "600px",
    },
    blockTitle: {
      fontSize: "1.8rem",
      marginBottom: "10px",
    },
    blockText: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "background-color 0.3s ease",
    },
    fullImage: {
      width: "80%",
      height: "75vh",
      objectFit: "fill",
      display: "block",
      marginTop: "80px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };


  const cards = [
    { icon: "🍎", title: "Agricultural", text: "Precision drones for spraying, seeding, and monitoring crops to boost farm productivity." },
    { icon: "🔋", title: "Long Range", text: "Reliable drones built for extended missions with impressive range and efficiency." },
    { icon: "🚚", title: "Transport", text: "High carry capacity drones designed to streamline deliveries and logistics missions." },
    { icon: "🔥", title: "Firefighting", text: "Advanced drones equipped for emergency response and fire suppression missions." },
    { icon: "🧼", title: "Cleaning", text: "Efficient drones tailored for precision cleaning tasks in challenging environments." },
    { icon: "🎥", title: "Surveillance", text: "Drones for 24/7 surveillance, border patrol, and tactical monitoring with night vision and AI." },
    { icon: "🌱", title: "Seedcopter", text: "Drone-based reforestation using seed-bombing to rejuvenate degraded lands quickly." },
    { icon: "🏁", title: "FPV Drone", text: "First-person view drones for racing, inspections, and immersive video recording." },
    { icon: "💥", title: "Kamikaze Drone", text: "Loitering munitions designed for precision strike missions with autonomous guidance." },
    { icon: "🔗", title: "Tethered Drone", text: "Unlimited flight time drones powered via tether for persistent surveillance and communication." },
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img
          src="/banner.png"
          alt="Solutions Banner"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Abhyuday: Practical Drone Solutions for Every Industry
          </h1>
          <p style={styles.heroText}>
            Abhyuday drones are designed to solve everyday challenges in
            industries like farming, transport, firefighting, and cleaning.
            Whether you're looking to save time, improve safety, or gather
            important data, our drones are here to help you work smarter, not
            harder.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section style={styles.introText}>
        <p>
          Learn how drones are changing industries by solving common problems in
          smarter ways. They help businesses work faster, safer, and more
          efficiently, while also creating new opportunities for growth. Drones
          simplify tough jobs, provide instant insights, and take on tasks that
          were hard or impossible before.
        </p>
      </section>

      {/* Info Cards */}
      <section style={styles.boxGrid}>
        {cards.map((card, idx) => (
          <div style={styles.infoBox} key={idx}>
            <div style={styles.infoIcon}>{card.icon}</div>
            <div style={styles.infoTitle}>{card.title}</div>
            <div style={styles.infoText}>{card.text}</div>
          </div>
        ))}
      </section>

      {/* Solution Blocks */}
      <section style={styles.grid}>
        <div style={styles.block}>
          <img src="/banner.png" alt="Agriculture" style={styles.blockImage} />
          <div style={styles.blockContent}>
            <h2 style={styles.blockTitle}>Agricultural Spraying | Spreading</h2>
            <p style={styles.blockText}>
              Managing large-scale agricultural operations often comes with
              challenges such as low efficiency and high labor costs. Drones
              provide a modern solution by offering precision spraying, seeding,
              and fertilizing.
            </p>
            <button style={styles.button}>Get Custom Solutions</button>
          </div>
        </div>

        <div style={{ ...styles.block, ...styles.blockReverse }}>
          <img
            src="/banner.png"
            alt="Forest Patrol"
            style={styles.blockImage}
          />
          <div style={styles.blockContent}>
            <h2 style={styles.blockTitle}>
              Long Range & Uptime - Forest Surveillance & Patrol
            </h2>
            <p style={styles.blockText}>
              Covering vast areas for forest patrolling and monitoring presents
              challenges like low visibility. Long-range drones with extended
              flight and autonomous mapping solve this efficiently.
            </p>
            <button style={styles.button}>Get Custom Solutions</button>
          </div>
        </div>

        <div style={styles.block}>
          <img src="/banner.png" alt="Cargo Drone" style={styles.blockImage} />
          <div style={styles.blockContent}>
            <h2 style={styles.blockTitle}>
              Cargo & Emergency Supply Drone Transport Delivery
            </h2>
            <p style={styles.blockText}>
              Drones are revolutionizing cargo transport and emergency medical
              delivery. They can overcome road infrastructure issues and deliver
              reliably and fast even in remote locations.
            </p>
            <button style={styles.button}>Get Custom Solutions</button>
          </div>
        </div>

        <div style={{ ...styles.block, ...styles.blockReverse }}>
          <img
            src="/banner.png"
            alt="Firefighting Drone"
            style={styles.blockImage}
          />
          <div style={styles.blockContent}>
            <h2 style={styles.blockTitle}>Firefighting Drone</h2>
            <p style={styles.blockText}>
              These drones are capable of reaching dangerous zones, suppressing
              fires in rough terrain, and offering real-time situational
              awareness — helping first responders work faster and safer.
            </p>
            <button style={styles.button}>Get Custom Solutions</button>
          </div>
        </div>

        <div style={styles.block}>
          <img
            src="/banner.png"
            alt="Cleaning Drone"
            style={styles.blockImage}
          />
          <div style={styles.blockContent}>
            <h2 style={styles.blockTitle}>
              High-Altitude Painting And Cleaning
            </h2>
            <p style={styles.blockText}>
              Drones for high-rise surface cleaning and tower painting are safer
              and more cost effective than traditional rope access, enabling
              coverage of tall buildings and complex structures.
            </p>
            <button style={styles.button}>Get Custom Solutions</button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section style={styles.videoSection}>
        <div style={styles.videoContainer}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Abhyuday Solutions Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div style={styles.videoDescription}>
          <h2 style={styles.videoHeading}>Explore Our Drone Innovations</h2>
          <p style={styles.videoText}>
            Watch how Abhyuday is revolutionizing industries with advanced drone
            systems. From agriculture to emergency response, see real-world use
            cases and performance demonstrations that show why Abhyuday is a
            leader in drone technology.
          </p>
        </div>
      </section> */}

      {/* Full Width Image Below Video */}
      <section>
        <img
          src="/drones.webp"
          alt="Drone Data Insights"
          style={styles.fullImage}
        />
        <img
          src="/data.webp"
          alt="Drone Data Insights"
          style={styles.fullImage}
        />
      </section>
    </div>
  );
};

export default Solutions;
