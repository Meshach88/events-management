import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import {MenuItem, TextField} from '@mui/material';

// Sample data for the table
const rows = [
  {
    id: 1,
    eventName: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    id: 2,
    eventName: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    id: 3,
    eventName: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    id: 4,
    eventName: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    id: 5,
    eventName: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    id: 6,
    eventName: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    id: 7,
    eventName: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    id: 8,
    eventName: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "In Progress",
  },
  {
    id: 9,
    eventName: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "Completed",
  },
  {
    id: 10,
    eventName: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];

// Define the columns
const columns = [
  { field: "eventName", headerName: "Event Name", width: 250 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "speaker", headerName: "Speaker", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => (
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "15px",
          backgroundColor: params.value === "Completed" ? "#C5F6C8" : "#D2EFFF",
          color: params.value === "Completed" ? "#28A745" : "#007BFF",
        }}
      >
        {params.value}
      </span>
    ),
  },
];

export default function EventsHistory() {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: () => (
            <div style={{ padding: "10px" }}>
              {/* Add sorting, filtering toolbar here */}
              
              <TextField
                id="filter-status"
                select
                label="Filter by Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                variant="outlined"
                size="small"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
              </TextField>
            </div>
          ),
        }}
      />
    </Box>
  );
}
