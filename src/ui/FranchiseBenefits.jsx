import styled from "styled-components";
import Container from "./Container";
import { RectangleIcon } from "../assets/svg";

const StyledFranchiseBenefits = styled.section`
  text-align: center;

  & > div {
    padding: 2.4rem 0;
    border-top: 1px solid var(--color-grey-400);
    border-bottom: 1px solid var(--color-grey-400);
  }

  & h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
  @media screen and (min-width: 1024px) {
    & h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }

    & > div {
      padding: 4.8rem 0;
    }
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  & p {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1024px) {
    & p {
      font-size: 2rem;
    }
  }
`;
function FranchiseBenefits() {
  const benefits = [
    "استفاده از برند شناخته شده ترخینه",
    "مشاوره در امور حقوقی، مالی و مالیاتی",
    "به حداقل رساندن ریسک سرمایه گذاری",
    "پشتیبانی بازاریابی و منابع انسانی",
    "تسریع روند بازگشت سرمایه",
    "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    "مشاوره های تخصصی جهت مدیریت رستوران",
    "طرح های تشویقی برای ارتقا فروش",
  ];
  return (
    <StyledFranchiseBenefits>
      <Container>
        <h2>مزیت دریافت نمایندگی</h2>
        <Benefits>
          {benefits.map((benefit, i) => (
            <Benefit key={i}>
              <RectangleIcon />
              <p>{benefit}</p>
            </Benefit>
          ))}
        </Benefits>
      </Container>
    </StyledFranchiseBenefits>
  );
}

export default FranchiseBenefits;
