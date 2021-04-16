import { animateScroll as scroll, scroller } from 'react-scroll';

export const scrollToTopOfPage = (): void => {
  scroll.scrollToTop({ duration: 500 });
};

export const scrollToTopOfCardList = (): void => {
  scroller.scrollTo('TopOfCardList', {
    smooth: true,
    offset: -10,
    duration: 500,
  });
};
