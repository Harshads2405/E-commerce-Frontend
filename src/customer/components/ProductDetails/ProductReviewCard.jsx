<<<<<<< HEAD
import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} alignItems="flex-start">
        <Grid item xs={1}>
          <Box>
            <Avatar
              sx={{ width: 56, height: 56, bgcolor: "#9155d" }}
              alt="User Avatar"
=======
import { Box, Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const ProductReviewCard = () => {
  return (
    <div className="width-337">
      {/* <Box sx={{ width: "100%", boxShadow: 3, p: 2, borderRadius: 2, ml: 2 }}> */}
      <Grid
        className="pl-5.5 pt-2.5"
        // sx={{ width: "337%", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)" }}
        container
        spacing={2}
        gap={3}
      >
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
            >
              R
            </Avatar>
          </Box>
        </Grid>
<<<<<<< HEAD
        <Grid item xs={11}>
          {" "}
          {/* Use xs=11 to occupy rest of row */}
          <div className="space-y-2">
            <p className="font-semibold text-lg mb-0">Ram</p>
            <p className="opacity-70 mb-1">August 22, 2025</p>
          </div>
          <Rating
            value={4.5}
            name="half-rating"
            precision={0.5}
            readOnly
            size="small"
          />
          <p className="mt-1 mb-0">What A Product!</p>
        </Grid>
      </Grid>
=======

        <Grid item xs={2}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">April 5,2024</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>Lorem quasi ipsam necessitatibu iste porro!</p>
        </Grid>
      </Grid>
      {/* </Box> */}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
    </div>
  );
};

export default ProductReviewCard;
