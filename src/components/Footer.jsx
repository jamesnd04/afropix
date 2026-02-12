import "./Footer.css";

function Footer() {
  const links = [
    {
      name: "GroupMe",
      url: "https://groupme.com/join_group/113234361/j1BxV4hv",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="footer-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.36 5.04L2 22l4.96-1.36C8.44 21.5 10.16 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.58 0-3.08-.38-4.4-1.04l-.32-.16-3.28.9.9-3.28-.18-.32A7.94 7.94 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z"/>
          <circle cx="8" cy="12" r="1.5"/>
          <circle cx="12" cy="12" r="1.5"/>
          <circle cx="16" cy="12" r="1.5"/>
        </svg>
      ),
    },
    {
      name: "Devpost",
      url: "https://afropix-2026.devpost.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="footer-icon">
          <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/uncbit/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="footer-icon">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">AfroPix</span>
          <span className="footer-tagline">Symposium 2026</span>
        </div>
        
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p className="footer-credit">
            Hosted by <span className="highlight">Black in Technology (BiT)</span> at UNC Chapel Hill
          </p>
          <p className="footer-copyright">© 2026 AfroPix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
