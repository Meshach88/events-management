import React, { useState } from "react";
import "./EventsTable.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const initialData = [
  {
    id: 1,
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    id: 2,
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    id: 3,
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    id: 4,
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    id: 5,
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    id: 6,
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    id: 7,
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    id: 8,
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    id: 9,
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    id: 10,
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
  {
    id: 11,
    name: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    id: 12,
    name: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    id: 13,
    name: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    id: 14,
    name: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    id: 15,
    name: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    id: 16,
    name: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    id: 17,
    name: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    id: 18,
    name: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    id: 19,
    name: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    id: 20,
    name: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];

const EventsTable = ({isDarkMode}) => {
  const [events, setEvents] = useState(initialData);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
    name: "",
    sort: "recent",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when number of rows per page is changed
  };

  const exportTable = () => {
    const csvData = [
      ["Event Name", "Date", "Speaker", "Status"],
      ...events.map((event) => [
        event.name,
        event.date,
        event.speaker,
        event.status,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "events.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const filteredEvents = events
    .filter(
      (event) =>
        (filters.name === "" ||
          event.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.status === "" ||
          event.status.toLowerCase() === filters.status.toLowerCase()) &&
        (filters.date === "" || event.date === filters.date)
    )
    .sort((a, b) => {
      if (filters.sort === "recent") {
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(a.date) - new Date(b.date);
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / rowsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }; 

  return (
    <div className={`events-table ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h3>Events History</h3>
      <div className= "filter-row">
        <input
        className={`${isDarkMode ? "dark-mode-sidebar" : ""}`}
          type="text"
          name="name"
          placeholder="Search..."
          value={filters.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">Status</option>
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>
        <label htmlFor="">Sort:</label>
        <select name="sort" value={filters.sort} onChange={handleInputChange}>
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
        <button onClick={exportTable} className="export-btn">
          <MdOutlineFileDownload
            style={{ marginRight: "8px", fontSize: "16px" }}
          />
          <span>Export</span>
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Speaker</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.speaker}</td>
                <td>
                  <span
                    className={`status ${event.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    {event.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No events found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}
        <div className="pagination-buttons">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </button>
          <button
            className="page active"
            onClick={() => handlePageChange(1)}
            // disabled={currentPage === 1}
          >
            1
          </button>
          <button
            className="page"
            onClick={() => handlePageChange(2)}
            disabled={currentPage === 2}
          >
            2
          </button>
          <button
            className="page"
            onClick={() => handlePageChange(3)}
            disabled={currentPage === 3}
          >
            3
          </button>
          {/* <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
            Last
          </button> */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <GrFormNext />
          </button>
        </div>
        <div>
          <span>Show: </span>
          <select
            className="pagination-select"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={10}>10 rows</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventsTable;
