<<<<<<< HEAD
import React from "react";

const AddressCard = ({ address }) => {
  if (!address) return null;

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address.firstName} {address.lastName}
        </p>
        <p>
          {address.streetAddress}, {address.city}, {address.state},{" "}
          {address.zipCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address.mobile}</p>
=======
const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3 ">
        <p className="font-semibold">Harshad Shinde</p>
        <p>Talegoav,Pune, 410507</p>
        <div className="space-y-1">
          <p className="fontsemi">Phone Number</p>
          <p>8010159015</p>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
