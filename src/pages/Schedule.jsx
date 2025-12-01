import { useEffect } from "react";
import "./Schedule.css";

function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schedule = [
    {
      time: "10:00 AM - 10:45 AM",
      title: "Registration + Brunch",
      description:
        "Sitterson Lower Lobby (Brunch) | Sitterson Upper Lobby (Registration)",
      type: "general",
    },
    {
      time: "11:00 AM - 11:15 AM",
      title: "Opening Ceremony",
      description: "SN011",
      type: "general",
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Keynote Speaker",
      description: "SN011",
      type: "keynote",
    },
    {
      time: "12:00 PM - 12:15 PM",
      title: "Project Introduction",
      description: "SN011",
      type: "general",
    },
    {
      time: "12:15 PM - 5:00 PM",
      title: "Hacking Begins",
      description: "Need dedicated room for hacking | SN014",
      type: "workshop",
    },
    {
      time: "12:30 PM - 4:45 PM",
      title: "Mentorship Lounge",
      description: "1-on-1 mentoring for hackathon | SN014",
      type: "workshop",
    },
    {
      time: "12:30 PM - 1:15 PM",
      title: "Workshop Cycle 1",
      description: "Workshop 1: FB007 | Workshop 2: FB009",
      type: "workshop",
    },
    {
      time: "1:00 PM - 5:00 PM",
      title: "AfroPix Lounge",
      description:
        "Snacks, beverages + networking area; companies | Sitterson Upper Lobby",
      type: "break",
    },
    {
      time: "1:30 PM - 3:30 PM",
      title: "Sponsor Fair",
      description: "Sitterson Lower Lobby",
      type: "showcase",
    },
    {
      time: "4:00 PM - 4:45 PM",
      title: "Workshop Cycle 2",
      description: "FB007",
      type: "workshop",
    },
    {
      time: "5:00 PM",
      title: "Final Call for Projects!",
      description: "",
      type: "general",
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "Alumni Panel",
      description:
        "SN011 | Judges look at projects during this time (SN014) | Judge deliberation",
      type: "panel",
    },
    {
      time: "6:00 PM - 6:30 PM",
      title: "Raffle + Hackathon Prizes + Closing Ceremony",
      description: "SN011",
      type: "reception",
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      general: "var(--soft-lavender-mist)",
      keynote: "var(--radiant-violet)",
      panel: "var(--magenta-punch)",
      break: "var(--amber-glow)",
      workshop: "var(--sky-teal)",
      showcase: "var(--radiant-violet)",
      reception: "var(--magenta-punch)",
    };
    return colors[type] || colors.general;
  };

  return (
    <div className="schedule-page">
      <div className="schedule-hero">
        <h1 className="schedule-title">AfroPix 2026 Schedule</h1>
        <p className="schedule-subtitle">Saturday, February 28th, 2026</p>
        <p className="schedule-description">
          Pre-Professional Event & Mini-Hackathon
        </p>
        <div className="schedule-hero-gradient"></div>
      </div>

      <div className="schedule-content">
        <div className="schedule-timeline">
          {schedule.map((event, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{event.time}</div>
              <div className="schedule-line">
                <div
                  className="schedule-dot"
                  style={{ backgroundColor: getTypeColor(event.type) }}
                ></div>
                {index < schedule.length - 1 && (
                  <div className="schedule-line-connector"></div>
                )}
              </div>
              <div className="schedule-event">
                <div
                  className="schedule-event-type"
                  style={{ color: getTypeColor(event.type) }}
                >
                  {event.type.toUpperCase()}
                </div>
                <h3 className="schedule-event-title">{event.title}</h3>
                {event.description && (
                  <p className="schedule-event-description">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
