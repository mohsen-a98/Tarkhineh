import styled from "styled-components";
import Button from "./Button";
import FavoriteFillIcon from "../../public/assets/svg/heart-fill.svg?react";
import { formatNumber } from "../utils/helpers";
import useDevice from "../hooks/useDevice";
import StarIconFill from "../../public/assets/svg/star-fill.svg?react";
import StarIcon from "../../public/assets/svg/star.svg?react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getCurrentQuantityById,
} from "../features/cart/cartSlice";
import { toggleFavorites } from "../features/user/userSlice";

const StyledFavoriteCard = styled.div`
  width: 15.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);

  & > img {
    width: 100%;
    height: 10.4rem;
    object-fit: cover;
    border-top-left-radius: calc(var(--border-radius-sm) - 1px);
    border-top-right-radius: calc(var(--border-radius-sm) - 1px);
  }

  & > div {
    padding: 0.8rem;
    font-size: 1.2rem;
    color: var(--color-grey-800);

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & > div:first-child {
      margin-bottom: 0.8rem;
    }
  }

  button {
    width: 100%;
    margin-top: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    width: 27.7rem;

    img {
      height: 14rem;
    }

    & > div {
      padding: 1.6rem;

      & > div:first-child {
        margin-bottom: 2.4rem;
      }
    }

    button {
      margin-top: 2.4rem;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.8rem 1.6rem;
      height: 4rem;
    }
  }
`;

const Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const HeartIcon = styled.span`
  @media screen and (min-width: 1024px) {
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  span {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Price = styled.span`
  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;
function FavoriteCard({ item }) {
  const { width } = useDevice();
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(item.id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const foodToAdd = {
      ...item,
      quantity: 1,
      totalPrice:
        (item.discountedPrice > 0 ? item.discountedPrice : item.price) * 1,
    };
    dispatch(addItem(foodToAdd));
  }

  function handleDeleteFromCart() {
    dispatch(deleteItem(item.id));
  }

  function handleDeleteFromFavorites() {
    dispatch(toggleFavorites(item));
  }

  return (
    <StyledFavoriteCard>
      <img src={item.image} alt={item.title} />
      <div>
        <div>
          <Title>{item.title}</Title>
          <HeartIcon onClick={handleDeleteFromFavorites}>
            <FavoriteFillIcon />
          </HeartIcon>
        </div>
        <div>
          <Rating>
            {width < 1024 ? (
              <>
                <img
                  src={`./assets/svg/Rate-${item.rating.rate}.svg`}
                  alt="rate"
                />
                <span>{formatNumber(item.rating.rate)}</span>
              </>
            ) : (
              <span>
                {Array.from({ length: 5 }, (_, i) =>
                  item.rating.rate >= i + 1 ? (
                    <StarIconFill key={i} />
                  ) : (
                    <StarIcon key={i} />
                  )
                )}
              </span>
            )}
          </Rating>
          <Price>{formatNumber(item.price)} تومان</Price>
        </div>
        {!isInCart ? (
          <Button onClick={handleAddToCart}>افزودن به سبد خرید</Button>
        ) : (
          <Button color="red" onClick={handleDeleteFromCart}>
            حذف از سبد خرید
          </Button>
        )}
      </div>
    </StyledFavoriteCard>
  );
}

export default FavoriteCard;
