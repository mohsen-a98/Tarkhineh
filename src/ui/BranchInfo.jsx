import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";
import Container from "./Container";
import { LocationIcon, CallIcon, ClockIcon } from "../assets/svg";
import Spinner from "./Spinner";
import { useBranchInfo } from "../hooks/useBranchInfo";

const StyledBranchInfo = styled.div`
  text-align: center;
  color: var(--color-grey-800);

  & h2 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 1.2rem;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & swiper-container {
    height: 17.6rem;
  }
  @media screen and (min-width: 768px) {
    & swiper-container {
      height: 25.6rem;
    }

    & h2 {
      font-size: 2rem;
      margin-bottom: 1.6rem;
    }
  }
  @media screen and (min-width: 1024px) {
    & swiper-container {
      height: 33.6rem;
    }

    & h2 {
      font-size: 2.4rem;
      margin-bottom: 1.8rem;
    }
  }
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 0.8rem;
  padding: 0.8rem;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  width: 30.4rem;
  margin: 0 auto;
  position: relative;
  top: -1rem;
  z-index: 10;
  background-color: var(--color-white);
  line-height: 180%;

  & > * {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  & > address {
    grid-column: 1 / -1;
    font-style: normal;
  }

  & > div:nth-child(2) span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 50rem;
    font-size: 1.4rem;
    row-gap: 1.5rem;
    top: -1.6rem;
    padding: 1.5rem;
    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    & > * {
      gap: 0.8rem;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 71.4rem;
    font-size: 1.6rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    padding: 1.6rem 4.8rem;
    top: -2.5rem;

    & > * {
      flex-direction: column;
    }

    & svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    & > address {
      grid-column: 2 / 3;
    }

    & > div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      & span {
        display: inline-block;
      }
    }
    & > div:last-child {
      grid-column: 3 / 4;
    }
  }
`;
function BranchInfo() {
  const { getBranchInfo, isLoading } = useBranchInfo();
  if (isLoading) return <Spinner />;
  const [branch] = getBranchInfo;
  return (
    <StyledBranchInfo>
      <Container>
        <h2>{branch?.name}</h2>
      </Container>
      <Swiper
        navigation="true"
        injectStyles={[
          `
        .swiper-button-next,.swiper-button-prev {
          width: 24px;
          height: 24px;
          color: var(--color-white);

          @media screen and (min-width: 1024px) {
            width: 48px;
            height: 48px;
            
          }
        }
      `,
        ]}
      >
        <SwiperSlide>
          <img src="./assets/images/branch-carousel.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/branch-carousel.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Info>
        <address>
          <LocationIcon />
          {branch?.address}
        </address>
        <div>
          <CallIcon />
          {branch?.phoneNumber[0]}
          <span>{branch?.phoneNumber[1]}</span>
        </div>
        <div>
          <ClockIcon />
          {branch?.timeActivity}
        </div>
      </Info>
    </StyledBranchInfo>
  );
}

export default BranchInfo;
