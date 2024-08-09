import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

const RenderSlideShow = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={1000}
      className='mySwiper'
      autoHeight={true}
      modules={[Autoplay]}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item?.gallery_id}>
            <img
              className='w-full h-[256px] lg:h-[354px]'
              src={item?.src}
              alt={item?.gallery_alt_text}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RenderSlideShow;
