import { BsFacebook, BsInstagram } from 'react-icons/bs';
export const contactInfo = {
  name: 'Dominika Stawicka',
  phone: '07462161101',
  email: 'contact@snowdrop.pl',
} as const;

export const socialLinks = [
  {
    media: 'Instagram',
    link: 'https://www.instagram.com/snowdropmakeup',
    Component: BsInstagram,
  },
  {
    media: 'Facebook',
    link: 'https://www.instagram.com/snowdropmakeup',
    Component: BsFacebook,
  },
] as const;
