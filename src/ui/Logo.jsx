import styled from "styled-components";
import { LogoIcon } from "../assets/svg";

const StyledLogo = styled.div`
  @media screen and (max-width: 1024px) {
    & > svg {
      width: 10rem;
      height: auto;
    }
  }
`;
function Logo() {
  return (
    <StyledLogo>
      <LogoIcon />
    </StyledLogo>
  );
}

export default Logo;
