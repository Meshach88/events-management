// EventsHistory.js
function EventsHistory() {
    const events = [
      { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
      { name: 'Blockchain Revolution', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
      // Add more events
    ];
  
    return (
      <div className="events-history">
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
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.speaker}</td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default EventsHistory;
  