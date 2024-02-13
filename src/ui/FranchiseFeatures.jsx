import styled from "styled-components";
import Container from "./Container";
import { BankIcon, EmptyWalletIcon, ChartIcon, BookIcon } from "../assets/svg";

const StyledFranchiseFeatures = styled.section`
  padding: 2rem 0;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1.5rem;
    justify-items: center;
  }

  @media screen and (min-width: 768px) {
    padding: 4.8rem 0;
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 18.4rem);
`;

const BoxIcon = styled.span`
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  padding: 1.5rem;
  width: 7rem;
  height: 7rem;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1024px) {
    border-width: 4px;
    padding: 3rem;
    width: 14rem;
    height: 14rem;
  }
`;

const Title = styled.span`
  font-size: 1.4rem;
  text-align: center;
  line-height: 180%;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
function FranchiseFeatures() {
  return (
    <StyledFranchiseFeatures>
      <Container>
        <Feature>
          <BoxIcon>
            <BankIcon />
          </BoxIcon>
          <Title>بیش از 20 شعبه فعال در سراسر کشور</Title>
        </Feature>

        <Feature>
          <BoxIcon>
            <EmptyWalletIcon />
          </BoxIcon>
          <Title>تسهیلات راه‌اندازی رستوران و تجهیز آن</Title>
        </Feature>

        <Feature>
          <BoxIcon>
            <ChartIcon />
          </BoxIcon>
          <Title>طرح‌های تشویقی ارتقای فروش</Title>
        </Feature>

        <Feature>
          <BoxIcon>
            <BookIcon />
          </BoxIcon>
          <Title>اعطای دستورالعمل پخت غذاها</Title>
        </Feature>
      </Container>
    </StyledFranchiseFeatures>
  );
}

export default FranchiseFeatures;
