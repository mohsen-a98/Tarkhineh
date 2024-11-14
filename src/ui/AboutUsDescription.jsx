import styled from "styled-components";
import Container from "./Container";
import { HomeWifiIcon } from "../assets/svg";

const StyledAboutUsDescription = styled.section`
  & > div {
    padding: 1.6rem 0;
  }

  & h2 {
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }

  & img {
    width: 15.2rem;
    height: 12rem;
    border: 1px solid var(--color-black);
    border-radius: var(--border-radius-sm);
    object-fit: cover;
    float: left;
    margin-right: 1.6rem;
  }

  & p {
    text-align: justify;
    font-size: 1rem;
    font-weight: 400;
    line-height: 180%;
    color: var(--color-grey-700);
  }

  @media screen and (min-width: 768px) {
    & > div {
      padding: 3rem 0;
    }

    & h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & img {
      width: 32.6rem;
      height: 25.6rem;
      margin-right: 2rem;
    }

    & p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    & > div {
      padding: 4.8rem 0;
    }

    & h2 {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }

    & img {
      width: 37.6rem;
      height: 30.6rem;
      border-radius: var(--border-radius-md);
      margin-right: 2rem;
    }

    & p {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1280px) {
    & img {
      width: 60rem;
      height: 49.2rem;
      margin-right: 2.4rem;
    }
  }
`;

const Features = styled.div`
  padding: 1.2rem 0;
  background-color: var(--color-grey-300);

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  & > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    width: 6.8rem;
    text-align: center;

    & span {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-grey-700);
    }
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;

    & * {
      fill: var(--color-grey-800);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2.2rem 0;

    & > div > div {
      gap: 1rem;
      width: 12.6rem;

      & span {
        font-size: 1.4rem;
      }
    }

    & svg {
      width: 2.4rem;
      height: 2.4rem;

      & * {
        fill: var(--color-grey-800);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 3.2rem 0;

    & > div > div {
      gap: 1.6rem;
      width: 18.4rem;

      & span {
        font-size: 1.8rem;
      }
    }

    & svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;

function AboutUsDescription() {
  return (
    <StyledAboutUsDescription>
      <Container>
        <div>
          <h2>درباره ما</h2>
          <img
            src="./assets/images/aboutUs.webp"
            loading="lazy"
            alt="about us"
          />
          <p>
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت
            جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا
            در طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه داشته و حتی
            با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته
            است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و
            برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
      </Container>
      <Features>
        <Container>
          <div>
            <HomeWifiIcon />
            <span>پرسنلی مجرب و حرفه‌ای</span>
          </div>
          <div>
            <HomeWifiIcon />
            <span>کیفیت بالای غذاها</span>
          </div>
          <div>
            <HomeWifiIcon />
            <span>محیطی دلنشین و آرام</span>
          </div>
          <div>
            <HomeWifiIcon />
            <span>منوی متنوع</span>
          </div>
        </Container>
      </Features>
    </StyledAboutUsDescription>
  );
}

export default AboutUsDescription;
