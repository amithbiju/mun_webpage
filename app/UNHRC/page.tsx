import React from "react";
import "./newstyle.css";

const AgendaSection: React.FC = () => {
  return (
    <section className="agenda-section">
      <h1>UNHRC Agenda</h1>
      <p className="paraagenda">
        Addressing Human rights in Conflict zones with emphasis on the MENA
        region.
      </p>
      <button className="agenda-btn">BG UNHRC</button>
    </section>
  );
};

const ExecutiveBoardSection: React.FC = () => {
  return (
    <section className="executive-board-section">
      <h2 className="ueb">UNHRC EXECUTIVE BOARD</h2>
      <div className="card-container">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="hover-container">
              <div className="image-box">
                <img src="UNHRC.png" alt="UNHRC" />
              </div>
              <div className="text-box">
                <h2>UNHRC EXECUTIVE BOARD</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <AgendaSection />
      <ExecutiveBoardSection />
    </div>
  );
};

export default App;
