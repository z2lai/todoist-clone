const toggleHeader = () => {
  const header = document.getElementById('header');
  const headerRect = header.getBoundingClientRect();
  const scrollYCriteria = window.innerHeight - headerRect.height;
  if (window.pageYOffset >= scrollYCriteria) {
    header.classList.add('is-translucent');
    header.classList.remove('is-hidden');
  } else if (window.pageYOffset >= headerRect.height) {
    header.classList.add('is-hidden');
    header.classList.remove('is-translucent');
  } else {
    header.classList.remove('is-translucent');
    header.classList.remove('is-hidden');
  }
};

export default toggleHeader;
