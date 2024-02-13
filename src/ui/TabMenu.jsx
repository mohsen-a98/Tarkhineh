import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

const StyledTabMenu = styled.div`
  background-color: var(--color-grey-300);
  padding: 1rem 0;

  & ul {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    list-style: none;
  }

  & a {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 180%;
    color: var(--color-grey-700);
    text-decoration: none;
  }

  & a.active {
    color: var(--color-primary);
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 1.8rem;
  }

  @media screen and (min-width: 768px) {
    padding: 1.2rem 0;

    & ul {
      gap: 2.4rem;
    }

    & a {
      font-size: 1.6rem;
    }

    & a.active {
      font-size: 1.7rem;
      text-underline-offset: 2.1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 1.4rem 0;

    & ul {
      gap: 3.2rem;
    }

    & a {
      font-size: 2rem;
      font-weight: 400;
    }

    & a.active {
      font-size: 2rem;
      font-weight: 700;
      text-underline-offset: 2.4rem;
    }
  }
`;

function TabMenu({ items, defaultActiveIndex = -1 }) {
  const [active, setActive] = useState(defaultActiveIndex);
  const { pathname } = useLocation();

  return (
    <StyledTabMenu>
      <Container>
        <ul>
          {items?.map((item, index) => (
            <li key={index} onClick={() => setActive(index)}>
              <Link
                to={item.path || ""}
                className={`${
                  active === index || item.path === pathname ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </StyledTabMenu>
  );
}

export default TabMenu;
