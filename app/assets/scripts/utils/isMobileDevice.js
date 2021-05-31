function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1 ||
    !window.matchMedia('(min-width: 768px)').matches
  );
}

export default isMobileDevice;
