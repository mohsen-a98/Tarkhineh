import styled, { css } from "styled-components";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useDevice from "../../hooks/useDevice";
import { formatNumber } from "../../utils/helpers";
import Button from "../../ui/Button";
import { clearCart, getTotalDiscount, getTotalPrice } from "./cartSlice";
import CartItem from "./CartItem";
import Modal from "../../ui/Modal";
import PopupConfirm from "../../ui/PopupConfirm";
import { WarningIcon, TrashIcon } from "../../assets/svg";

const StyledInvoice = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0;
    font-size: 1.4rem;
    font-weight: 400;
  }

  & > div:not(:nth-of-type(2)) {
    border-top: 1px solid var(--color-grey-400);
  }

  & > button {
    width: 100%;
    margin-top: 1.2rem;
    height: 3.5rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2.4rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
    height: fit-content;
    margin-top: 0;

    & > button {
      margin-top: 1.6rem;
      height: 4rem;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

const SendCost = styled.div`
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: var(--color-warning);
    display: flex;
    gap: 0.4rem;
    font-size: 1rem;
  }
`;

const Cart = styled.div`
  display: none !important;
  border: none !important;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  & > span:last-child {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    display: flex !important;
    border-bottom: 1px solid var(--color-grey-400) !important;
  }
`;

const CartList = styled.ul`
  height: 19.5rem;
  padding: 1.2rem 0;
  overflow-y: scroll;
  display: none;

  ${(props) =>
    props.$isCartList === "true" &&
    css`
      display: block;
    `}
`;

function Invoice({
  cart,
  btnObj,
  isCartList,
  isAddOrder = false,
  onClick = () => {},
}) {
  const dispatch = useDispatch();
  const totalDiscount = useSelector(getTotalDiscount);
  const totalPrice = useSelector(getTotalPrice);
  const navigate = useNavigate();
  const { width } = useDevice();
  const { text, path, icon, iconDir, disabled = true } = btnObj;

  return (
    <StyledInvoice>
      <Cart>
        <span>سبد خرید ({formatNumber(cart.length)})</span>
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
      </Cart>
      {width >= 1024 && (
        <CartList $isCartList={isCartList}>
          {cart?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartList>
      )}
      <div>
        <span>تخفیف محصولات</span>
        <span>{formatNumber(totalDiscount)} تومان</span>
      </div>
      <SendCost>
        <div>
          <span>هزینه ارسال</span>
          <span>{formatNumber(0)} تومان</span>
        </div>
        <p>
          <span>
            <WarningIcon />
          </span>
          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
          محاسبه و به این مبلغ اضافه خواهد شد.
        </p>
      </SendCost>
      <div>
        <span>مبلغ قابل پرداخت</span>
        <span>{formatNumber(totalPrice)} تومان</span>
      </div>
      <Button
        onClick={() => {
          onClick();
          {
            !isAddOrder && navigate(`${path}`);
          }
        }}
        disabled={!disabled || cart.length === 0}
      >
        {iconDir === "right" && icon}
        {text}
        {iconDir === "left" && icon}
      </Button>
    </StyledInvoice>
  );
}

export default Invoice;
