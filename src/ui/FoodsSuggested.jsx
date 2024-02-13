import styled from "styled-components";
import Container from "./Container";
import SearchBox from "./SearchBox";
import FoodCard from "./FoodCard";
import Spinner from "./Spinner";
import { Swiper, SwiperSlide } from "./Swiper";
import Button from "./Button";
import { NoteIcon } from "../assets/svg";
import { useFoods } from "../features/menu/useFoods";

const StyledFoodsSuggested = styled.div`
  padding: 2.4rem 0;

  & h2 {
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 140%;
  }

  & button {
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    & h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
    & button {
      padding: 0.8rem 1.6rem;
      height: 4rem;
      gap: 0.8rem;
    }
  }
`;

const SpecialOffer = styled.div`
  margin: 2.4rem 0;

  @media screen and (min-width: 1024px) {
    margin-bottom: 4.8rem;
  }
`;

const PopularFoods = styled.div`
  margin-bottom: 2.4rem;
  padding: 1.4rem 0 2.4rem 0;
  background-color: var(--color-shade-200);

  & h2 {
    color: var(--color-white);
  }
  @media screen and (min-width: 1024px) {
    padding: 2.4rem 0 4rem 0;
    margin-bottom: 4.8rem;
  }
`;

const NonIranianFood = styled.div`
  margin-bottom: 1.2rem;
  @media screen and (min-width: 1024px) {
    margin-bottom: 2.4rem;
  }
`;

function FoodsSuggested() {
  const { isLoading, foods } = useFoods();
  const foodsTest = foods?.slice(0, 10);

  const injectStyles = [
    `
    ::slotted(swiper-slide) {
    width: 168px;
    }
    @media screen and (min-width: 1024px) {
      ::slotted(swiper-slide) {
      width: 288px;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      display:block;
      width: 3.2rem;
      height: 3.2rem;
      color: var(--color-grey-600);
      background-color: var(--color-white);
      border: 1px solid var(--color-grey-400);
      border-radius: var(--border-radius-md);
      padding: 4px;
      
    }

    .swiper-button-disabled {
      display: none;
    }
`,
  ];

  const SwiperProps = {
    slidesPerView: "auto",
    spaceBetween: "16",
    injectStyles: injectStyles,
    navigation: true,
    breakpoints: {
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
    },
  };

  if (isLoading) return <Spinner />;

  return (
    <StyledFoodsSuggested>
      <Container>
        <SearchBox />
      </Container>

      <SpecialOffer>
        <Container>
          <h2>پیشنهاد ویژه</h2>
          <Swiper {...SwiperProps}>
            {foodsTest?.map((food) => (
              <SwiperSlide key={food.id}>
                <FoodCard food={food} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </SpecialOffer>

      <PopularFoods>
        <Container>
          <h2>غذاهای محبوب</h2>
          <Swiper {...SwiperProps}>
            {foodsTest?.map((food) => (
              <SwiperSlide key={food.id}>
                <FoodCard food={food} />
              </SwiperSlide>
            ))}
          </Swiper>{" "}
        </Container>
      </PopularFoods>

      <NonIranianFood>
        <Container>
          <h2>غذاهای غیرایرانی</h2>
          <Swiper {...SwiperProps}>
            {foodsTest?.map((food) => (
              <SwiperSlide key={food.id}>
                <FoodCard food={food} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </NonIranianFood>
      <Button variations="outline" color="primary">
        <NoteIcon />
        مشاهده منوی کامل
      </Button>
    </StyledFoodsSuggested>
  );
}

export default FoodsSuggested;
