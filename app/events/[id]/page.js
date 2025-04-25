"use client";

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Map from '@/components/map';
import eventsData from '@/data/events';
import { formatDate } from '@/lib/utils';
import { MdCalendarToday, MdLocationOn, MdShoppingCart } from 'react-icons/md';
import { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa'; // Import the ticket icon

export default function EventPage() {
  const params = useParams();
  const eventId = params.id;

  // Find the event with the matching ID using the id property
  const event = eventsData.events.find(event => event.id.toString() === eventId);

  // If event not found, return 404
  if (!event) {
    notFound();
  }

  // State to track selected ticket
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleTicketClick = (index) => {
    setSelectedTicket(index); // Update the selected ticket index
  };

  // Format event date(s) for display
  const eventDate = event.dates.start === event.dates.end
    ? formatDate(event.dates.start)
    : `${formatDate(event.dates.start)} - ${formatDate(event.dates.end)}`;

  return (
    <div className="bg-secondary container mx-auto px-4 py-8 max-w-6xl min-h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="w-[599px] h-[543px] shadow-primary shadow-xl bg-gray-900 text-white rounded-lg overflow-hidden relative group">
          <div className="relative w-full h-full">
            {/* Event Image */}
            <Image
              src={event.image || '/images/event.png'}
              alt={event.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 backdrop-blur-lg bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-3xl md:text-4xl font-bold text-center px-4">{event.name}</h1>
              <div className="flex items-center mt-3 mb-5">
                <MdCalendarToday className="w-5 h-5 mr-2" />
                <span>{eventDate}</span>
              </div>
              <button
                className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                onClick={() => window.location.href = `/events/${event.id}/book`}
              >
                <FaTicketAlt className="w-5 h-5" /> {/* Ticket Icon */}
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[599px] h-[543px] bg-transparent text-white p-6 flex flex-col justify-between rounded-lg">
          {/* Event Title */}
          <h2 className="text-2xl font-bold">{event.name}</h2>

          {/* Location and Time */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <MdLocationOn className="w-5 h-5 mr-2 text-gray-500" />
              <span>Somerville</span>
            </div>
            <div className="text-sm">
              <MdCalendarToday className="w-5 h-5 mr-2 inline-block" />
              <span>Starts 12:30am</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm">{event.description}</p>

          {/* Map, Tickets, and Action Buttons */}
          <div className="flex flex-col gap-4 border border-primary rounded-lg p-4">
            {/* Map */}
            <div className="h-32 rounded-lg overflow-hidden shadow-lg">
              <Map
                latitude={event.location.latitude}
                longitude={event.location.longitude}
                popupText={event.name}
                zoom={14}
              />
            </div>

            {/* Tickets */}
            <div className="grid grid-cols-3 gap-3">
              {event.tickets.map((ticket, index) => (
                <div
                  key={index}
                  className={`text-center rounded-lg p-3 text-sm flex flex-col items-center justify-center cursor-pointer ${
                    selectedTicket === index ? 'bg-primary text-black' : 'bg-transparent border-2 border-primary text-white'
                  }`}
                  onClick={() => handleTicketClick(index)} // Handle ticket click
                >
                  <span>{ticket.type}</span>
                  <span className="font-bold">${ticket.price.toFixed(0)}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link
                href={`/events/${event.id}/reserve`}
                className="bg-transparent border border-primary hover:bg-primary text-white px-4 py-2 rounded-bl-3xl transition-colors w-1/2 text-center text-sm"
              >
                Reserve Ticket
              </Link>
              <button className="bg-primary hover:bg-transparent border border-primary text-white px-4 py-2 rounded-br-3xl font-medium transition-colors w-1/2 flex items-center justify-center gap-2 text-sm cursor-pointer">
                {/* <MdShoppingCart className="w-4 h-4" /> */}
                <FaTicketAlt  className='w-4 h-4 text-white ' />
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}