import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";

const StyledContactUsCarousel = styled.div`
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

function ContactUsCarousel() {
  return (
    <StyledContactUsCarousel>
      <Swiper autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img
            src="./assets/images/contactUs-carousel.webp"
            alt="carousel"
            loading="lazy"
          />
          <h2>با ترخینه در تماس باشید.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./assets/images/contactUs-carousel.webp"
            alt="carousel"
            loading="lazy"
          />
          <h2>با ترخینه در تماس باشید.</h2>
        </SwiperSlide>
      </Swiper>
    </StyledContactUsCarousel>
  );
}

export default ContactUsCarousel;
