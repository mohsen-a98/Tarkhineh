import styled from "styled-components";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  width: 88.89%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding: 3.2rem 0;
  }

  @media screen and (min-width: 1280px) {
    width: 85%;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Sidebar />
      <Logo />
      <Navbar />
      <HeaderIcons />
    </StyledHeader>
  );
}

export default Header;
