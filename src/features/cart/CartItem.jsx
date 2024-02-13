import styled from "styled-components";
import { useDispatch } from "react-redux";
import { formatNumber } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
import { TrashIcon } from "../../assets/svg";

const StyledCartItem = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(odd) {
    background-color: var(--color-grey-100);
  }
  &:nth-child(even) {
    background-color: var(--color-grey-300);
  }

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Price = styled.p`
  font-size: 1rem;
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
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
    font-size: 2rem;
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
function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(item.id));
  }

  function handleDecreaseQuantity() {
    if (item.quantity === 1) return;
    dispatch(decreaseItemQuantity(item.id));
  }
  return (
    <StyledCartItem>
      <div>
        <Title>{item.title}</Title>
        <Price>{formatNumber(item.price)} تومان</Price>
      </div>
      <Quantity>
        <button onClick={handleIncreaseQuantity}>+</button>
        <p>{item.quantity}</p>
        {item.quantity > 1 ? (
          <button onClick={handleDecreaseQuantity}>-</button>
        ) : (
          <TrashIcon onClick={() => dispatch(deleteItem(item.id))} />
        )}
      </Quantity>
    </StyledCartItem>
  );
}

export default CartItem;
