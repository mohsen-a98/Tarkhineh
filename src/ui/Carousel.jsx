import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const StyledSwiper = styled.div`
  height: 18rem;

  ${(props) =>
    props.$includeButton === "false" &&
    css`
      & button {
        display: none;
      }
    `}

  & swiper-container {
    width: 100%;
    height: 100%;
  }

  & swiper-slide {
    text-align: center;
    position: relative;

    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 140%;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.3);
    }

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-green-100);
      width: 100%;
      display: grid;
      place-items: center;
      gap: 0.8rem;
    }
  }

  @media screen and (min-width: 768px) {
    swiper-slide {
      div {
        gap: 1.6rem;
      }

      h3 {
        font-size: 2.4rem;
      }

      button {
        padding: 0.8rem 1.6rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: 33.6rem;

    swiper-slide {
      h3 {
        font-size: 4rem;
      }

      button {
        border-radius: 8px;
        width: 18.4rem;
        height: 4rem;
        font-size: 1.6rem;
      }

      & > div {
        gap: 4rem;
      }
    }
  }
`;

function Carousel({ includeButton }) {
  const navigate = useNavigate();
  const breakpoints = {
    0: {
      navigation: {
        enabled: false,
      },
    },
    1024: {
      navigation: {
        enabled: true,
      },
    },
  };

  const injectStyles = `
    .swiper-button-next,
    .swiper-button-prev {
      width: 2rem;
      height: 2rem
      background-color: transparent;
      color: var(--color-white);
    }
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination-bullet{
      width: 5px;
      height: 5px;
      background-color: var(--color-grey-500);
    }
    .swiper-pagination-bullet-active{
      width: 10px;
      height: 10px;
      background-color: var(--color-primary);
      border: 2px solid var(--color-green-100);
    }`;

  return (
    <StyledSwiper $includeButton={includeButton}>
      <Swiper
        pagination="true"
        navigation="true"
        autoplay={{
          delay: 5000,
        }}
        breakpoints={breakpoints}
        injectStyles={[injectStyles]}
      >
        <SwiperSlide>
          <img src="./assets/images/slider-1.jpg" alt="food" />
          <div>
            <h3>یک ماجراجویی آشپزی برای تمام حواس</h3>
            <Button onClick={() => navigate("/menu")}>سفارش آنلاین غذا</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/slider-2.jpg" alt="food" />
          <div>
            <h3>طعم بی‌نظیر طبیعت!</h3>
            <Button onClick={() => navigate("/menu")}>سفارش آنلاین غذا</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/slider-3.jpg" alt="food" />
          <div>
            <h3>لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!</h3>
            <Button onClick={() => navigate("/menu")}>سفارش آنلاین غذا</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
}
export default Carousel;
