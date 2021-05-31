import SimpleBar from 'simplebar';

const addScrollbar = (elementId) => {
  const simpleBar = new SimpleBar(document.getElementById(elementId));
  const simpleBarContent = simpleBar.getScrollElement();
  const scrollChevrons = simpleBarContent.getElementsByClassName(
    'js-scroll-chevron'
  );
  if (!scrollChevrons) return;
  
  if (scrollChevrons.length > 1) {
    const hideScrollChevrons = function () {
      if (simpleBarContent.scrollTop >= 200) {
        scrollChevrons.forEach((el) => {
          el.style.animationIterationCount = '1';
        });
        simpleBarContent.removeEventListener('scroll', hideScrollChevrons);
      }
    };
    simpleBarContent.addEventListener('scroll', hideScrollChevrons);
  }
};

export default addScrollbar;
