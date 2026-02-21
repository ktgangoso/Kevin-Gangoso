const fadeIn = (element) => {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in';
    element.style.opacity = 1;
};

const slideIn = (element) => {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = 'translateX(0)';
};

const bounce = (element) => {
    element.style.animation = 'bounce 0.5s';
};

const initAnimations = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');
    const bounceElements = document.querySelectorAll('.bounce');

    fadeElements.forEach((el) => fadeIn(el));
    slideElements.forEach((el) => slideIn(el));
    bounceElements.forEach((el) => bounce(el));
};

document.addEventListener('DOMContentLoaded', initAnimations);
