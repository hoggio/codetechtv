import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  HomeIcon,
  ShoppingBagIcon,
  MenuAlt2Icon,
  XIcon,
  DocumentSearchIcon,
  FilmIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  {
    name: 'Player',
    href: '/player',
    icon: FilmIcon,
    current: false,
  },
  {
    name: 'Videos',
    href: '/videos',
    icon: DocumentSearchIcon,
    current: false,
  },
  {
    name: 'Shop',
    href: '/shop',
    icon: ShoppingBagIcon,
    current: false,
  },
  { name: 'About Us', href: '/about', icon: UserGroupIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-10 w-auto"
                  src={'/images/longlogo.png'}
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-blue-700 text-white'
                          : 'text-white hover:bg-blue-500',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-blue-700 md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-10 w-auto"
                src={'/images/longlogo.png'}
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-blue-700 text-white'
                        : 'text-white hover:bg-blue-500',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              {children}
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
