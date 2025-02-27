import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import { HeadFC, PageProps } from 'gatsby';
import Seo from '../components/seo';

const MainPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between">
        {/* <div className="flex-1 py-52 pr-8">
          <h1 className="text-4xl font-bold italic tracking-tight text-gray-900 sm:text-4xl">
            &quot;Beauty begins the moment you decide to be yourself.&quot;
            <span className="block text-sm">- Coco Chanel</span>
          </h1>
          <p className="mt-8 text-base leading-7 text-gray-600">
            Welcome to the world of beauty and transformation, where artistry
            meets wellness. I am Dominika, a passionate and skilled mobile
            makeup artist and facial massage specialist, dedicated to enhancing
            your natural beauty and promoting holistic well-being.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div> */}
        <div>
          <StaticImage
            src="../images/hero.jpg"
            className="block"
            alt="Hero image"
            layout="fullWidth"
            placeholder="dominantColor"
            // width={500}
            // height={700}
          />
        </div>
      </div>
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
                makeup experience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                5 years
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                makeup certificates
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                3
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;

export const Head: HeadFC = () => <Seo title="Main Page" />;
