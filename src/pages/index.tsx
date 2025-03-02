import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import { HeadFC, Link, PageProps } from 'gatsby';
import Seo from '../components/seo';

const MainPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
        <div className="flex-1 py-8 md:py-20 pr-0 md:pr-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Enhance Your Natural Beauty
            <span className="block text-rose-600 mt-2">
              With Professional Touch
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Welcome to Snowdrop Beauty, where artistry meets transformation.
            Experience professional makeup services that enhance your natural
            beauty and boost your confidence for any special occasion.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="#get-in-touch"
              className="rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <StaticImage
            src="../images/hero.jpg"
            className="rounded-lg shadow-xl"
            alt="Professional makeup artist at work"
            layout="fullWidth"
            placeholder="dominantColor"
          />
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional makeup services tailored to your unique style and
              occasion
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Bridal Makeup */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm">
              <div className="rounded-lg p-3 bg-rose-100">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Bridal Makeup
              </h3>
              <p className="mt-4 text-center text-gray-600">
                Perfect, long-lasting makeup for your special day
              </p>
            </div>

            {/* Special Occasion */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm">
              <div className="rounded-lg p-3 bg-rose-100">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Special Occasion
              </h3>
              <p className="mt-4 text-center text-gray-600">
                Glamorous looks for parties and events
              </p>
            </div>

            {/* Facial Massage */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm">
              <div className="rounded-lg p-3 bg-rose-100">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Facial Massage
              </h3>
              <p className="mt-4 text-center text-gray-600">
                Relaxing and rejuvenating facial treatments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Happy clients
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                100+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Years of Experience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                5+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Professional Certificates
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                3
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-rose-50 py-16" id="get-in-touch">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Book your appointment today and let's create your perfect look
              together
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => (
  <Seo title="Professional Makeup Artist | Snowdrop Beauty" />
);
