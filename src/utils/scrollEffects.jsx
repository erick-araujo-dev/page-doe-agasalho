

export default function addScrollEffects (
  textElementRightSelector,
  textElementLeftSelector,
  textElementLineSelector = null
) { 
    const textElementRight = document.querySelectorAll(textElementRightSelector);
    const textElementLeft = document.querySelectorAll(textElementLeftSelector);
    const textElementLine = document.querySelectorAll(textElementLineSelector);

    function slideInOnScroll() {
      textElementRight.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("slide-in-right");
        }
      });
      textElementLeft.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("slide-in-left");
        }
      });
      textElementLine.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add("slide-in-line");
        }
      });
    }

    window.addEventListener("scroll", slideInOnScroll);

    return () => {
      window.removeEventListener("scroll", slideInOnScroll);
    };
};
  
