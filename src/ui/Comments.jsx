import styled from "styled-components";
import { Swiper, SwiperSlide } from "./Swiper";
import Comment from "./Comment";
import Container from "./Container";
import Spinner from "./Spinner";
import { useBranchInfo } from "../hooks/useBranchInfo";

const StyledComments = styled.section`
  text-align: center;
  padding: 2rem 0;

  & h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  & swiper-slide {
    width: auto !important;
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    & h2 {
      font-size: 2.4rem;
      margin-bottom: 1.8rem;
    }

    & swiper-container {
      height: 24rem;
    }
  }
`;
function Comments() {
  const { getBranchInfo, isLoading } = useBranchInfo();

  const injectStyles = [
    `
      .swiper-button-next,.swiper-button-prev {
        width: 20px;
        height: 20px;
        color: var(--color-grey-600);
        border: 1px solid var(--color-grey-400);
        border-radius: var(--border-radius-sm);
        background-color: var(--color-white);
        padding: 4px;
        diplay:block;
      }
      .swiper-button-disabled {
        display: none;
      }
      .swiper-pagination {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination-bullet{
        width: 8px;
        height: 8px;
        background-color: var(--color-grey-500);
      }
      .swiper-pagination-bullet-active{
        width: 12px;
        height: 12px;
        background-color: var(--color-primary);
        border: 2px solid var(--color-green-100);
      }
`,
  ];
  const breakpoints = {
    0: {
      navigation: {
        enabled: false,
      },
      pagination: {
        enabled: false,
      },
    },
    1024: {
      navigation: {
        enabled: true,
      },
      pagination: {
        enabled: true,
      },
    },
  };

  if (isLoading) return <Spinner />;
  const [branch] = getBranchInfo;
  return (
    <StyledComments>
      <Container>
        <h2>نظرات کاربران</h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          autoplay={{
            delay: 3000,
          }}
          navigation="true"
          pagination={{
            clickable: true,
          }}
          injectStyles={injectStyles}
          breakpoints={breakpoints}
        >
          {branch?.comments?.map((comment) => (
            <SwiperSlide key={comment.id}>
              <Comment comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </StyledComments>
  );
}

export default Comments;
