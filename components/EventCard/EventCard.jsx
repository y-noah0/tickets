import Image from "next/image";
import React from "react";

// Update imports to use absolute paths
import pplIcon from "/public/iconppl.png";
import ticketIcon from "/public/ticketImage.png";

export default function EventCard({ image, title, atendants, user, tickets }) {
    return (
        <div className="gap-1">
            <div className="rounded-t-2xl relative h-[200px]">
                <Image 
                    src={`/${image}`}  // Add leading slash for dynamic images
                    alt="Event image"
                    width={500}
                    height={300}
                    className="object-cover rounded-t-2xl"
                />
            </div>
            <div className="w-full flex flex-col rounded-b-2xl bg-white/6">
                <div className="flex justify-between">
                    <h1 className="text-[22px] font-medium">{title}</h1>
                    <div className="flex items-center gap-2">
                        <Image src={pplIcon} alt="Attendants icon" width={24} height={24} />
                        <p className="text-xl text-[#8C9192]">{atendants}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-[22px] font-medium">{user}</h1>
                    <div className="flex items-center gap-2">
                        <Image src={ticketIcon} alt="Ticket icon" width={24} height={24} />
                        <p className="text-xl text-[#8C9192]">{tickets}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
