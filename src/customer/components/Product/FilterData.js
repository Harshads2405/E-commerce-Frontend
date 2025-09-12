<<<<<<< HEAD
=======
export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
export const filters = [
  {
    id: "color",
    name: "Color",
<<<<<<< HEAD
    // Multi-select (checkbox) by default, no type needed
    options: [
      { value: "white", label: "White", checked: false },
      { value: "black", label: "Black", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "red", label: "Red", checked: false },
      { value: "yellow", label: "Yellow", checked: false },
      { value: "orange", label: "Orange", checked: false },
      { value: "beige", label: "Beige", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    // Multi-select (checkbox) by default
    options: [
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "xxl", label: "XXL", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price",
    type: "radio", // Set as radio filter for single selection
    options: [
      { value: "0-499", label: "₹0 to ₹499", checked: false },
      { value: "500-999", label: "₹500 to ₹999", checked: false },
      { value: "1000-1499", label: "₹1000 to ₹1499", checked: false },
      { value: "1500-1999", label: "₹1500 to ₹1999", checked: false },
      { value: "2000+", label: "₹2000 and above", checked: false },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    type: "radio", // Set as radio for single selection
    options: [
      { value: "10", label: "10% or more", checked: false },
      { value: "20", label: "20% or more", checked: false },
      { value: "30", label: "30% or more", checked: false },
      { value: "50", label: "50% or more", checked: false },
      { value: "70", label: "70% or more", checked: false },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    type: "radio", // Single selection for availability status
    options: [
      { value: "instock", label: "In Stock", checked: false },
      { value: "outofstock", label: "Out of Stock", checked: false },
    ],
  },
];
=======
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"}
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "3999-4999", label: "₹3999 To ₹4999" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
