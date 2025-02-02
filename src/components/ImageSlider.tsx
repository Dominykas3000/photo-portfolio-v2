import { ProjectImage } from "../../types/ProjectImage";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: ProjectImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <section className="w-full md:w-3/4">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image, index: number) => (
          <SwiperSlide key={index}>
              <img
                className="m-auto w-auto h-auto max-h-80 md:max-h-[65dvh]"
                src={
                  image.attributes.formats.medium
                    ? `${import.meta.env.VITE_STRAPI_URL}` +
                      image.attributes.formats.medium.url
                    : `${import.meta.env.VITE_STRAPI_URL}` +
                      image.attributes.url
                }
                alt={image.attributes.name}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
