import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/layout';
import Select from '../components/select';
import Seo from '../components/seo';
import ServiceMap from '../components/service-map';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelectServiceFromUrl } from '../hooks/useSelectType';
import { Inputs } from '../types/contact-types';
import { contactItems, schema, services } from '../config/main-config';

type FormData = z.infer<typeof schema>;

const Contact: React.FC<PageProps> = ({ location }) => {
  const selected = useSelectServiceFromUrl(location);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  // console.log(watch('name')); // watch input value by passing the name of it

  const boxClass =
    'shadow-sm bg-gray-50 outline-none border border-gray-300 text-sm rounded-lg transition duration-300 focus:border-red-700 block w-full p-2.5';

  const astreix = <span className="ml-0.5 text-xs">*</span>;

  useEffect(() => {
    if (selected) {
      setValue('service', selected, { shouldValidate: true });
    }
  }, [selected]);

  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-md px-4 py-5 lg:py-16 bg-white border-l-2 border-transparent overflow-hidden rounded-lg shadow-sm md:bg-transparent md:shadow-none">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
            Let&apos;s get in touch!
          </h2>
          <p className="mb-8 text-center font-light text-gray-900 sm:text-xl lg:mb-16">
            Thank you for considering me for your makeup needs. Please complete
            the form below, and I&apos;ll respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {contactItems.map(({ id, name, placeholder, required }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {name}
                  {required && astreix}
                </label>
                <input
                  id={id}
                  className={boxClass}
                  placeholder={placeholder}
                  {...register(id)}
                />
                <span className="text-sm font-medium text-red-700">
                  {errors[id]?.message}
                </span>
              </div>
            ))}

            <div>
              <Controller
                name="service"
                control={control}
                defaultValue={services[0].name}
                rules={{ required: 'Please select type of service' }}
                render={({ field, formState }) => (
                  <Select field={field} formState={formState} />
                )}
              />
              <span className="text-sm font-medium text-red-700">
                {errors.service?.message}
              </span>
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
                {...register('message')}
              />
              <span className="text-sm font-medium text-red-700">
                {errors.message?.message}
              </span>
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
