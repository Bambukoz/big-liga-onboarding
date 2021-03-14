import {swipeSlideHandler} from './tablet-click';
import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const TIMEOUT = 500;

const keyCode = {
  ENTER: 'Enter',
};

const animationClass = {
  LOADER_INACTIVE: 'loader--inactive',
  LOADER_HIDDEN: 'loader--hidden',
  LOGO_ACTIVE: 'logo--active',
  LEAD_LOADED: 'lead--loaded',
};

const pageClass = {
  LEAD_NOJS: 'lead--nojs',
};

const loader = document.querySelector('.loader');
const logo = document.querySelector('.logo');
const leadBlock = document.querySelector('.lead');
const tabletMedia = window.matchMedia('(max-width: 1023px)').matches;

const setLoader = () => {
  loader.classList.remove(animationClass.LOADER_INACTIVE);
  logo.classList.add(animationClass.LOGO_ACTIVE);
  leadBlock.classList.remove(animationClass.LEAD_LOADED);
  leadBlock.classList.remove(pageClass.LEAD_NOJS);
  disableScrolling();
};

const hiddenLoaderAfterTimeout = () => {
  loader.classList.add(animationClass.LOADER_HIDDEN);
};

const activatePageHandler = () => {
  loader.classList.add(animationClass.LOADER_INACTIVE);
  logo.classList.remove(animationClass.LOGO_ACTIVE);
  leadBlock.classList.add(animationClass.LEAD_LOADED);
  setTimeout(hiddenLoaderAfterTimeout, TIMEOUT);
  enableScrolling();
};

const activateTabletPageHandler = () => {
  activatePageHandler();
};

const activateDesktopPageHandler = (evt) => {
  if (evt.key === keyCode.ENTER) {
    activatePageHandler();
  }
};

const initLoader = () => {
  if (tabletMedia) {
    document.addEventListener('click', activateTabletPageHandler);
    leadBlock.addEventListener('click', swipeSlideHandler);
  } else {
    document.addEventListener('keydown', activateDesktopPageHandler);
  }
};

const pageLoader = () => {
  setLoader();
  document.addEventListener('DOMContentLoaded', initLoader);
};

export {pageLoader};
