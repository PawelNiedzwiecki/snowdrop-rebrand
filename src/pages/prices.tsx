import { HeadFC, Link, type PageProps } from 'gatsby';
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Prices: React.FC<PageProps> = () => {
  const services = [
    {
      name: 'Makeup (any type) including lashes',
      price: 38,
      id: 1,
    },
    { name: 'Bridal trial makeup', price: 38, id: 1 },
    {
      name: 'Private makeup 1-2-1 lessons',
      price: 20,
      info: 'Price per hour',
      id: 5,
    },
    {
      name: 'Lymphatic facial massage with peeling and mask/algae',
      price: 25,
      id: 3,
    },
    {
      name: 'Facial acid peel (acid therapy not available during summer)',
      price: 43,
      id: 3,
    },
    { name: 'Eyebrows shaping + henna', price: 10, id: 4 },
  ];

  return (
    <Layout>
      <div className="mx-auto lg:px-8">
        <div className="mx-auto max-w-2xl pb-6 sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-sm">
          {services.map(({ id, name, price, info }) => (
            <div
              key={name}
              className="group flex items-center justify-between border-l-2 border-transparent bg-white bg-opacity-40 px-4 py-2 transition-all duration-100  hover:border-rose-500"
            >
              <div className="flex gap-x-4 flex-1">
                <h3 className="text-base font-medium tracking-tight text-gray-900 group-hover:text-rose-600">
                  {name}
                </h3>
                {info && (
                  <div className="group relative flex items-center">
                    <FaQuestionCircle className="text-lg font-normal text-slate-800" />
                    <span
                      className="absolute left-1/2 m-4 mx-auto w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800
    px-1 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {info}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <p className="text-base font-bold tracking-tight text-gray-900 group-hover:text-rose-600">
                  £ {price}
                </p>
                <Link to={`/contact?id=${id}`} className="btn">
                  Get in touch
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Prices;

export const Head: HeadFC = () => <Seo title="Prices" />;
