// Chart.js component (EventChart.js)
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const news = ["News item 1", "News item 2", "News item 3"];

// Register components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function EventChart() {
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
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h3 className="chart-title">Events Registrations per month</h3>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default EventChart;
