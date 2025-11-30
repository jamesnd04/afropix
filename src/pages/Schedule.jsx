import { useEffect } from "react";
import "./Schedule.css";

function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schedule = [
    {
      time: "08:00 AM",
      title: "Registration & Welcome Breakfast",
      description: "Check-in, networking, and catered breakfast",
      type: "general",
    },
    {
      time: "09:00 AM",
      title: "Opening Keynote Speaker",
      description: "Inspiring keynote address to kick off AfroPix 2025",
      type: "keynote",
    },
    {
      time: "10:00 AM",
      title: "Pre-Professional Workshop",
      description:
        "Technical workshop for career development and skill building",
      type: "workshop",
    },
    {
      time: "11:00 AM",
      title: "Sponsor Fair",
      description: "Connect with top tech companies and explore opportunities",
      type: "showcase",
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      description: "Catered lunch and networking opportunity",
      type: "break",
    },
    {
      time: "01:00 PM",
      title: "Alumni Panel",
      description: "Hear from BiT alumni about their journeys in tech",
      type: "panel",
    },
    {
      time: "02:00 PM",
      title: "Mini-Hackathon Kickoff",
      description: "Introduction to hackathon guidelines and team formation",
      type: "general",
    },
    {
      time: "02:30 PM",
      title: "Hackathon: Coding & Development",
      description: "Work individually or in teams to build innovative projects",
      type: "workshop",
    },
    {
      time: "04:00 PM",
      title: "Hackathon Workshops & Mentorship",
      description: "Attend workshops and receive guidance from mentors",
      type: "workshop",
    },
    {
      time: "05:30 PM",
      title: "Project Presentations & Judging",
      description: "Teams present their projects for evaluation",
      type: "showcase",
    },
    {
      time: "06:30 PM",
      title: "Awards Ceremony & Raffle",
      description: "Celebrate winning projects and raffle prize winners",
      type: "reception",
    },
    {
      time: "07:00 PM",
      title: "Closing Reception",
      description: "Community celebration with refreshments and networking",
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
        <p className="schedule-subtitle">Saturday, February 22nd, 2026</p>
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
                <p className="schedule-event-description">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
