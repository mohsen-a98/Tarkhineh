import styled from "styled-components";
import { useDispatch } from "react-redux";
import { formatNumber } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
import { TrashIcon, StarIcon, StarFillIcon } from "../../assets/svg";
const StyledCartItemDesktop = styled.div`
  width: 100%;
  height: 15.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-800);
  padding-left: 0.8rem;

  & > img {
    width: 16.9rem;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: calc(var(--border-radius-sm) - 1px);
    border-bottom-right-radius: calc(var(--border-radius-sm) - 1px);
  }
`;

const FoodCardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  column-gap: 8px;
  line-height: 180%;
  width: 100%;
  height: 100%;
  padding: 1.6rem 3.2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 180%;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const Discount = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  order: 1;

  & span:first-child {
    font-size: 1.6rem;
    text-decoration: line-through;
    color: var(--color-grey-500);
  }

  & span:last-child {
    color: var(--color-error);
    background-color: var(--color-error-extraLight);
    border-radius: var(--border-radius-md);
    padding: 0 0.8rem;
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 140%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.span`
  justify-self: flex-end;
  font-size: 1.8rem;
  order: 3;
  width: max-content;
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  order: 2;

  & > span {
    display: flex;
    align-items: center;
  }

  & > div {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1024px) {
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  gap: 0.8rem;
  border: 1px solid var(--color-green-100);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-green-100);
  color: var(--color-primary);
  height: 3.2rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  button {
    color: currentColor;
    border: none;
    background-color: transparent;
    font-size: 2rem;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    * {
      fill: currentColor;
    }
  }
`;

const TrashBox = styled.span`
  justify-self: end;
`;

function CartItemDesktop({ food }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(food.id));
  }

  function handleDecreaseQuantity() {
    if (food.quantity === 1) return;
    dispatch(decreaseItemQuantity(food.id));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(food.id));
  }
  return (
    <StyledCartItemDesktop>
      <img src={food.image} alt={food.title} />
      <FoodCardBody>
        <Title>{food.title}</Title>
        <TrashBox onClick={handleDeleteItem}>
          <TrashIcon />
        </TrashBox>
        <Discount>
          <span>{formatNumber(food.price)}</span>
          <span>%{formatNumber(food.discountPercent)}</span>
        </Discount>
        <Description>{food.description}</Description>
        <Price>{formatNumber(food.discountedPrice)} تومان</Price>
        <Favorite>
          <div>
            {Array.from({ length: 5 }, (_, i) =>
              food.rating.rate >= i + 1 ? (
                <StarFillIcon key={i} />
              ) : (
                <StarIcon key={i} />
              )
            )}
          </div>
          <Quantity>
            {food.quantity > 1 ? (
              <button onClick={handleDecreaseQuantity}>-</button>
            ) : (
              <TrashIcon onClick={handleDeleteItem} />
            )}
            <p>{food.quantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
          </Quantity>
        </Favorite>
      </FoodCardBody>
    </StyledCartItemDesktop>
  );
}

export default CartItemDesktop;
