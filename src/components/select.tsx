import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import { services } from '../types/services';
import { ControllerRenderProps, UseFormStateReturn } from 'react-hook-form';
import { Inputs } from '../pages/contact';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({
  field,
  formState,
}: {
  field: ControllerRenderProps<Inputs, 'service'>;
  formState: UseFormStateReturn<Inputs>;
}) {
  const { onChange, value } = field;

  console.log('formState', formState.errors);
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Select service
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm focus:border-rose-500 focus:ring-rose-500">
              <span className="flex items-center">
                <span className="block truncate">{value}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {services
                  .filter((service) => !service.default)
                  .map((service) => (
                    <Listbox.Option
                      key={service.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-rose-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      disabled={service.default}
                      value={service.name}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {service.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-rose-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
