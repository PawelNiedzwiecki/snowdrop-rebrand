import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { contactInfo, socialLinks } from '../config/main-config';
import Copyright from './copyright';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, phone, email } = contactInfo;

  return (
    <div className="px-6 py-8">
      <div>
        <div className="flex flex-col items-center justify-between px-2">
          <div className="my-4">
            <StaticImage
              src="../images/Snowdrop_SVG.svg"
              placeholder="tracedSVG"
              alt="Logo"
              width={150}
              style={{ filter: 'invert(100%)', opacity: 0.2 }}
            />
          </div>
          <div
            id="social-icons"
            className="mb-6 flex items-center justify-center"
          >
            {socialLinks.map(({ media, link, Component }) => (
              <div key={name} className="px-2">
                <a
                  href={link}
                  title={media}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Component
                    size="1.5rem"
                    title={media}
                    className="hover:text-rose-600"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="mb-6 flex flex-col items-center md:flex-row align-middle [&>p]:ml-3">
            <p>{name}</p>
            <p>
              <a href={`tel: ${phone}`} title="phone">
                {phone}
              </a>
            </p>
            <p>
              <a href={`mailto: ${email}`} title="email">
                {email}
              </a>
            </p>
          </div>
        </div>
        <hr className="mx-auto h-1 w-48 rounded bg-slate-600" />
        <Copyright year={currentYear} author="Pawel Niedzwiecki" />
      </div>
    </div>
  );
}
