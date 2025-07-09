import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

const getResponsiveStyles = (width: number): { [key: string]: CSSProperties } => {
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  return {
    heroSection: {
      position: 'relative',
      width: '100vw',
      height: isMobile ? '50vh' : isTablet ? '60vh' : '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },

    videoIframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '200%',
      minHeight: '200%',
      objectFit: 'cover',
      zIndex: 1,
    },

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 2,
    },

    heroContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: '#fff',
      zIndex: 3,
      padding: isMobile ? '15px' : isTablet ? '20px' : '30px',
    },

    title: {
      fontSize: isMobile ? '20px' : isTablet ? '36px' : '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    },

    subtitle: {
      fontSize: isMobile ? '12px' : isTablet ? '16px' : '20px',
      lineHeight: '1.5',
      maxWidth: isMobile ? '90%' : isTablet ? '70%' : '600px',
      margin: '0 auto',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    },

    aboutSection: {
      backgroundColor: '#fff',
      padding: isMobile ? '40px 15px' : isTablet ? '50px 20px' : '60px 20px',
    },

    aboutGrid: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '20px' : '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },

    aboutTextBox: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      padding: isMobile ? '20px' : '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    },

    aboutImageBox: {
      flex: 1,
      textAlign: 'center',
    },

    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      objectFit: 'cover',
    },

    sectionTitle: {
      fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#333',
    },

    sectionText: {
      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
      lineHeight: '1.6',
      color: '#555',
    },
  };
};

const AboutSection: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [styles, setStyles] = useState(getResponsiveStyles(width));

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setStyles(getResponsiveStyles(newWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section style={styles.heroSection}>
        <iframe
          src="https://www.youtube.com/embed/Kzg7AeXG6vM?autoplay=1&mute=1&controls=0&loop=1&playlist=Kzg7AeXG6vM&modestbranding=1&showinfo=0"
          title="About Us Video"
          style={styles.videoIframe}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Skytech UAV Company Profile</h1>
          <p style={styles.subtitle}>Redefining the Future with Visionary Technology & Unparalleled Excellence.</p>
        </div>
      </section>
      <section style={styles.aboutSection}>
        <div style={styles.aboutGrid}>
          {/* Left: Text */}
          <div style={styles.aboutTextBox}>
            <h2 style={styles.sectionTitle}>
              From Research to Reality: Our Journey in Drone Development
            </h2>
            <p style={styles.sectionText}>
              We established our drone research and development division in 2008, embarking on a journey to explore
              practical applications of drones in agriculture, transportation, firefighting, surveillance, and rescue
              operations. Through substantial investments in R&D and a relentless pursuit of innovation, we overcame
              countless technical challenges. Our core R&D team comprises aerospace experts and scholars from Zhejiang
              University and Nanjing University of Aeronautics and Astronautics. By combining cutting-edge research with
              a skilled and dedicated workforce, we have set a global benchmark in drone technology.
            </p>
          </div>
          {/* Right: Image */}
          <div style={styles.aboutImageBox}>
            <img
              src="/Img/cleaning.png"
              alt="Skytech Drone Research Team"
              style={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;