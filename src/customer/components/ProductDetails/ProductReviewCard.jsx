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
            >
              R
            </Avatar>
          </Box>
        </Grid>

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
    </div>
  );
};

export default ProductReviewCard;
