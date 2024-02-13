import styled, { css } from "styled-components";
import { ArrowLeftIcon, TickSquareIcon } from "../assets/svg";

const StyledChips = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0 0.8rem;
  border-radius: var(--border-radius-md);
  width: fit-content;
  font-size: 1rem;
  font-weight: 400;
  line-height: 180%;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;

  ${(props) =>
    props.$active === "true" &&
    css`
      color: var(--color-primary);
      background-color: var(--color-green-100);

      & > svg {
        width: 2rem;
        height: 2rem;
      }
    `}

  ${(props) =>
    props.$active === "false" &&
    css`
      color: var(--color-grey-800);
      background-color: var(--color-grey-300);
      & > svg {
        width: 1.2rem;
        height: 1.2rem;
      }

      & > svg * {
        fill: var(--color-grey-800);
      }
    `}

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

function Chips({ children, active = "false", onClick }) {
  return (
    <StyledChips $active={active} onClick={onClick}>
      {active === "true" && <TickSquareIcon />} {children}{" "}
      {active === "false" && <ArrowLeftIcon />}
    </StyledChips>
  );
}

export default Chips;
