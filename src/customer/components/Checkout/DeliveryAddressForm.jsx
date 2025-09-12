<<<<<<< HEAD
// DeliveryAddressForm.jsx
import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = ({ onDeliverHere }) => {
  const [editingAddress, setEditingAddress] = React.useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
=======
import { Box, Button, Paper, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    };
    console.log("Address Submit", address);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
      }}
    >
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "98%",
          maxWidth: "1400px",
          minHeight: "500px",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
<<<<<<< HEAD
        {/* Left side: show entered address preview */}
=======
        {/* Left side */}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fafafa",
            borderRight: { xs: "none", md: "1px solid #eee" },
            p: 3,
            minWidth: 300,
          }}
        >
<<<<<<< HEAD
          <AddressCard address={editingAddress} />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, width: "100%" }}
            onClick={() => onDeliverHere(editingAddress)}
          >
            Deliver Here
          </Button>
        </Box>

        {/* Right side: form */}
=======
          <AddressCard />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3, width: "100%" }}
          >
            Change Address
          </Button>
        </Box>

        {/* Right side form of addres*/}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 50%" },
            bgcolor: "#fff",
            p: 4,
            minWidth: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                fullWidth
                required
<<<<<<< HEAD
                value={editingAddress.firstName}
                onChange={handleChange}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              />
              <TextField
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                fullWidth
                required
<<<<<<< HEAD
                value={editingAddress.lastName}
                onChange={handleChange}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              />
            </Box>
            <TextField
              label="Address"
<<<<<<< HEAD
              name="streetAddress"
=======
              name="address"
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              autoComplete="address"
              fullWidth
              multiline
              rows={4}
              required
<<<<<<< HEAD
              value={editingAddress.streetAddress}
              onChange={handleChange}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="City"
                name="city"
                autoComplete="city"
                fullWidth
                required
<<<<<<< HEAD
                value={editingAddress.city}
                onChange={handleChange}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              />
              <TextField
                label="State/Province/Region"
                name="state"
                autoComplete="state"
                fullWidth
                required
<<<<<<< HEAD
                value={editingAddress.state}
                onChange={handleChange}
=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 2,
                mt: 2,
              }}
            >
              <TextField
                label="Zip / Postal Code"
<<<<<<< HEAD
                name="zipCode"
                autoComplete="zip"
                fullWidth
                required
                value={editingAddress.zipCode}
                onChange={handleChange}
              />
              <TextField
                label="Phone Number"
                name="mobile"
                autoComplete="phoneNumber"
                fullWidth
                required
                value={editingAddress.mobile}
                onChange={handleChange}
=======
                name="zip"
                autoComplete="zip"
                fullWidth
                required
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                fullWidth
                required
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              />
            </Box>
            <Button
              variant="contained"
<<<<<<< HEAD
              color="secondary"
=======
              color="primary"
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
              size="large"
              sx={{ mt: 3, width: "100%" }}
              type="submit"
            >
<<<<<<< HEAD
              Change Address
=======
              Deliver Here
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default DeliveryAddressForm;
