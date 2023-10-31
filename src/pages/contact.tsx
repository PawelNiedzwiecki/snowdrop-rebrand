import React, { useEffect } from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';
import Select from '../components/select';
import Seo from '../components/seo';
import ServiceMap from '../components/service-map';

const Contact = () => {
  let id: number;
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = parseInt(urlParams.get('id')) || 0;
  }, []);

  const boxClass =
    'shadow-sm bg-gray-50 outline-none border border-gray-300 text-sm rounded-lg transition duration-300 focus:border-rose-400 block w-full p-2.5';

  const astreix = <span className="ml-0.5 text-xs">*</span>;

  const contactItems = [
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

  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Let&apos;s get in touch!
          </h2>
          <p className="mb-8 text-center font-light text-gray-900 sm:text-xl lg:mb-16">
            Thank you for considering me for your makeup needs. Please complete
            the form below, and I&apos;ll respond as soon as possible.
          </p>
          <form action="#" className="space-y-8">
            {contactItems.map(({ id, name, type, placeholder, required }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {name}
                  {required && astreix}
                </label>
                <input
                  type={type}
                  id={id}
                  className={boxClass}
                  placeholder={placeholder}
                  required={required}
                />
              </div>
            ))}

            <div>
              <Select selectedService={id} />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className={boxClass}
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" className="btn-big">
              Send message
            </button>
          </form>
          <p className="mt-8 text-justify text-xs font-light leading-5 tracking-tight text-slate-500">
            By submitting this form, you agree to our Privacy Policy and consent
            to the processing of your personal data for the purpose of
            responding to your inquiry. Please note that submitting this form
            does not guarantee an appointment. We will do our best to
            accommodate your request and will be in touch to discuss
            availability.
          </p>
        </div>
      </section>
      <ServiceMap />
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => <Seo title="Contact" />;
