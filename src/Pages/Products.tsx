import React from "react";
import Footer from "../Components/Footer";
const productData = [
  {
    name: "Agricultural Drone",
    image: "/Img/agri.png",
    count: 11,
  },
  {
    name: "Transport Drone",
    image: "/Img/transport.png",
    count: 3,
  },
  {
    name: "Firefighting Drone",
    image: "/Img/firefighting.png",
    count: 2,
  },
  {
    name: "Cleaning Drone",
    image: "/Img/cleaning.png",
    count: 3,
  },
  {
    name: "Long Range Drone",
    image: "/Img/longrange.png",
    count: 3,
  },
  {
    name: "FPV Drone",
    image: "/Img/manned.png",
    count: 1,
  },
  {
    name: "Kamikaze Drone",
    image: "/Img/longrange.png",
    count: 21,
  },
  {
    name: "Seedcopter Drone",
    image: "/Img/cleaning.png",
    count: 29,
  },
  {
    name: "Surveillance Drone",
    image: "/Img/transport.png",
    count: 29,
  },
  {
    name: "Tethered Drone",
    image: "/Img/manned.png",
    count: 29,
  },
];

const Products: React.FC = () => {
  return (
    <div style={styles.pageWrapper}>
      <h2 style={styles.heading}>Products</h2>

      <div style={styles.grid}>
        {productData.map((item, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.title}>{item.name}</h4>
            <img src={item.image} alt={item.name} style={styles.image} />
            <p style={styles.count}>({item.count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 <Footer />
export default Products;

// ------------------
// Inline Styles
// ------------------
const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    padding: "40px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "15px 0",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    justifyItems: "center",
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "6px",
    width: "100%",
    maxWidth: "250px",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    maxHeight: "140px",
    marginBottom: "10px",
  },
  count: {
    fontSize: "16px",
    color: "#000",
  },
};
