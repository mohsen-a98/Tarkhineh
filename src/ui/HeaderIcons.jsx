import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import Login from "../features/authentication/Login";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authentication/authSlice";
import PopupConfirm from "./PopupConfirm";
import toast from "react-hot-toast";
import {
  SearchIcon,
  CartIcon,
  UserIcon,
  WalletIcon,
  HeartIcon,
  LocationIcon,
  LogoutIcon,
} from "../assets/svg";

const StyledHeaderIcons = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.8rem;
  font-size: 1.2rem;

  & > a:nth-of-type(2) {
    position: relative;
  }

  & img {
    width: 3rem;
  }

  & svg * {
    fill: var(--color-primary);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > a,
  & > div {
    padding: 0.8rem;
    background-color: var(--color-green-100);
    border-radius: var(--border-radius-sm);
  }

  & > a:first-child {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  & > div {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  color: var(--color-white);
  background-color: var(--color-green-600);
  padding: 0 4px;
  border-radius: 50%;
`;

function HeaderIcons() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartCount = useSelector((state) => state.cart.cart.length);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledHeaderIcons>
      <Link to="#">
        <SearchIcon />
      </Link>
      <Link
        onClick={() => {
          if (!isLoggedIn) return toast.error("برای خرید ابتدا باید وارد شوید");
          navigate("/shoppingCart");
        }}
      >
        <CartIcon />
        {isLoggedIn && <Badge>{cartCount}</Badge>}
      </Link>
      <div>
        <Modal>
          {!isLoggedIn ? (
            <>
              <Modal.Open name="login">
                <UserIcon />
              </Modal.Open>
            </>
          ) : (
            <Dropdown>
              <Dropdown.Button>
                <span>
                  <UserIcon />
                </span>
              </Dropdown.Button>
              <Dropdown.Content>
                <Dropdown.List>
                  <Dropdown.Item onClick={() => navigate("profile")}>
                    <UserIcon /> پروفایل
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("order-tracking")}>
                    <WalletIcon />
                    پیگیری سفارش
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("favorites")}>
                    <HeartIcon />
                    علاقه‌مندی‌ها
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("my-addresses")}>
                    <LocationIcon />
                    آدرس‌های من
                  </Dropdown.Item>

                  <Modal.Open name="confirmLogout">
                    <Dropdown.Item>
                      <LogoutIcon />
                      خروج از حساب
                    </Dropdown.Item>
                  </Modal.Open>
                </Dropdown.List>
              </Dropdown.Content>
            </Dropdown>
          )}

          {/* Login */}
          <Modal.Window
            name="login"
            colorCloseIcon={"var(--color-grey-700)"}
            widthCloseIcon={24}
          >
            <Login />
          </Modal.Window>

          {/* Logout */}
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
      </div>
    </StyledHeaderIcons>
  );
}

export default HeaderIcons;
