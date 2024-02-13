import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";

const StyledAboutUsCarousel = styled.section`
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
      filter: brightness(0.5);
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

function AboutUsCarousel() {
  return (
    <StyledAboutUsCarousel>
      <Swiper autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img src="./assets/images/aboutUs-carousel.jpg" />
          <h2>درباره ترخینه بیشتر بدانید!</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/aboutUs-carousel.jpg" />
          <h2>درباره ترخینه بیشتر بدانید!</h2>
        </SwiperSlide>
      </Swiper>
    </StyledAboutUsCarousel>
  );
}

export default AboutUsCarousel;
