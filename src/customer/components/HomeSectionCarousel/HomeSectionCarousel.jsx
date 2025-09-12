import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

<<<<<<< HEAD
const HomeSectionCarousel = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
=======
const HomeSectionCarousel = ({data,sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const sidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const sideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item, i) => <HomeSectionCard key={i} product={item} />);

  return (
<<<<<<< HEAD
    <div className="bg-white rounded-lg shadow shadow-gray-500 p-5">
      <h2 className="text-2xl font-extrabold text-gray-900">{sectionName}</h2>
      <div className="relative mx-5">
=======
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{sectionName}</h2>
      <div className="relative p-5">
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white shadow"
            onClick={sideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white shadow"
            onClick={sidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
export default HomeSectionCarousel;
