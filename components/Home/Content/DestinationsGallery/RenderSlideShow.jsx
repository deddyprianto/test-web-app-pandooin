import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Import the effect-fade CSS

import { Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade module

const RenderSlideShow = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={1500}
      effect='fade' // Use fade effect
      fadeEffect={{ crossFade: true }} // Optional: Crossfade the slides
      className='mySwiper'
      autoHeight={true}
      modules={[Autoplay, EffectFade]} // Include EffectFade module
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
