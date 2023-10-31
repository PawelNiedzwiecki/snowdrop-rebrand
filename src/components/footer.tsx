import { StaticImage } from 'gatsby-plugin-image';
import { AiFillHeart } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    name: 'Dominika Stawicka',
    phone: '07462161101',
    email: 'contact@snowdrop.pl',
  };

  const socialLinks = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/snowdropmakeup',
      Component: BsInstagram,
    },
    {
      name: 'Facebook',
      link: 'https://www.instagram.com/snowdropmakeup',
      Component: BsFacebook,
    },
  ];

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
            className="mb-4 flex items-center justify-center"
          >
            {socialLinks.map(({ name, link, Component }) => (
              <div key={name} className="px-2">
                <a
                  href={link}
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Component
                    size="1.5rem"
                    title={name}
                    className="hover:text-rose-600"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="mb-4 flex align-middle [&>p]:ml-3">
            <p>{contactInfo.name}</p>
            <p>
              <a href={`tel: ${contactInfo.phone}`} title="phone">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto: ${contactInfo.email}`} title="email">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
        <hr className="mx-auto h-1 w-48 rounded bg-slate-600" />
        <p className="pt-8 text-center text-xs font-light text-slate-500">
          Copyright by Snowdrop {currentYear}. Created with{' '}
          <AiFillHeart className="inline-block align-text-top" /> by{' '}
          <a
            href="https://github.com/PawelNiedzwiecki"
            target="_blank"
            rel="noreferrer"
          >
            Pawel Niedzwiecki
          </a>
        </p>
      </div>
    </div>
  );
}
