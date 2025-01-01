"use client";

import React, { useState } from "react";

const SCTMUNDISEC = () => {
  const executiveBoard = [
    {
      name: "Siddharth",
      role: "President",
      image: "", 
    },
    {
      name: "Yohan",
      role: "Vice-President",
      image: "/assets/images/logo.png", 
    },
    // Add more members 
  ];

  
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="flex flex-col items-center py-20">
        <h1 className="text-4xl font-bold text-yellow-400">DISEC Agenda</h1>
        <p className="mt-4 text-3xl font-semibold text-white text-center">
          Revaluating Arms Trade
        </p>
        <p className="mt-4 text-lg text-white text-center">
          Policies: Preventing Escalation of Conflicts and Ensuring Global Security
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium mt-8 hover:bg-yellow-500 transition">
          BG DISEC
        </button>
      </div>

      
      <div className="flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">DISEC Executive Board</h2>
        <div className="flex flex-col gap-10 items-center">
          {executiveBoard.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
              style={{ width: "300px", cursor: "pointer" }}
              onClick={() => handleMemberClick(index)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-full"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-yellow-500">{member.role}</h3>
                <p className="text-sm font-semibold text-gray-800 mt-2">{member.name}</p>

                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedMember === index ? "max-h-40 py-4" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-xs text-gray-600">MORE INFO</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SCTMUNDISEC;
