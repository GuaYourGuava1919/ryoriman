import React from "react";
import PageHeader from "../component/PageHeader";
import PopRecipeCard from "../component/recipe/PopRecipeCard";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div>
      <PageHeader />
      <div className="popRecipeCardList">
        <div className="popRecipeCardListTitle">
          <LocalFireDepartmentIcon sx={{ fontSize: "35px" }} />
          <h2>本日熱門</h2>
        </div>
        <div className="popRecipeCardContainer">
          <PopRecipeCard />
          <PopRecipeCard />
          <PopRecipeCard />
        </div>
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>56</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
