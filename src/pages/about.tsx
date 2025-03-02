import { HeadFC, type PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About: React.FC<PageProps> = () => {
  // const typesOfMakeup = [
  //   {
  //     name: 'bridal',
  //   },
  //   {
  //     name: 'stage',
  //   },
  //   {
  //     name: 'prom',
  //   },
  //   {
  //     name: 'photo session',
  //   },
  //   {
  //     name: 'party',
  //   },
  //   {
  //     name: 'evening',
  //   },
  // ];

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-0 py-6 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="text-base leading-7 text-slate-700 [&>p]:py-3">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900">
            Hey there! I&apos;m <span className="text-rose-600">Dominika</span>
          </h2>
          <p>
            Welcome to my world of beauty and artistry! I&apos;m Dominika, a
            passionate beauty therapist, makeup artist, and qualified skin care
            therapist. With a{' '}
            <span className="font-semibold">
              3-year beautician school education
            </span>{' '}
            and a <span className="font-semibold">level 3 makeup course</span>{' '}
            under my belt, I specialize in bridal, stage, prom, photo session,
            party and evening makeups.
          </p>
          <p>
            As a qualified skin care therapist, I&apos;m also dedicated to
            helping clients achieve healthy, glowing skin. With personalized
            treatments and expert advice, I&apos;ll guide you towards your
            skincare goals.
          </p>
          <p>
            My goal is to enhance your natural beauty while providing a
            comfortable and empowering experience. From exquisite bridal looks
            to captivating stage makeups, I&apos;m committed to creating
            unforgettable beauty experiences.
          </p>
          <p>
            Join me on this journey of self-care, where we can celebrate your
            unique style and let your inner radiance shine. I can&apos;t wait to
            be a part of your beauty story.
          </p>

          <span className="my-8 block text-xl font-extrabold italic leading-6 tracking-tight text-slate-700">
            &quot;Aging is a fact of life. Looking your age is not&quot;
            <p className="mt-4 text-base font-bold">Dr. Howard Murad</p>
          </span>
        </div>
        <div>
          <StaticImage
            className="img-wrap"
            src="../images/main.jpg"
            placeholder="dominantColor"
            alt="Dominika"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head: HeadFC = () => <Seo title="About me" />;
