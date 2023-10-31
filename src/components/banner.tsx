import React, { useState } from 'react';
import { HiOutlineXMark, HiStar } from 'react-icons/hi2';

export default function Banner() {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`${
        show ? 'flex' : 'hidden'
      } fixed inset-x-0 bottom-0 isolate  items-center gap-x-6 overflow-hidden bg-white bg-opacity-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem]"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem]"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="flex items-center text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Get free makeup</strong>
          <HiStar className="text- mx-2 h-3 w-3" />
          Experience the Magic of Free Makeup
        </p>
        <a
          href="#"
          className="duration-400 flex-none rounded-full bg-rose-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm transition  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Enroll now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <HiOutlineXMark
            className="h-5 w-5 text-gray-900"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
