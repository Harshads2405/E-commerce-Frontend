"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
<<<<<<< HEAD
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { filters } from "./FilterData";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "./../../../State/Product/Action";
import Pagination from "@mui/material/Pagination";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
=======
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mens_kurta } from "./../../../Data/mens_kurta";
import { filters, singleFilter } from "./FilterData";
import ProductCard from "./ProductCard";

const sortOptions = [
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
  const param = useParams();
  const dispatch = useDispatch();
  // destructure products slice, provide defaults to prevent errors
  const { products } = useSelector((store) => store.products);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  const handleFilter = (value, sectionId, type) => {
    const searchParams = new URLSearchParams(location.search);

    if (type === "radio") {
      searchParams.set(sectionId, value);
      navigate({ search: `?${searchParams.toString()}` });
      return;
    }

    let filterValues = searchParams.get(sectionId)?.split(",") || [];
    if (filterValues.includes(value)) {
      filterValues = filterValues.filter((item) => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      } else {
        searchParams.set(sectionId, filterValues.join(","));
      }
    } else {
      filterValues.push(value);
      searchParams.set(sectionId, filterValues.join(","));
    }

    navigate({ search: `?${searchParams.toString()}` });
  };

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    navigate({ search: `?${searchParams.toString()}` });
  };

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);

    const colors = colorValue ? colorValue.split(",") : [];
    const sizes = sizeValue ? sizeValue.split(",") : [];
    const colorStr = colors.length > 0 ? colors.join(",") : "";
    const sizeStr = sizes.length > 0 ? sizes.join(",") : "";

    const stockValue = stock === "null" || !stock ? "" : stock;

    const data = {
      category: param.levelThree || "",
      colors: colorStr,
      sizes: sizeStr,
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: Number(pageNumber) - 1,
      pageSize: 3,
      stock: stockValue,
    };

    console.log("Dispatching findProducts with data:", data);
    dispatch(findProducts(data));
  }, [
    param.levelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
    dispatch,
  ]);

=======

  const handlerFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);

    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);

      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }

    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
<<<<<<< HEAD
          <DialogBackdrop className="fixed inset-0 bg-black/25" />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex w-full max-w-md flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
=======
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
<<<<<<< HEAD
                  className="p-2 text-gray-400 hover:bg-gray-50 rounded-md"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

=======
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
<<<<<<< HEAD
                      <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
=======
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
<<<<<<< HEAD
                          <PlusIcon className="h-5 w-5 group-open:hidden" />
                          <MinusIcon className="h-5 w-5 hidden group-open:inline" />
=======
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
<<<<<<< HEAD
                        {section.type === "radio" ? (
                          <FormControl>
                            <RadioGroup
                              name={section.id}
                              value={
                                new URLSearchParams(location.search).get(
                                  section.id
                                ) || ""
                              }
                              onChange={(e) =>
                                handleFilter(
                                  e.target.value,
                                  section.id,
                                  "radio"
                                )
                              }
                            >
                              {section.options.map((option, idx) => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        ) : (
                          <div className="flex flex-col gap-2">
                            {section.options.map((option, idx) => {
                              const selectedValues =
                                new URLSearchParams(location.search)
                                  .get(section.id)
                                  ?.split(",") || [];
                              return (
                                <FormControlLabel
                                  key={option.value}
                                  control={
                                    <Checkbox
                                      checked={selectedValues.includes(
                                        option.value
                                      )}
                                      onChange={() =>
                                        handleFilter(
                                          option.value,
                                          section.id,
                                          "checkbox"
                                        )
                                      }
                                    />
                                  }
                                  label={option.label}
                                />
                              );
                            })}
                          </div>
                        )}
=======
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

<<<<<<< HEAD
        {/* Desktop view */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
=======
        <main className="mx-auto px-4 sm:px-6 lg:px-20">
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
<<<<<<< HEAD
                <MenuButton className="inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
=======
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
<<<<<<< HEAD
                            "block px-4 py-2 text-sm"
=======
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
<<<<<<< HEAD
                onClick={() => setMobileFiltersOpen(true)}
                className="ml-6 lg:hidden text-gray-400 hover:text-gray-500"
              >
                <FunnelIcon className="h-5 w-5" />
=======
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
<<<<<<< HEAD
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <div>
                <div className="py-5 flex justify-between items-center">
                  <h2 className="text-lg opacity-50 font-semibold">Filters</h2>
                  <FilterAltIcon />
=======
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              <div>
                <div className="py-10 flex justify-between items-center">
                  <h1 className="text-lg opacity-60 font-bold">Filters</h1>
                  <SortIcon />
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                </div>

                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
<<<<<<< HEAD
                        <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
=======
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
<<<<<<< HEAD
                            <PlusIcon className="h-5 w-5 group-open:hidden" />
                            <MinusIcon className="h-5 w-5 hidden group-open:inline" />
=======
                            <PlusIcon
                              aria-hidden="true"
                              className="size-5 group-data-open:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="size-5 group-not-data-open:hidden"
                            />
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
<<<<<<< HEAD
                        {section.type === "radio" ? (
                          <FormControl>
                            <RadioGroup
                              name={section.id}
                              value={
                                new URLSearchParams(location.search).get(
                                  section.id
                                ) || ""
                              }
                              onChange={(e) =>
                                handleFilter(
                                  e.target.value,
                                  section.id,
                                  "radio"
                                )
                              }
                            >
                              {section.options.map((option, idx) => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                          </FormControl>
                        ) : (
                          <div className="flex flex-col gap-2">
                            {section.options.map((option, idx) => {
                              const selectedValues =
                                new URLSearchParams(location.search)
                                  .get(section.id)
                                  ?.split(",") || [];
                              return (
                                <FormControlLabel
                                  key={option.value}
                                  control={
                                    <Checkbox
                                      checked={selectedValues.includes(
                                        option.value
                                      )}
                                      onChange={() =>
                                        handleFilter(
                                          option.value,
                                          section.id,
                                          "checkbox"
                                        )
                                      }
                                    />
                                  }
                                  label={option.label}
                                />
                              );
                            })}
                          </div>
                        )}
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
=======
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex gap-3">
                              <div className="flex h-5 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    // ✅ FIX: connect handlerFilter
                                    onChange={() =>
                                      handlerFilter(option.value, section.id)
                                    }
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                  >
                                    <path
                                      d="M3 8L6 11L11 3.5"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                      d="M3 7H11"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  {singleFilter.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            {/* FIX: put section.name here on the left */}
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>

                            {/* FIX: only icons on the right */}
                            <span className="ml-6 flex items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-5 group-data-open:hidden"
                              />
                              <MinusIcon
                                aria-hidden="true"
                                className="size-5 group-not-data-open:hidden"
                              />
                            </span>
                          </DisclosureButton>
                        </h3>

                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex gap-3">
                                <div className="flex h-5 shrink-0 items-center">
                                  <div className="group grid size-4 grid-cols-1">
                                    <input
                                      defaultValue={option.value}
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      // ✅ FIX: connect handlerFilter
                                      onChange={() =>
                                        handlerFilter(option.value, section.id)
                                      }
                                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                    />
                                    <svg
                                      fill="none"
                                      viewBox="0 0 14 14"
                                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                    >
                                      <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                      />
                                      <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    </Disclosure>
                  ))}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
                </form>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5">
<<<<<<< HEAD
                  {products?.content?.map((item, idx) => (
                    <ProductCard key={idx} product={item} />
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="w-[70rem] justify-center">
                <Pagination
                  count={products?.totalPages || 1}
                  color="secondary"
                  page={Number(pageNumber)}
                  onChange={handlePaginationChange}
                  sx={{
                    ul: { flexDirection: "row", justifyContent: "center" },
                  }}
                />
              </div>
=======
                  {mens_kurta.map((item) => (
                    <ProductCard product={item} />
                  ))}
                </div>
              </div>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
