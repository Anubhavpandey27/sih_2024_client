import React, { useState } from 'react';

const EventSection = ({ events }) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', location: '' });

  const handleEventCreation = () => {
    if (newEvent.title && newEvent.description && newEvent.date && newEvent.location) {
      alert('Event created successfully!');
      setIsEventModalOpen(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsEventModalOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
      >
        Create Event
      </button>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {isEventModalOpen && (
        <div className="modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Create New Event</h3>
            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <textarea
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
            <input
              type="date"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            />
            <button
              onClick={handleEventCreation}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Create Event
            </button>
            <button
              onClick={() => setIsEventModalOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSection;
