const pageLoader = document.querySelector('.loader');
const logo = document.querySelector('.logo');
const leadBlock = document.querySelector('.lead');
const desktopMedia = window.matchMedia('(min-width: 1024px)').matches;
// const tabletMedia = window.matchMedia("(min-width: 768px)").matches;

const keyCode = {
  ENTER: 'Enter',
};

const animationClass = {
  LOADER_INACTIVE: 'loader--inactive',
  LOADER_HIDDEN: 'loader--hidden',
  LOGO_ACTIVE: 'logo--active',
  LEAD_LOADED: 'lead--loaded',
};

const showLeadBlock = () => {

};

const hiddenLoaderAfterTimeout = () => {
  pageLoader.classList.add(animationClass.LOADER_HIDDEN);
};

const activateDesktopPageHandler = (evt) => {
  if (evt.key === keyCode.ENTER) {
    pageLoader.classList.add(animationClass.LOADER_INACTIVE);
    logo.classList.remove(animationClass.LOGO_ACTIVE);
    leadBlock.classList.add(animationClass.LEAD_LOADED);
    setTimeout(hiddenLoaderAfterTimeout, 2000);
  }
};

const ready = () => {
  // showLoader();

  if (desktopMedia) {
    document.addEventListener('keydown', activateDesktopPageHandler);
  }
};

const loader = () => {
  document.addEventListener('DOMContentLoaded', ready);
};

export {loader};
