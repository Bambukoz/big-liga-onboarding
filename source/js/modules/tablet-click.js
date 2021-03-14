const leadBlock = document.querySelector('.lead');

const animationClass = {
  LEAD_CLICKED: 'lead--clicked',
};

const swipeSlideHandler = () => {
  leadBlock.classList.toggle(animationClass.LEAD_CLICKED);
};

export {swipeSlideHandler};
