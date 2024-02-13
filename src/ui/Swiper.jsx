import { useEffect } from "react";
import { useRef } from "react";
import { register } from "swiper/element/bundle";

export function Swiper(props) {
  const swiperRef = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, [rest]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
export function SwiperSlide(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}

// function Carousel() {
//   const swiperElRef = useRef(null);

//   useEffect(() => {
//     const params = {
//       breakpoints: {
//         1024: {
//           slidesPerView: 1,
//           navigation: {
//             enabled: true,
//           },
//         },
//       },
//     };

//     // Assign it to swiper element
//     Object.assign(swiperElRef.current, params);
//     // initialize swiper
//     swiperElRef.current.initialize();
//     // const swiper = new Swiper(swiperElRef.current, params);
//     // return () => {
//     //   swiper.destroy();
//     // };
//   }, []);

//   return (
//     <SwiperC>
//       <swiper-container
//         init="false"
//         ref={swiperElRef}
//         pagination="true"
//         pagination-clickable="true"
//         keyboard="true"
//         // effect="fade"
//         // loop="true"
//       >
//         <swiper-slide>
//           <img src="./assets/images/slider-1.jpg" alt="food" />
//           <div>
//             <Heading as="h6">یک ماجراجویی آشپزی برای تمام حواس</Heading>
//             <Button>سفارش آنلاین غذا</Button>
//           </div>
//         </swiper-slide>

//         <swiper-slide>slide 2</swiper-slide>
//         <swiper-slide>slide 3</swiper-slide>
//       </swiper-container>
//     </SwiperC>
//   );
// }

// export default Carousel;
