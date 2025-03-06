import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import { HeadFC, Link, PageProps } from 'gatsby';
import Seo from '../components/seo';

const MainPage: React.FC<PageProps> = () => {
  const spacing = 'py-12 sm:py-32';
  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pb-12">
        <div className="flex-1 py-8 md:py-20 pr-0 md:pr-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transform Your Look
            <span className="block text-rose-600 mt-2">
              With Expert Artistry
            </span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            At Snowdrop Beauty, we blend artistry with expertise to enhance your
            natural beauty. Our professional makeup services are tailored to
            make you feel confident and radiant for every occasion.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="#get-in-touch"
              className="rounded-md bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              Book Your Session
            </Link>
            <Link
              to="/services"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-rose-600"
            >
              Explore Services <span aria-hidden="true">→</span>
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
      <div id="services" className={spacing}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Signature Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our range of professional makeup services, each crafted
              to bring out your unique beauty
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Bridal Makeup */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xs">
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
              <p className="mt-4 text-center text-base text-gray-600">
                Timeless, elegant makeup that lasts throughout your special day
              </p>
            </div>

            {/* Special Events */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xs">
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
                Special Events
              </h3>
              <p className="mt-4 text-center text-base text-gray-600">
                Stunning looks for parties, photoshoots, and special occasions
              </p>
            </div>

            {/* Skin Care & Beauty */}
            <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xs">
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
                Skin Care & Beauty
              </h3>
              <p className="mt-4 text-center text-base text-gray-600">
                Revitalizing treatments for a naturally glowing complexion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={spacing}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid  gap-x-8 gap-y-16 text-center grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base font-medium leading-7 text-gray-600">
                Satisfied Clients
              </dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                500+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base font-medium leading-7 text-gray-600">
                Years of Excellence
              </dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                10+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base font-medium leading-7 text-gray-600">
                Expert Artists
              </dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                5
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
              Ready for Your Transformation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Let's create your perfect look together. Book your consultation
              today and experience the Snowdrop difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
              >
                Schedule Consultation
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
