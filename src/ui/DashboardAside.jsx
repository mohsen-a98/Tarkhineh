import styled from "styled-components";
import UserIcon from "../../public/assets/svg/user-icon.svg?react";
import WalletIcon from "../../public/assets/svg/outline-wallet.svg?react";
import HeartIcon from "../../public/assets/svg/heart.svg?react";
import LocationIcon from "../../public/assets/svg/location.svg?react";
import LogoutIcon from "../../public/assets/svg/outline-logout.svg?react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import PopupConfirm from "./PopupConfirm";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authentication/authSlice";

const StyledDashboardAside = styled.aside`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    padding: 1.6rem 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 28.8rem;
    border: 1px solid var(--color-grey-400);
    border-radius: var(--border-radius-md);
    height: fit-content;

    & > div {
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--color-grey-700);
      display: flex;
      align-items: center;
      gap: 2.5rem;

      img {
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 50%;
        object-fit: cover;
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        align-items: center;
        color: var(--color-grey-800);
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 0.8rem;

      li {
        color: var(--color-grey-800);

        &:last-of-type {
          color: var(--color-error);
        }
      }

      a {
        padding-right: 0.6rem;
        height: 3rem;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        text-decoration: none;
        color: currentColor;
        font-size: 1.4rem;
        font-weight: 400;

        &.active {
          color: var(--color-primary);
          font-size: 1.6rem;
          border-right: 2px solid currentColor;
          border-radius: 4px 0 0 4px;

          svg {
            width: 2rem;
            height: 2rem;
          }
        }
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
        & * {
          fill: currentColor;
        }
      }
    }
  }
`;

function DashboardAside() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <StyledDashboardAside>
      <div>
        <img src="./assets/images/user-avatar.jpg" alt="user avatar" />
        <div>
          <h3>{user.name}</h3>
          <p>{user.phone}</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/profile">
            <UserIcon />
            <span>پروفایل</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-tracking">
            <WalletIcon />
            <span>پیگیری سفارشات</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <HeartIcon />
            <span>علاقه‌مندی‌ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-addresses">
            <LocationIcon />
            <span>آدرس های من</span>
          </NavLink>
        </li>
        <Modal>
          <Modal.Open name="confirmLogout">
            <li>
              <a>
                <LogoutIcon />
                <span>خروج</span>
              </a>
            </li>
          </Modal.Open>
          <Modal.Window
            name="confirmLogout"
            colorCloseIcon={"var(--color-grey-700)"}
            widthCloseIcon={24}
          >
            <PopupConfirm
              type="account"
              onClick={() => {
                dispatch(logout());
                toast.success("خروج از حساب با موفقیت انجام شد");
              }}
            />
          </Modal.Window>
        </Modal>
      </ul>
    </StyledDashboardAside>
  );
}

export default DashboardAside;
