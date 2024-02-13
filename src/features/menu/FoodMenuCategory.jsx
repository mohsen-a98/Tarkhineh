import styled from "styled-components";
import FoodMenuCard from "./FoodMenuCard";

const StyledFoodMenuCategory = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2.4rem;

  & > h2 {
    align-self: flex-start;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 140%;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    & > h2 {
      grid-column: 1 / -1;
    }
  }

  @media screen and (min-width: 1024px) {
    & > h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
`;

function FoodMenuCategory({ title, foods }) {
  return (
    <StyledFoodMenuCategory>
      <h2>{title}</h2>
      {foods?.map((item) => (
        <FoodMenuCard food={item} key={item.id} />
      ))}
    </StyledFoodMenuCategory>
  );
}

export default FoodMenuCategory;
