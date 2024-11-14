import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";

const StyledFranchiseCarousel = styled.section`
  height: 17.6rem;

  & swiper-container {
    height: 100%;
  }

  & swiper-slide {
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

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.5);
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

function FranchiseCarousel() {
  return (
    <StyledFranchiseCarousel>
      <Swiper autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img src="./assets/images/bg-franchise.webp" />
          <h2>همین الان به خانواده بزرگ ترخینه بپیوندید!</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/bg-franchise.webp" />
          <h2>همین الان به خانواده بزرگ ترخینه بپیوندید!</h2>
        </SwiperSlide>
      </Swiper>
    </StyledFranchiseCarousel>
  );
}

export default FranchiseCarousel;
