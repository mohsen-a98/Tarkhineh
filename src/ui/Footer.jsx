import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { InstagramIcon, TwitterIcon, TelegramIcon } from "../assets/svg";

const StyledFooter = styled.footer`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("./assets/images/bg-footer.webp"), no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  color: var(--color-white);
  padding: 1.8rem 2rem;
  font-size: 1.4rem;
  font-weight: 400;

  & h5 {
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    font-weight: 400;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    place-items: center;
  }

  @media screen and (min-width: 1024px) {
    place-items: normal;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 2.4rem;
    padding: 3.2rem 10.8rem;
    font-size: 1.6rem;
    font-weight: 500;

    & h5 {
      margin-bottom: 2.5rem;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

const SectionEasyAccess = styled.section`
  grid-column: span 2 / span 2;
  @media screen and (min-width: 1024px) {
    grid-column: span 3 / span 3;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    padding-right: 0.8rem;

    @media screen and (min-width: 1024px) {
      gap: 2rem;
    }

    & > ul {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      list-style: none;
      @media screen and (min-width: 1024px) {
        gap: 2rem;

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }
`;

const SectionBranches = styled.section`
  grid-column: span 2 / span 2;
  @media screen and (min-width: 1024px) {
    grid-column: span 3 / span 3;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    padding-right: 0.8rem;

    @media screen and (min-width: 1024px) {
      gap: 2rem;
    }
  }
`;

const SectionForm = styled.section`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    grid-column: span 6 / span 6;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1.2rem 2.6rem;
  color: var(--color-grey-100);
  font-size: 1.4rem;
  font-weight: 400;
  padding-right: 0.8rem;

  & input {
    grid-column: 1 / span 3;
    background-color: transparent;
    text-align: right;
    padding-right: 1.6rem;
    border: 1px solid var(--color-grey-700);
    border-radius: var(--border-radius-sm);

    height: 4rem;
    &::placeholder {
      color: var(--color-grey-100);
    }
  }

  & textarea {
    grid-area: 1 / 4 / 4 / 7;
    border: 1px solid var(--color-grey-700);
    border-radius: var(--border-radius-sm);
    background-color: transparent;
    padding: 1.4rem 1.6rem;
    resize: none;
    &::placeholder {
      color: var(--color-grey-100);
    }
  }

  & button {
    grid-area: 4/5/5/7;
    justify-content: center;
    color: var(--color-grey-100);
    border-color: var(--color-grey-700);
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <SectionEasyAccess>
        <h5>دسترسی آسان</h5>
        <ul>
          <li>
            <Link to="/faq">پرسش‌های متداول</Link>
          </li>
          <li>
            <Link to="/rules">قوانین ترخینه</Link>
          </li>
          <li>
            <Link to="/privacy">حریم خصوصی</Link>
          </li>
          <ul>
            <li>
              <Link>
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link>
                <TelegramIcon />
              </Link>
            </li>
          </ul>
        </ul>
      </SectionEasyAccess>
      <SectionBranches>
        <h5>شعبه‌های ترخینه</h5>
        <ul>
          <li>
            <Link to="/branch">شعبه اکباتان</Link>
          </li>
          <li>
            <Link to="/branch">شعبه چالوس</Link>
          </li>
          <li>
            <Link to="/branch">شعبه اقدسیه</Link>
          </li>
          <li>
            <Link to="/branch">شعبه ونک</Link>
          </li>
        </ul>
      </SectionBranches>
      <SectionForm>
        <h5>پیام به ترخینه</h5>
        <Form>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="نام و نام خانوادگی"
          />
          <input type="tel" name="phone" id="phone" placeholder="شماره تماس" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="آدرس ایمیل (اختیاری)"
          />
          <textarea
            name="textarea"
            id="textarea"
            placeholder="پیام شما"
          ></textarea>

          <Button color="white" size="sm" variations="outline">
            ارسال پیام
          </Button>
        </Form>
      </SectionForm>
    </StyledFooter>
  );
}

export default Footer;
