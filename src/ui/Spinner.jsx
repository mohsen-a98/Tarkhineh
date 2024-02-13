import styled from "styled-components";
import { SpinnerSvg } from "../assets/svg";

const StyledSpinner = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 999;
  top: 0;
  left: 0;

  svg {
    width: 8rem;
    height: 8rem;
    fill: var(--color-primary);
  }

  @media screen and (min-width: 1024px) {
    svg {
      width: 10rem;
      height: 10rem;
    }
  }
`;
function Spinner() {
  return (
    <StyledSpinner>
      <SpinnerSvg />
    </StyledSpinner>
  );
}

export default Spinner;
