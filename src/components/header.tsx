import { Dialog } from '@headlessui/react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          menuLinks {
            name
            href
          }
        }
      }
    }
  `);

  const navigation = data?.site?.siteMetadata?.menuLinks;

  return (
    <>
      <header className="relative z-50">
        <nav
          className="flex items-center justify-between pb-2 pt-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="#">
              <span className="sr-only">Snowdrop</span>
              <StaticImage
                src="../images/Snowdrop_SVG.svg"
                placeholder="tracedSVG"
                alt="Logo"
                width={200}
                style={{ filter: 'invert(90%)' }}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                activeClassName="text-rose-600"
                className="duration-400 text-sm font-semibold leading-6 text-gray-900 transition"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="relative hidden pr-3 lg:flex lg:flex-1 lg:justify-end">
            <span className="absolute right-0 top-0 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
            </span>
            <a
              href="#"
              className="duration-400 text-sm font-semibold leading-6 text-rose-600 transition hover:text-rose-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              Free makeup!
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Snowdrop</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
