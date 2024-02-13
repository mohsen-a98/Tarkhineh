import { useState } from "react";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import SubMenu from "./SubMenu";
import { BurgerMenuIcon, LogoWhiteIcon } from "../assets/svg";

const Overlay = styled.div`
  &::before {
    content: "";
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px);
    transform: translateX(150%);
    transition: all 0.3s;
    z-index: 99;
  }

  ${(props) =>
    props.open === "open" &&
    css`
      &::before {
        transform: translateX(0);
      }
    `}
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SidebarIcon = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: transparent;
  border: none;

  & > svg {
    max-width: 100%;
    height: fit-content;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  transform: translateX(150%);
  transition: all 0.3s;
  background-color: var(--color-white);
  z-index: 999;

  ${(props) =>
    props.open === "open" &&
    css`
      transform: translateX(0);
    `}
`;

const NavMenu = styled.ul`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 180%;
  list-style: none;
`;
const NavItem = styled.li`
  margin-bottom: 0.8rem;
  &:not(:first-child) {
    padding: 0 1.6rem;
  }

  &:last-child > a {
    border-bottom: none;
  }
`;

const BackImg = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("./assets/images/top-frame.png") no-repeat;
  background-size: cover;
  width: 25.6rem;
  height: 10.4rem;
  position: relative;

  & > span {
    position: absolute;
    top: 3.2rem;
    right: 1.6rem;
    width: 8rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  & > button {
    border: none;
    background-color: transparent;
    color: var(--color-white);
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    font-size: xx-large;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const navData = [
  {
    title: "صفحه اصلی",
    path: "/",
    icon: "./assets/svg/home.svg",
  },

  {
    title: "شعبه",
    path: "branch",
    icon: "./assets/svg/home-hashtag.svg",
    subNav: [
      {
        title: "اکباتان",
        path: "branch",
      },
      {
        title: "چالوس",
        path: "branch",
      },
      {
        title: "اقدسیه",
        path: "branch",
      },
      {
        title: "ونک",
        path: "branch",
      },
    ],
  },
  {
    title: "منو",
    path: "menu",
    icon: "./assets/svg/menu-board.svg",
    subNav: [
      {
        title: "غذای اصلی",
        path: "menu",
      },
      {
        title: "پیش غذا",
        path: "menu",
      },
      {
        title: "دسر",
        path: "menu",
      },
      {
        title: "نوشیدنی",
        path: "menu",
      },
    ],
  },
  {
    title: "اعطای نمایندگی",
    path: "franchise",
    icon: "./assets/svg/franchise.svg",
  },
  {
    title: "درباره ما",
    path: "aboutUs",
    icon: "./assets/svg/profile-2user.svg",
  },
  {
    title: "تماس با ما",
    path: "contactUs",
    icon: "./assets/svg/call-calling.svg",
  },
];

function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  const close = () => setShowNav(false);
  const ref = useOutsideClick(close);

  const handleToggleNav = () => {
    setShowNav((show) => !show);
  };

  return (
    <Overlay open={showNav ? "open" : "close"}>
      <SidebarIcon onClick={handleToggleNav}>
        <BurgerMenuIcon />
      </SidebarIcon>
      <Nav open={showNav ? "open" : "close"} ref={ref}>
        <NavMenu>
          <NavItem>
            <BackImg>
              <span>
                <LogoWhiteIcon />
              </span>
              <button type="button" onClick={handleToggleNav}>
                &times;
              </button>
            </BackImg>
          </NavItem>

          {navData?.map((item, index) => (
            <NavItem key={index}>
              <SubMenu item={item} onClick={handleToggleNav} />
            </NavItem>
          ))}
        </NavMenu>
      </Nav>
    </Overlay>
  );
}

export default Sidebar;
