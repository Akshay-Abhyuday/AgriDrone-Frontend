import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; // Import the new full footer

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


            {/* Full Footer at the bottom */}
            <Footer />
        </>
    );
};

export default HomePage;
