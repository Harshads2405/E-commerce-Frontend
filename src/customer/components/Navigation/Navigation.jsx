"use client";
<<<<<<< HEAD
import React, { Fragment, useState, useEffect } from "react";
=======

>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
<<<<<<< HEAD
=======
  Menu,
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
<<<<<<< HEAD
  Menu,
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "../../Auth/AuthModal";
import { logout, getUser } from "../../../State/Auth/Action";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
=======
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
<<<<<<< HEAD
            { id: "womens_kurti", name: "Kurti", href: "#" },
            { id: "womens_tops", name: "Tops", href: "#" },
            { id: "womens_dresses", name: "Dresses", href: "#" },
            { id: "pants", name: "Pants", href: "#" },
            { id: "denim", name: "Denim", href: "#" },
            { id: "sweaters", name: "Sweaters", href: "#" },
            { id: "t-shirts", name: "T-Shirts", href: "#" },
            { id: "jackets", name: "Jackets", href: "#" },
            { id: "activewear", name: "Activewear", href: "#" },
            { id: "browse-all", name: "Browse All", href: "#" },
=======
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
<<<<<<< HEAD
            { id: "watches", name: "Watches", href: "#" },
            { id: "wallets", name: "Wallets", href: "#" },
            { id: "bags", name: "Bags", href: "#" },
            { id: "sunglasses", name: "Sunglasses", href: "#" },
            { id: "hats", name: "Hats", href: "#" },
            { id: "belts", name: "Belts", href: "#" },
=======
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
<<<<<<< HEAD
            { id: "full-nelson", name: "Full Nelson", href: "#" },
            { id: "my-way", name: "My Way", href: "#" },
            { id: "re-arranged", name: "Re-Arranged", href: "#" },
            { id: "counterfeit", name: "Counterfeit", href: "#" },
            { id: "significant-other", name: "Significant Other", href: "#" },
=======
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
<<<<<<< HEAD
            { id: "mens_kurta", name: "Mens Kurta", href: "#" },
            { id: "tops", name: "Tops", href: "#" },
            { id: "pants", name: "Pants", href: "#" },
            { id: "sweaters", name: "Sweaters", href: "#" },
            { id: "t-shirts", name: "T-Shirts", href: "#" },
            { id: "jackets", name: "Jackets", href: "#" },
            { id: "activewear", name: "Activewear", href: "#" },
            { id: "browse-all", name: "Browse All", href: "#" },
=======
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
<<<<<<< HEAD
            { id: "watches", name: "Watches", href: "#" },
            { id: "wallets", name: "Wallets", href: "#" },
            { id: "bags", name: "Bags", href: "#" },
            { id: "sunglasses", name: "Sunglasses", href: "#" },
            { id: "hats", name: "Hats", href: "#" },
            { id: "belts", name: "Belts", href: "#" },
=======
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
<<<<<<< HEAD
            { id: "re-arranged", name: "Re-Arranged", href: "#" },
            { id: "counterfeit", name: "Counterfeit", href: "#" },
            { id: "full-nelson", name: "Full Nelson", href: "#" },
            { id: "my-way", name: "My Way", href: "#" },
=======
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center text-red-600">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

function Navigation() {
=======
export default function Navigation() {
  // All handlers and states from your screenshots
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
<<<<<<< HEAD
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((store) => store.auth);
  const location = useLocation();

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user, location.pathname, navigate]);
=======
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

<<<<<<< HEAD
  const handleCloseUserMenu = () => {
=======
  const handleCloseUserMenu = (event) => {
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
<<<<<<< HEAD
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

=======
    navigate(`${category.id}/${section.id}/${item.id}`);
    close();
  };

>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pt-10 pb-8"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <button
                                className="-m-2 block p-2 text-gray-500 w-full text-left"
                                onClick={() =>
                                  handleCategoryClick(
                                    category,
                                    section,
                                    item,
                                    () => setOpen(false)
                                  )
                                }
                              >
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                  onClick={handleOpen}
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                  onClick={handleOpen}
                >
                  Create account
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
<<<<<<< HEAD
      {/* Auth Modal */}
      {openAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-900"></div>
=======
      {/* Auth Modal (example usage) */}
      {openAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg p-6 shadow-xl min-w-[300px]">
            <p className="font-bold mb-2">Authentication Modal</p>
            <button
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
      )}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
<<<<<<< HEAD
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://img.icons8.com/?size=100&id=42853&format=png&color=000000"
=======
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://dynamic.brandcrowd.com/asset/logo/889b55b3-1f25-41c1-b594-a87fb8a8f12a/logo-search-grid-2x?logoTemplateVersion=2&v=638851340616700000&text=harshad&layout=auto"
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
<<<<<<< HEAD
=======
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow-sm"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <button
                                            className="hover:text-gray-800 text-left w-full"
                                            onClick={() =>
                                              handleCategoryClick(
                                                category,
                                                section,
                                                item,
                                                () => {}
                                              )
                                            }
                                          >
                                            {item.name}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
<<<<<<< HEAD
              {/* RIGHT SIDE USER CONTROLS */}
              <div className="ml-auto flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 items-center">
                {auth.user?.firstName ? (
                  <div>
                    {/* Avatar */}
                    <Menu as="div" className="relative">
                      <Menu.Button className="flex items-center text-gray-700 hover:text-gray-800 focus:outline-none">
                        <Avatar
                          sx={{
                            bgcolor: deepPurple[500],
                            color: "white",
                            cursor: "pointer",
                            width: 32,
                            height: 32,
                            fontSize: 16,
                            fontWeight: 700,
                          }}
                          onClick={handleUserClick}
                        >
                          {auth.user.firstName?.[0]?.toUpperCase() || "?"}
                        </Avatar>
                        <span className="ml-3 text-sm font-medium">
                          {auth.user.firstName}
                        </span>
                        <span className="sr-only">Open user menu</span>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } block px-4 py-2 text-sm text-gray-700`}
                                >
                                  Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  onClick={() => navigate("/account/order")}
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } block px-4 py-2 text-sm text-gray-700`}
                                >
                                  My Orders
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={handleLogout}
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                                >
                                  Log out
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <button
                    onClick={handleOpen}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Signin
                  </button>
                )}
=======
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={handleOpen}
                  >
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    onClick={handleOpen}
                  >
                    Create account
                  </a>
                </div>
                <div className="hidden lg:flex lg:items-center lg:ml-8">
                  <Menu as="div" className="relative">
                    <Menu.Button
                      className="flex items-center text-gray-700 hover:text-gray-800 focus:outline-none"
                      onClick={handleUserClick}
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://images.unsplash.com/vector-1749124647885-49713a8d2750?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="User Avatar"
                      />
                      <span className="ml-3 text-sm font-medium">Harshad</span>
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item onClick={() => navigate("/account/order")}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                My Orders
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="size-6"
                    />
                  </a>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
<<<<<<< HEAD
              {/* END USER CONTROLS */}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
            </div>
          </div>
        </nav>
      </header>
<<<<<<< HEAD
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}

export default function NavigationWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Navigation {...props} />
    </ErrorBoundary>
  );
}
=======
    </div>
  );
}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
