import "./ExecutiveBoard.css";

function ExecutiveBoard() {
  const boardMembers = [
    {
      id: 1,
      name: "Jonathan Nwokeji",
      role: "President",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542838/app_images-resizable-jonathan_517e8563_1736817613393_-_jonathan_nwokeji_w7tafg.jpg",
    },
    {
      id: 2,
      name: "Jayson Mbugua",
      role: "Afropix Lead",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542837/1713480039939-2_-_Jayson_Gachangi_zkpwhv.jpg",
    },

    {
      id: 3,
      name: "James Dankwah",
      role: "Hackathon Coordinator",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542838/Brightstar_Headshot_James_1_-_James_Dankwah_apluvs.jpg",
    },
    {
      id: 4,
      name: "Winta Abraham",
      role: "Graphic Designer",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542838/abrahamwinta1_gmail.com-cb8f92e0_-_winta_abraham_nnp5ra.jpg",
    },
    {
      id: 5,
      name: "Bettina George",
      role: "Hackathon Coordinator",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542836/IMG_3745_-_Bettina_George_jihhho.jpg",
    },
    {
      id: 6,
      name: "Millie Kembe",
      role: "Graphic Designer",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542836/NSBE_Headshot_-_Millie_Kembe_inlemr.jpg",
    },
    {
      id: 7,
      name: "Landy Brutus",
      role: "Outreach",
      image:
        "https://res.cloudinary.com/dh6hkd2ih/image/upload/v1764542836/DeWatermark.ai_1754750049066_-_Landy_Brutus_y9w7ud.jpg",
    },
  ];

  return (
    <section className="executive-board">
      <div className="board-container">
        <h2 className="board-title">Executive Board</h2>
        <p className="board-subtitle">
          Meet the team leading AfroPix Symposium 2025
        </p>
        <div className="board-grid">
          {boardMembers.map((member) => (
            <div key={member.id} className="board-member-card">
              <div className="member-image-wrapper">
                <div
                  className="member-image-placeholder"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span className="member-initials">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="member-overlay">
                  <div className="member-role">{member.role}</div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role-text">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExecutiveBoard;
