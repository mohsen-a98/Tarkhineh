import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import SearchBox from "./SearchBox";

const StyledFoodCategory = styled.section`
  margin-bottom: 4rem;
`;

const CategoryBox = styled.div`
  text-align: center;
  padding: 2.4rem 0;
  color: var(--color-grey-800);

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 4.8rem 0;

    h2 {
      font-size: 2.4rem;
    }
  }
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  row-gap: 6rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (min-width: 768px) {
      width: 100%;
      justify-content: space-around;
      gap: 0;
    }
  }

  & > div > div {
    position: relative;
    width: 15.2rem;
    @media screen and (min-width: 1024px) {
      width: 17.2rem;
    }
    @media screen and (min-width: 1280px) {
      width: 26.2rem;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: var(--color-primary);
      height: 8rem;
      width: inherit;
      z-index: -10;
      border-radius: var(--border-radius-sm);
      bottom: 0;
      right: 0;
      box-shadow: var(--shadow-sm);
      @media screen and (min-width: 1024px) {
        height: 10rem;
      }
      @media screen and (min-width: 1280px) {
        height: 15rem;
      }
    }

    & img {
      transform: translateY(-15px);
      filter: drop-shadow(var(--shadow-md));
      width: 12rem;
      height: 12rem;

      @media screen and (min-width: 1024px) {
        width: 16rem;
        height: 16rem;
      }
      @media screen and (min-width: 1280px) {
        width: 24rem;
        height: 24rem;
      }
    }

    & button {
      color: var(--color-grey-800);
      background-color: var(--color-grey-100);
      position: absolute;
      right: 26%;
      bottom: -16%;
      box-shadow: var(--shadow-md);
      width: 8rem;
      @media screen and (min-width: 1024px) {
        height: 4rem;
        width: 9rem;
        right: 24%;
        font-size: 1.6rem;
      }
      @media screen and (min-width: 1280px) {
        width: 15.5rem;
        height: 4.8rem;
        bottom: -13%;
        right: 20%;
        font-size: 2rem;
      }
    }
  }
`;
function FoodCategory() {
  return (
    <StyledFoodCategory>
      <Container>
        <SearchBox />
        <CategoryBox>
          <h2>منوی رستوران</h2>
          <CategoryItems>
            <div>
              <div>
                <img
                  src="./assets/images/food-category-1.webp"
                  alt="main food"
                  loading="lazy"
                />
                <Button color="white">غذای اصلی</Button>
              </div>
              <div>
                <img
                  src="./assets/images/food-category-2.webp"
                  alt="appetizer"
                  loading="lazy"
                />
                <Button color="white">پیش غذا</Button>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="./assets/images/food-category-3.webp"
                  alt="dessert"
                  loading="lazy"
                />
                <Button color="white" size="sm">
                  دسر
                </Button>
              </div>
              <div>
                <img
                  src="./assets/images/food-category-4.webp"
                  alt="drinks"
                  loading="lazy"
                />
                <Button color="white">نوشیدنی</Button>
              </div>
            </div>
          </CategoryItems>
        </CategoryBox>
      </Container>
    </StyledFoodCategory>
  );
}

export default FoodCategory;
