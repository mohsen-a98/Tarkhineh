import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Modal from "./Modal";
import PopupConfirm from "./PopupConfirm";
import useDevice from "../hooks/useDevice";
import { clearCart, getCart } from "../features/cart/cartSlice";
import Position from "../features/cart/Position";
import { ArrowRightIcon, TrashIcon } from "../assets/svg";

const StyledPositionInMobileView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  & > span:nth-of-type(1) svg * {
    fill: var(--color-grey-800);
  }

  span svg {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
  }
  ${(props) =>
    props.$cart_length > 0
      ? css`
          & > span:last-child svg * {
            fill: var(--color-grey-800);
          }
        `
      : css`
          & > span:last-child svg * {
            fill: var(--color-grey-400);
          }
        `}
`;

function PositionInMobileView({
  title,
  isClearCart = false,
  isPositionDesktop = false,
}) {
  const { width } = useDevice();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <>
      {width < 1024 && (
        <StyledPositionInMobileView $cart_length={cart.length}>
          <span onClick={() => navigate(-1)}>
            <ArrowRightIcon />
          </span>
          <h2>{title}</h2>
          {isClearCart ? (
            <Modal>
              <Modal.Open name="clearCart">
                <span>
                  <TrashIcon />
                </span>
              </Modal.Open>
              <Modal.Window name="clearCart">
                <PopupConfirm
                  onClick={() => {
                    dispatch(clearCart());
                    toast.success("سبد خرید شما با موفقیت پاک شد");
                    navigate("/menu");
                  }}
                />
              </Modal.Window>
            </Modal>
          ) : (
            <span></span>
          )}
        </StyledPositionInMobileView>
      )}

      {isPositionDesktop && width >= 1024 && <Position />}
    </>
  );
}

export default PositionInMobileView;
