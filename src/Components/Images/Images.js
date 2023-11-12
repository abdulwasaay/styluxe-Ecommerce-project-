import styles from "./Images.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination} from 'swiper/modules';

export default function ImageSlider() {
  return (
    <>
    <div className={styles.container}>
      <Swiper
        style={{
          '--swiper-navigation-color': 'blue',
          '--swiper-pagination-color': 'blue',
        }}
        pagination = {{
          clickable : true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        className={styles.mySwiper2}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src="image1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="image2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="image3.jpeg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
