import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/cartSlice";
import { toggleFavorites } from "../user/userSlice";
import { formatNumber } from "../../utils/helpers";
import {
  HeartIcon,
  HeartFillIcon,
  StarFillIcon,
  StarIcon,
} from "../../assets/svg";

const StyledFoodMenuCard = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-800);
  padding-left: 0.8rem;

  & > img {
    width: 9.2rem;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: calc(var(--border-radius-sm) - 1px);
    border-bottom-right-radius: calc(var(--border-radius-sm) - 1px);
  }

  @media screen and (min-width: 1024px) {
    height: 15.8rem;

    & > img {
      width: 16rem;
    }
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

  & button {
    font-size: 10px;
    font-weight: 400;
    height: 2.8rem;
    width: min(100%, 24.4rem);
    justify-self: end;
    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
      height: 3.5rem;
    }
    @media screen and (min-width: 1280px) {
      font-size: 1.6rem;
    }
  }
`;

const Title = styled.span`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
    font-weight: 600;
    line-height: 180%;
  }
`;

const Discount = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & span:first-child {
    text-decoration: line-through;
    color: var(--color-grey-500);
  }

  & span:last-child {
    color: var(--color-error);
    background-color: var(--color-error-extraLight);
    border-radius: var(--border-radius-md);
    padding: 0 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    & span:first-child {
      font-size: 1.6rem;
    }

    & span:last-child {
      font-size: 1.2rem;
    }
  }
`;

const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 140%;
  }
`;

const Price = styled.span`
  justify-self: flex-end;

  @media screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

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

function FoodMenuCard({ food }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(food.id));
  const isInCart = currentQuantity > 0;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isFavorite = useSelector((state) =>
    state.user.favorites?.find((item) => item.id === food.id)
  );

  function handleFavoriteClick() {
    dispatch(toggleFavorites(food));
  }

  function handleAddToCart() {
    if (!isLoggedIn)
      return toast.error("برای افزودن به سبد خرید باید وارد شوید");
    const foodToAdd = {
      ...food,
      quantity: 1,
      totalPrice:
        (food.discountedPrice > 0 ? food.discountedPrice : food.price) * 1,
    };
    dispatch(addItem(foodToAdd));
  }

  function handleDeleteFromCart() {
    dispatch(deleteItem(food.id));
  }

  return (
    <StyledFoodMenuCard>
      <img src={food.image} alt={food.title} loading="lazy" />
      <FoodCardBody>
        <Title>{food.title}</Title>
        <Discount>
          <span>{formatNumber(food.price)}</span>
          <span>%{formatNumber(food.discountPercent)}</span>
        </Discount>
        <Description>{food.description}</Description>
        <Price>{formatNumber(food.discountedPrice)} تومان</Price>
        <Favorite>
          <span onClick={handleFavoriteClick}>
            {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
          </span>
          <div>
            {Array.from({ length: 5 }, (_, i) =>
              food.rating.rate >= i + 1 ? (
                <StarFillIcon key={i} />
              ) : (
                <StarIcon key={i} />
              )
            )}
          </div>
        </Favorite>
        {!isInCart ? (
          <Button onClick={handleAddToCart}>افزودن به سبد خرید</Button>
        ) : (
          <Button color="red" onClick={handleDeleteFromCart}>
            حذف از سبد خرید
          </Button>
        )}
      </FoodCardBody>
    </StyledFoodMenuCard>
  );
}

export default FoodMenuCard;
