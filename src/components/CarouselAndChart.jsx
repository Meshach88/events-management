import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { assets } from "../assets";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

// Register components
// const Chart = new Chart
// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Event Registrations per Month",
      data: [600, 800, 700, 900, 1000, 900, 950, 800, 700, 850, 900, 750],
      backgroundColor: "#8576FF",
    },
  ],
};

const options = {
  // Chart options
  plugins: {
    title: {
      display: false, // Removes the chart title
    },
  },
};

const CarouselAndChart = ({isDarkMode}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <>
      <h3 className="chart-title">Event Registrations per month</h3>
      <div className="container">
        {/* Chart */}
        <div className={`chart ${isDarkMode ? "dark-mode-sidebar" : "light-mode"}`}>
          <Bar className="bar-chart" data={data} options={options} />
        </div>

        {/* Carousel */}
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <div className="slide-content">
                <img src={assets.slide1} alt="carousel-slide1" />
                <div className="slide-content-text">
                  <h3>Latest News & Updates</h3>
                  <p>
                    Turpis interdum nunc varius ornare dignissim pretium. Massa
                    ornare quis aliquet sed vitae. Sed velit nisi, fermentum
                    erat. Fringilla purus, erat fringilla tincidunt quisque non.
                    Pellentesque in ut tellus.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-content">
                <img src={assets.slide2} alt="carousel-slide2" />
                <div className="slide-content-text">
                  <h3>Latest News & Updates</h3>
                  <p>
                    Turpis interdum nunc varius ornare dignissim pretium. Massa
                    ornare quis aliquet sed vitae. Sed velit nisi, fermentum
                    erat. Fringilla purus, erat fringilla tincidunt quisque non.
                    Pellentesque in ut tellus.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-content">
                <img src={assets.slide3} alt="carousel-slide3" />
                <div className="slide-content-text">
                  <h3>Latest News & Updates</h3>
                  <p>
                    Turpis interdum nunc varius ornare dignissim pretium. Massa
                    ornare quis aliquet sed vitae. Sed velit nisi, fermentum
                    erat. Fringilla purus, erat fringilla tincidunt quisque non.
                    Pellentesque in ut tellus.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselAndChart;
