import Image from "next/image";
import React from "react";

import pplIcon from '../../public/iconppl.png'
import ticketIcon from '../../public/ticketImage.png'

export default function EventCard({ image, title, atendants, user, tickets }) {
    return (
        <div className="w-full max-w-sm gap-1 flex flex-col">
            <div className="relative h-[200px] w-full">
                <Image 
                    src={image}
                    alt="Event image"
                    fill
                    className="object-cover  rounded-t-2xl rounded-b-sm"
                    priority
                />
            </div>
            <div className="p-2 gap-2.5 space-y-4 bg-white/6 rounded-t-sm rounded-b-2xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium text-white/80">{title}</h1>
                    <div className="flex items-center gap-2">
                        <Image src={pplIcon} alt="Attendants icon" width={20} height={20} />
                        <span className="text-[#8C9192] text-[16px] font-medium ">{atendants}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#8C9192]">{user}</p>
                    <div className="flex items-center gap-2">
                        <Image src={ticketIcon} alt="Ticket icon" width={20} height={20} />
                        <span className="text-[#8C9192]">{tickets}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
// {How to use}

// "use client";
// import React from "react";
// import EventCard from "../components/EventCard/EventCard";
// import data from "../data/data.json";

// export default function Home() {
//     const events = data.events;
//     return (
//         <div className="bg-[#1E1E1E]">
//             {events &&
//                 events.map((event) => (
//                     <EventCard
//                         key={event.id}
//                         image={event.image || event.images?.main}
//                         title={event.name}
//                         atendants={event.atendants}
//                         tickets={event.tickets}
//                         user={event.user}
//                     />
//                 ))}
//         </div>
//     );
// }
