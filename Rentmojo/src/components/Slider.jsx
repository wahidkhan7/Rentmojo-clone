import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const Slider = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(22); // default value for large devices

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(66); // 1.5 divs visible for small devices
      } else if (window.innerWidth < 1200) {
        setCenterSlidePercentage(33); // adjust as needed for medium devices
      } else {
        setCenterSlidePercentage(22); // default for large devices
      }
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    {
      id: 1,
      productimage: "https://p.rmjo.in/productSquare/p2dm6gz4-500x500.jpg",
      title: "Oliver 3-Seater Fabric Sofa (Blue)",
      rent: "559",
    },
    {
      id: 2,
      productimage: "https://p.rmjo.in/productSquare/605n5qi4-500x500.jpg",
      title: "Smart LED TV Android - 32inches",
      rent: "849",
    },
    {
      id: 3,
      productimage: "https://p.rmjo.in/productSquare/caskfrhd-500x500.jpg",
      title: "Double Door Fridge (240 Litre)",
      rent: "1049",
    },
    {
      id: 4,
      productimage: "https://p.rmjo.in/productSquare/m00l8vn2-500x500.jpg",
      title: "Top Load Washing Machine",
      rent: "769",
    },
    {
      id: 5,
      productimage: "https://p.rmjo.in/productSquare/m9qgitpv-500x500.jpg",
      title: "Aurora Wooden Queen Bed (6x5)",
      rent: "539",
    },
    {
      id: 6,
      productimage: "https://p.rmjo.in/productSquare/xev0b5yi-500x500.jpg",
      title: "Induction Cooktop Full Electric",
      rent: "149",
    },
    {
      id: 7,
      productimage: "https://p.rmjo.in/productSquare/bwskug14-500x500.jpg",
      title: "Single Door Fridge (190 Litre)",
      rent: "719",
    },
    {
      id: 8,
      productimage: "https://p.rmjo.in/productSquare/70rj36m0-500x500.jpg",
      title: "Poise Wooden Queen Bed (6x5)",
      rent: "549",
    },
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">You'll love to take these home</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        stopOnHover
        transitionTime={500}
        showArrows
        centerMode
        centerSlidePercentage={centerSlidePercentage}  
      >
        {data.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.productimage} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p className="rent">Rent: ₹{item.rent}/mo</p>
              <button className="see-more-btn">See more</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
