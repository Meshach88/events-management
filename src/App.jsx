// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chart from "./components/Chart";
import EventsHistory from "./components/EventsHistory";
import Notifications from "./components/Notifications";
import OverviewCards from "./components/OverviewCards";
import Carousel from "./components/Carousel";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const closeModal = () => {
    setSelectedEvent(null);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Sidebar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <div className="main-content">
        <Header />
        <OverviewCards />
        <Chart />
        <EventsHistory />
        {/* Modal for Event Details */}
        {selectedEvent && (
          <Modal event={selectedEvent} closeModal={closeModal} />
        )}
        {/* <Carousel/> */}
      </div>
      {/* <Notifications /> */}
    </div>
  );
}

export default App;
