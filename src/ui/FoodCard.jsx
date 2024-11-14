import styled from "styled-components";
import Button from "./Button";
import HeartIcon from "../../public/assets/svg/heart.svg?react";
import HeartIconFill from "../../public/assets/svg/heart-fill.svg?react";
import { formatNumber } from "../utils/helpers";
import { useState } from "react";

const StyledFoodCard = styled.div`
  width: 17rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);

  & > img {
    width: 100%;
    height: 11rem;
    object-fit: cover;

    border-top-left-radius: calc(var(--border-radius-sm) - 1px);
    border-top-right-radius: calc(var(--border-radius-sm) - 1px);
  }

  @media screen and (min-width: 1024px) {
    width: 28.8rem;

    & > img {
      height: 25.6rem;
    }
  }
`;

const FoodCardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  padding: 0.8rem;
  padding-top: 0;
  text-align: center;
  color: var(--color-grey-800);

  & h3 {
    grid-column: 1 / -1;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 180%;
  }
  & button {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 768px) {
    & h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 1.6rem;
    padding-top: 0;
    row-gap: 1.6rem;
    & h3 {
      font-size: 2rem;
      font-weight: 600;
    }
    & button {
      padding: 0.8rem 1.6rem;
      font-size: 1.6rem;
      font-weight: 500;
      height: 4rem;
    }
  }
`;

const Discount = styled.div`
  justify-self: flex-end;
  & span:first-child {
    color: var(--color-error);
    background-color: var(--color-error-extraLight);
    border-radius: var(--border-radius-md);
    padding: 0 0.8rem;
    margin-right: 0.4rem;
  }

  & span:last-child {
    color: var(--color-grey-500);
    text-decoration: line-through;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Rating = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & img {
    width: 1.6rem;
    height: 1.6rem;
  }

  & span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    & img {
      width: 1.8rem;
      height: 1.8rem;
    }

    & span {
      font-size: 1.6rem;
    }
  }
`;

const Heart = styled.span`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media screen and (min-width: 768px) {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  & span {
    display: none;
    color: var(--color-grey-500);
    @media screen and (min-width: 1024px) {
      display: inline-block;
    }
  }
`;

const Price = styled.span`
  justify-self: flex-end;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;
function FoodCard({ food }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <StyledFoodCard>
      <img src={food.image} alt={food.title} loading="lazy" />
      <FoodCardBody>
        <h3>{food.title}</h3>
        <Heart
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? <HeartIconFill /> : <HeartIcon />}
          <span>افزودن به علاقمندی‌ها</span>
        </Heart>
        <Discount>
          <span>%{formatNumber(food.discountPercent)}</span>
          <span>{formatNumber(food.price)}</span>
        </Discount>
        <Rating>
          <img src={`./assets/svg/Rate-${food.rating.rate}.svg`} alt="rate" />
          <span>{formatNumber(food.rating.rate)}</span>
        </Rating>
        <Price>{formatNumber(food.discountedPrice)} تومان</Price>
        <Button>افزودن به سبد خرید</Button>
      </FoodCardBody>
    </StyledFoodCard>
  );
}

export default FoodCard;
