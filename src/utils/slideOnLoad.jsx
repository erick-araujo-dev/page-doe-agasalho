import React, { useEffect } from 'react';

const SlideOnLoad = (
    textElementRightSelector,
    textElementLeftSelector = null) => {

    const textElementRight = document.querySelectorAll(textElementRightSelector);
    const textElementLeft = document.querySelectorAll(textElementLeftSelector);

    const slideIn = () => {
      textElementRight.forEach((element) => {
        const slideOffset =
          element.getBoundingClientRect().top + window.scrollY;
        if (window.pageYOffset > slideOffset - window.innerHeight + 100) {
          element.classList.add("slide-in-right");
        }
      });
      textElementLeft.forEach((element) => {
        const slideOffset =
          element.getBoundingClientRect().top + window.scrollY;
        if (window.pageYOffset > slideOffset - window.innerHeight + 100) {
          element.classList.add("slide-in-left");
        }
      });
    };

    window.addEventListener('scroll', slideIn);
    slideIn();

    return () => {
      window.removeEventListener('scroll', slideIn);
    };
  
};

export default SlideOnLoad;