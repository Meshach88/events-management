// OverviewCards.js
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

function OverviewCards({isDarkMode}) {
  const stats = [
    { title: "Total Events", value: "100,000", change: "+5.0%" },
    { title: "Active Speakers", value: "25", change: "-5.0%" },
    { title: "Total Registrations", value: "300", change: "+5.0%" },
    { title: "Total Revenue", value: "$500,000", change: "+5.0%" },
  ];

  return (
    <div className="overview-cards">
      {stats.map((stat, index) => (
        <div className={`card ${isDarkMode ? "dark-mode-sidebar" : "light-mode"}`} key={index}>
          <div className="card-title">
            <h3>{stat.title}</h3>
            <IoMdInformationCircleOutline className="card-info" />
          </div>
          <div className="stat">
            <p>{stat.value}</p>
            {stat.change === "+5.0%" ? (
              <GoArrowUpRight style={{ color: "#10B981", fontSize:'14px', marginTop:"10px" }} />
            ) : (
              <GoArrowDownRight style={{ color: "#F43F5E", fontSize:'14px', marginTop:"10px" }} />
            )}
            <small
              className={stat.change === "+5.0%" ? "stat-green" : "stat-red"}
            >
              {stat.change}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;
