import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";

const StyledFaqCarousel = styled.div`
  height: 17.6rem;

  & swiper-container {
    width: 100%;
    height: 100%;
  }

  & swiper-slide {
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.4);
    }

    & h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-green-100);
      font-size: 1.6rem;
      font-weight: 700;
      width: 80%;
      text-align: center;
    }
  }
  & swiper-slide:nth-of-type(1) {
    img {
      filter: grayscale(1) brightness(0.4);
    }
  }

  @media screen and (min-width: 768px) {
    height: 25.6rem;

    & swiper-slide h2 {
      font-size: 2.4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 33.6rem;

    & swiper-slide h2 {
      font-size: 4rem;
    }
  }
`;

function FaqCarousel() {
  return (
    <StyledFaqCarousel>
      <Swiper autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img
            src="./assets/images/bg-carousel-faq.webp"
            alt="سوالات متداول"
            loading="lazy"
          />
          <h2>سوالات متداول از ترخینه</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./assets/images/bg-carousel-rules.webp"
            alt="قوانین"
            loading="lazy"
          />
          <h2>قوانین ترخینه</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./assets/images/bg-carousel-privacy.webp"
            alt="حریم خصوصی"
            loading="lazy"
          />
          <h2>حریم شخصی کاربران</h2>
        </SwiperSlide>
      </Swiper>
    </StyledFaqCarousel>
  );
}

export default FaqCarousel;
