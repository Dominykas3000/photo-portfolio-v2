import { ProjectImage } from "../../types/ProjectImage";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: ProjectImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    cssEase: "ease-out",
    // autoplay: true,
    // autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow  />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="w-3/4">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="flex justify-center">
            <img
              className="m-auto w-auto h-auto max-h-[70dvh] max-w-lg"
              src={
                image.attributes.formats.medium
                  ? `${import.meta.env.VITE_STRAPI_URL}` +
                    image.attributes.formats.medium.url
                  : `${import.meta.env.VITE_STRAPI_URL}` + image.attributes.url
              }
              alt={image.attributes.name}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
