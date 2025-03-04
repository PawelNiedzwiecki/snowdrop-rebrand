import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { ContactItemType } from '../types/contact-types';
import { z } from 'zod';
import { ServicesType } from '../types/select-types';

export const services: ServicesType[] = [
  {
    id: 0,
    name: 'Select service',
    default: true,
  },
  {
    id: 1,
    name: 'Makeup',
  },
  {
    id: 2,
    name: 'Modelling',
  },
  {
    id: 3,
    name: 'Facial',
  },
  {
    id: 4,
    name: 'Eyebrow shaping & henna',
  },
  {
    id: 5,
    name: 'Other',
  },
];

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

export const contactItems: ContactItemType[] = [
  {
    id: 'name',
    name: 'Your name',
    type: 'text',
    placeholder: 'Dominika',
    required: true,
  },
  {
    id: 'email',
    name: 'Your email',
    type: 'email',
    placeholder: 'dominika@snowdrop.pl',
    required: true,
  },
  {
    id: 'phone',
    name: 'Your phone',
    type: 'tel',
    placeholder: 'Tell me your number so I can get in touch with you quicker',
    required: false,
  },
];

export const schema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(9),
    service: z.enum(
      services.map((service) => service.name) as [string, ...string[]]
    ),
    message: z.string().min(1).trim(),
  })
  .required();
