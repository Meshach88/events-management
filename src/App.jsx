// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EventsHistory from "./components/EventsHistory";
import OverviewCards from "./components/OverviewCards";
import CarouselAndChart from "./components/CarouselAndChart";

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
        <OverviewCards isDarkMode={isDarkMode}/>
        <CarouselAndChart isDarkMode={isDarkMode}/>
        <EventsHistory isDarkMode={isDarkMode}/>
        {/* Modal for Event Details */}
        {selectedEvent && (
          <Modal event={selectedEvent} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}

export default App;
