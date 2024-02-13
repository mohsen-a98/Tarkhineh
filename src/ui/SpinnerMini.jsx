import styled, { css } from "styled-components";
import { SpinnerSvg } from "../assets/svg";

const StyledSpinnerMini = styled.div`
  display: grid;
  place-items: center;
  svg {
    width: 3rem;
    height: 3rem;
  }
  ${(props) =>
    props.$width &&
    css`
      svg {
        width: ${props.$width};
        height: ${props.$width};
      }
    `}
`;

function SpinnerMini({ width }) {
  return (
    <StyledSpinnerMini $width={width}>
      <SpinnerSvg />
    </StyledSpinnerMini>
  );
}

export default SpinnerMini;
