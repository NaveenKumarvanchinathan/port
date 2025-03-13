import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="socials">
          <a href="https://www.linkedin.com/in/naveen-kumar" target="_blank" rel="noreferrer noopener">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Nnnaaavvveeenn" target="_blank" rel="noreferrer noopener">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/just_naveenok" target="_blank" rel="noreferrer noopener">
            <FaInstagram />
          </a>
        </div>
        <p>Created by Naveen Kumar</p>
      </footer>
    </div>
  );
}
