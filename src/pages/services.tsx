import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
// area of service map
const Services = () => (
  <Layout>
    <section>
      <p>Your skin is an investment. Not an expense.</p>
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-gray-900 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Facial lymphatic skin treatment
          </h2>
          <p className="mb-4">
            Experience the rejuvenating power of facial skin lymphatic massage,
            a luxurious treatment that combines relaxation and wellness for your
            skin. This gentle and soothing massage technique focuses on
            stimulating the lymphatic system in your face, promoting
            detoxification and enhancing the natural beauty of your complexion.
          </p>
          <p>
            As the skilled hands of our experienced estheticians glide across
            your skin, they utilize precise movements and rhythmic strokes to
            encourage lymphatic drainage. By targeting the lymph nodes and
            pathways, this specialized massage technique helps to remove toxins,
            reduce puffiness, and improve overall circulation in the facial
            area.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <StaticImage
              src="../images/main.jpg"
              alt="office content 1"
              className="img-wrap"
            />
          </div>
          <StaticImage
            className="img-wrap mt-4 lg:mt-10"
            src="../images/hero-image.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="order-2 font-light text-gray-900 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Facial lymphatic skin treatment
          </h2>
          <p className="mb-4">
            Experience the rejuvenating power of facial skin lymphatic massage,
            a luxurious treatment that combines relaxation and wellness for your
            skin. This gentle and soothing massage technique focuses on
            stimulating the lymphatic system in your face, promoting
            detoxification and enhancing the natural beauty of your complexion.
          </p>
          <p>
            As the skilled hands of our experienced estheticians glide across
            your skin, they utilize precise movements and rhythmic strokes to
            encourage lymphatic drainage. By targeting the lymph nodes and
            pathways, this specialized massage technique helps to remove toxins,
            reduce puffiness, and improve overall circulation in the facial
            area.
          </p>
        </div>
        <div className="order-1 mt-8 grid grid-cols-2 gap-4">
          <div>
            <StaticImage
              src="../images/main.jpg"
              alt="office content 1"
              className="img-wrap"
            />
          </div>
          <StaticImage
            className="img-wrap mt-4 lg:mt-10"
            src="../images/hero-image.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;

export const Head: HeadFC = () => <Seo title="Services" />;
