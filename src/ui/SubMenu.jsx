import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { ArrowDownIcon } from "../assets/svg";

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: var(--color-black);
  border-bottom: 1px solid var(--color-grey-400);
  padding-bottom: 0.4rem;

  ${(props) =>
    props.open === "open" &&
    css`
      & > button {
        transform: rotate(180deg);
      }
    `}

  &.active {
    color: var(--color-primary);
    font-weight: 700;
  }

  & > img {
    width: 1.8rem;
    height: 1.8rem;
  }

  & > button {
    margin-right: auto;
    border: none;
    background-color: transparent;

    svg * {
    }
  }
`;

const SubNav = styled.ul`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 180%;
  list-style: circle;
`;

const SubItem = styled.li`
  margin: 0.8rem 1.6rem;
  padding-bottom: 0.5rem;

  & .active {
    color: var(--color-primary);
  }

  & > a {
    color: var(--color-black);
    text-decoration: none;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-400);
  }
`;

function SubMenu({ item, onClick }) {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <SidebarLink
        to={item.path}
        open={subNav ? "open" : "close"}
        onClick={(e) => {
          if (item.subNav) {
            e.preventDefault();
            showSubNav();
          }
          if (!item.subNav) {
            onClick();
          }
        }}
      >
        <img src={item.icon} alt={item.title} />
        <span>{item.title}</span>
        {item.subNav && (
          <button onClick={item.subNav && showSubNav}>
            <ArrowDownIcon />
          </button>
        )}
      </SidebarLink>
      {subNav && (
        <SubNav>
          {item.subNav.map((item, index) => (
            <SubItem key={index}>
              <Link to={item.path} onClick={onClick}>
                {item.title}
              </Link>
            </SubItem>
          ))}
        </SubNav>
      )}
    </>
  );
}

export default SubMenu;
