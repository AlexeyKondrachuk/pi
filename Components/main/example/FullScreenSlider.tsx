
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import styles from './FullScreenSlider.module.scss';

type FullScreenSliderProps = {
  images: { alt: string; src: string }[];
};

const FullScreenSlider: React.FC<FullScreenSliderProps> = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      {/* Слайдер в обычном режиме */}
      <div className={styles['slider-container']}>
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          navigation={true}
          pagination={{ clickable: true }}
          zoom={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={image.src} alt={image.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isFullScreen && (
        <button
          className={styles['expand-button']}
          onClick={toggleFullScreen}
        >
       <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4 4H20V20H4V4ZM5.5 5.5V18.5H18.5V5.5H5.5Z" fill="#1F2328"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.4372 8.50252L12 8.50252V7.00252L16.9984 7.00252L16.9984 12H15.4984V9.56266L9.56118 15.4975H11.9984V16.9975H7V12H8.5V14.4373L14.4372 8.50252Z" fill="#1F2328"/>
</svg>
        </button>
      )}
      </div>

      {/* Кнопка для разворачивания на весь экран */}


      {/* Слайдер в полноэкранном режиме */}
      {isFullScreen && (
        <div className={styles.fullscreen}>
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            navigation={true}
            pagination={{ clickable: true }}
            zoom={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img src={image.src} alt={image.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кнопка для выхода из полноэкранного режима */}
          <button
            className={styles['close-button']}
            onClick={toggleFullScreen}
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default FullScreenSlider;

