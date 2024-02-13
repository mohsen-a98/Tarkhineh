import styled from "styled-components";
import Button from "./Button";
import Container from "./Container";
import {
  ArrowLeftIcon,
  UserIcon,
  DiagramIcon,
  HomeWifiIcon,
  MenuBoardIcon,
} from "../assets/svg";

const StyledIntroduction = styled.section`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("./assets/images/bg-Introduction-section.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--color-white);
  padding: 1.6rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  & h2 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 180%;
    margin-bottom: 0.8rem;
  }

  & p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 180%;
    text-align: justify;
    margin-bottom: 0.8rem;
  }

  & button {
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 2.5rem 0;
    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.4rem;
    }
    & button {
      height: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 4.8rem 0;
    & > div {
      flex-direction: row;
      justify-content: space-between;
      gap: 23.2rem;
    }

    & h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 2.4rem;
    }

    & p {
      font-size: 2rem;
      margin-bottom: 1.8rem;
    }
    & button {
      font-size: 1.6rem;
      height: 4.8rem;
      padding: 0.8rem 1.6rem;
    }
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.6rem 4.8rem;
  font-size: 1.2rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    & {
      row-gap: 3rem;
    }

    & span {
      font-size: 1.4rem;
    }

    & svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 2.2rem 6.2rem;

    & > div {
      width: max-content;
      justify-self: center;
      align-self: center;
    }

    & span {
      font-size: 1.8rem;
    }

    & svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;
function Introduction() {
  return (
    <StyledIntroduction>
      <Container>
        <div>
          <h2>رستوران‌های زنجیره‌ای ترخینه</h2>
          <p>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <Button variations="outline" color="white">
            اطلاعات بیشتر
            <ArrowLeftIcon />
          </Button>
        </div>
        <Features>
          <div>
            <span>
              <UserIcon />
            </span>
            <span>پرسنلی مجرب و حرفه‌ای</span>
          </div>
          <div>
            <span>
              <DiagramIcon />
            </span>
            <span>کیفیت بالای غذاها</span>
          </div>
          <div>
            <span>
              <HomeWifiIcon />
            </span>
            <span>محیطی دلنشین و آرام</span>
          </div>
          <div>
            <span>
              <MenuBoardIcon />
            </span>
            <span>منوی متنوع</span>
          </div>
        </Features>
      </Container>
    </StyledIntroduction>
  );
}

export default Introduction;
