// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

function EventModal({ event }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        View Details
      </button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <h3>Attendees</h3>
        <ul>
          {event.attendees.map((attendee, index) => (
            <li key={index}>{attendee}</li>
          ))}
        </ul>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default EventModal;
