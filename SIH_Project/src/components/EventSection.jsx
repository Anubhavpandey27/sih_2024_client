import React, { useState } from 'react';
import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';

const EventSection = ({ events }) => {
  const [sponsoredEvents, setSponsoredEvents] = useState(new Set());

  const handleSponsor = (eventId) => {
    setSponsoredEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <div className="events-section bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl rounded-lg p-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Upcoming College Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{event.location}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center text-gray-500 mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} expected attendees</span>
                </div>
              )}
            </div>
            <button 
              
              onClick={() => {
                window.open('https://rzp.io/l/gecdonate','_blank')
                handleSponsor(event.id);
              }}
              className={`mt-6 py-2 px-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center ${
                sponsoredEvents.has(event.id)
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              {sponsoredEvents.has(event.id) ? 'Sponsored!' : 'Sponsor This Event'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;