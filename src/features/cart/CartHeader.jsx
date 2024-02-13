import styled, { css } from "styled-components";
import useDevice from "../../hooks/useDevice";
import Position from "./Position";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../../public/assets/svg/arrow-right.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Modal from "../../ui/Modal";
import PopupConfirm from "../../ui/PopupConfirm";
import toast from "react-hot-toast";
import TrashIcon from "../../../public/assets/svg/trash.svg?react";

const StyledCartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  & > svg:nth-of-type(1) * {
    fill: var(--color-grey-800);
  }

  & > svg {
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
          & > svg:nth-of-type(2) * {
            fill: var(--color-grey-800);
          }
        `
      : css`
          & > svg:nth-of-type(2) * {
            fill: var(--color-grey-400);
          }
        `}
`;

function CartHeader({ title, isTrashIcon = false }) {
  const { isMobile } = useDevice();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <>
      {isMobile ? (
        <StyledCartHeader $cart_length={cart.length}>
          <ArrowIcon onClick={() => navigate(-1)} />
          <h2>{title}</h2>

          {isTrashIcon ? (
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
        </StyledCartHeader>
      ) : (
        <Position />
      )}
    </>
  );
}

export default CartHeader;
