import React from "react";


const socialLinks = [
  { url: 'https://instagram.com/', iconClass: 'fa-square-instagram', label: 'Follow us on Instagram (opens in a new tab)' },
  { url: 'https://twitter.com/', iconClass: 'fa-twitter', label: 'Follow us on Twitter (opens in a new tab)' },
  { url: 'https://tiktok.com/', iconClass: 'fa-tiktok', label: 'Follow us on TikTok (opens in a new tab)' },
];

const Footer = () => {
  return (
    <footer className="mainFooter">
      <ul className="social-network">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
            <i className={`fa-brands ${link.iconClass}`} aria-hidden="true" style={{ color: '#157347' }}></i>
            </a>
          </li>
        ))}
      </ul>

      <p className="footerText" style={{ color: '#157347'}}>
        © 2023 RetroHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
