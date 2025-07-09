import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

const NewsPage: React.FC = () => {
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

  return (
    <>
      {/* <Navbar /> */}
      <section style={styles.newsSection}>
        <h2 style={styles.heading}>Recent News</h2>
        <div style={styles.newsContainer}>
          {newsData.map((news, idx) => (
            <div key={idx} style={styles.newsCard}>
              <img src={news.image} alt={news.title} style={styles.newsImage} />
              <div style={styles.newsContent}>
                <h3 style={styles.newsTitle}>{news.title}</h3>
                <p style={styles.newsDate}>{news.date}</p>
                <a href={news.link} style={styles.newsLink}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default NewsPage;

const styles: { [key: string]: React.CSSProperties } = {
  newsSection: {
    padding: '60px 20px',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  newsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '50px',
  },
  newsCard: {
    width: '100%',
    maxWidth: '300px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  newsImage: {
    width: '150%',
    height: '180px',
    objectFit: 'cover',
  },
  newsContent: {
    padding: '20px',
    textAlign: 'left',
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  newsDate: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '10px',
  },
  newsLink: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
};